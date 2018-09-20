import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ino-range',
  styleUrl: 'ino-range.scss',
  shadow: false
})
export class Range {
  /**
   * The autofocus of this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The min value of this element.
   */
  @Prop() min?: number;

  /**
   * The max value of this element.
   */
  @Prop() max?: number;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The value of this element.
   */
  @Prop() value?: number;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The step size for this element (default =1)
   */
  @Prop() step = 1;

  /**
   * The name of the color scheme of this component.
   * Possible values: `primary` (default), `secondary`, `tertiary`,
   * `success`, `warning`, `danger`.
   */
  @Prop() inoColorScheme?: string;

  render() {
    return (
      <div>
        <input
          class="ino-range__native-element"
          type="range"
          autofocus={this.autofocus}
          disabled={this.disabled}
          min={this.min}
          max={this.max}
          step={this.step}
          name={this.name}
          required={this.required}
          value={this.value}
        />
      </div>
    );
  }
}
