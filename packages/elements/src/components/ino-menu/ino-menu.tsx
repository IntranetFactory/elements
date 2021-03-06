import { MDCMenu } from '@material/menu';
import { Component, ComponentInterface, Element, Host, Prop, Watch, h } from '@stencil/core';

import { MDCCustomMenu } from './MDCCustomMenu';

@Component({
  tag: 'ino-menu',
  styleUrl: 'ino-menu.scss',
  shadow: false
})
export class Menu implements ComponentInterface {
  @Element() el!: HTMLElement;

  /**
   * An internal instance of the mdc menu.
   */
  private menu!: MDCMenu;

  /**
   * Anchor element for the menu
   */
  @Prop() inoFor?: string;

  @Watch('inoFor')
  inoForChanged() {
    this.setAnchor(this.inoFor);
  }

  /**
   * Set this option to show the menu.
   */
  @Prop() inoOpen?: boolean = false;

  @Watch('inoOpen')
  inoOpenChanged(open: boolean) {
    this.menu.open = open;
  }

  componentDidLoad() {
    this.menu = new MDCCustomMenu(this.el.querySelector(
      '.mdc-menu'
    ) as HTMLElement); // takes root and foundation, foundation takes adapter

    this.menu.open = this.inoOpen;
    this.setAnchor(this.inoFor);
  }

  private setAnchor(anchor?: string) {
    const target = anchor
      ? document.getElementById(anchor)
      : this.el.parentElement;

    this.menu.setAnchorElement(target);
  }

  componentWillUnload() {
    if (this.menu) {
      this.menu.destroy();
    }
  }

  render() {
    return (
      <Host>
        <div class="mdc-menu-surface--anchor">
          <div class="mdc-menu mdc-menu-surface">
            <ino-list
              role="menu"
              aria-hidden="true"
              aria-orientation="vertical"
              tabindex="-1"
            >
              <slot />
            </ino-list>
          </div>
        </div>
      </Host>
    );
  }
}
