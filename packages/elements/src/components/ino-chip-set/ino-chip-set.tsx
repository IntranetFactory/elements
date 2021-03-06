import { MDCChip, MDCChipSet } from '@material/chips';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host, Prop, Watch, h
} from '@stencil/core';
import classNames from 'classnames';

import { ChipSetType } from '../types';

@Component({
  tag: 'ino-chip-set',
  styleUrl: 'ino-chip-set.scss',
  shadow: false
})
export class ChipSet implements ComponentInterface {
  private mdcInstance: MDCChipSet;
  private listenerAttached = false;

  @Element() el!: HTMLElement;

  /**
   * The type of this chip set that indicates its behavior.
   * Possible values are: `''` (default), `choice`, `filter`, `input`
   */
  @Prop() inoType?: ChipSetType = '';

  @Watch('inoType')
  inoTypeChanged() {
    this.create();
  }

  /**
   * Event that emits when the value of this element changes.
   *
   * Only applicable if `inoType` is `choice` or `filter`.
   */
  @Event() updateChipSet!: EventEmitter;

  componentDidLoad() {
    this.create();
  }

  componentWillUnload() {
    this.destroy();
  }

  private destroy() {
    if (this.mdcInstance) {
      this.mdcInstance.destroy();
    }

    if (this.listenerAttached) {
      this.el.removeEventListener('MDCChip:interaction', _ =>
        this.notifyChange()
      );
      this.listenerAttached = false;
    }
  }

  private create() {
    this.destroy();

    const chipSetEl = this.el.querySelector('.mdc-chip-set');
    this.mdcInstance = new MDCChipSet(
      chipSetEl,
      undefined,
      (chipEl: HTMLElement) => {
        // This functions hooks into the mdc to customize the init of a chip
        const chip = new MDCChip(chipEl);
        chip.shouldRemoveOnTrailingIconClick = false;
        this.prepareChip(chip.id);
        return chip;
      }
    );

    if (this.inoType === 'choice' || this.inoType === 'input') {
      this.el.addEventListener('MDCChip:interaction', _ => this.notifyChange());
      this.listenerAttached = true;
    }
  }

  private notifyChange() {
    const selectedChipIds = this.mdcInstance.selectedChipIds;
    if (selectedChipIds.length <= 0) {
      this.updateChipSet.emit(true);
      return;
    }
    const chipValues = selectedChipIds.map(
      chipId => this.getInoChip(chipId).inoValue
    );
    this.updateChipSet.emit(
      chipValues.length === 1 ? chipValues[0] : chipValues
    );
  }

  private prepareChip(chipId: string) {
    if (this.inoType === 'filter') {
      const chip = this.getInoChip(chipId);
      chip.inoSelectable = this.inoType === 'filter';
    }
  }

  private getInoChip(chipId: string) {
    const mdcRoot = this.el.querySelector(`#${chipId}`);
    return mdcRoot!.parentElement as HTMLInoChipElement;
  }

  render() {
    const classChipSet = classNames(
      'mdc-chip-set',
      { 'mdc-chip-set--choice': this.inoType === 'choice' },
      { 'mdc-chip-set--filter': this.inoType === 'filter' }
    );

    return (
      <Host>
        <div class={classChipSet}>
          <slot/>
        </div>
      </Host>
    );
  }
}
