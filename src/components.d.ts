/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface InoButton {
      'autofocus': boolean;
      'disabled': boolean;
      'form': string;
      'inoIconLeft': string;
      'inoIconRight': string;
      'inoSecondary': boolean;
      'name': string;
      'type': string;
    }
  }

  interface HTMLInoButtonElement extends StencilComponents.InoButton, HTMLStencilElement {}

  var HTMLInoButtonElement: {
    prototype: HTMLInoButtonElement;
    new (): HTMLInoButtonElement;
  };
  interface HTMLElementTagNameMap {
    'ino-button': HTMLInoButtonElement;
  }
  interface ElementTagNameMap {
    'ino-button': HTMLInoButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-button': JSXElements.InoButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface InoButtonAttributes extends HTMLAttributes {
      'autofocus'?: boolean;
      'disabled'?: boolean;
      'form'?: string;
      'inoIconLeft'?: string;
      'inoIconRight'?: string;
      'inoSecondary'?: boolean;
      'name'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoCard {
      'inoRaised': boolean;
    }
  }

  interface HTMLInoCardElement extends StencilComponents.InoCard, HTMLStencilElement {}

  var HTMLInoCardElement: {
    prototype: HTMLInoCardElement;
    new (): HTMLInoCardElement;
  };
  interface HTMLElementTagNameMap {
    'ino-card': HTMLInoCardElement;
  }
  interface ElementTagNameMap {
    'ino-card': HTMLInoCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-card': JSXElements.InoCardAttributes;
    }
  }
  namespace JSXElements {
    export interface InoCardAttributes extends HTMLAttributes {
      'inoRaised'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoCheckbox {
      'checked': boolean;
      'disabled': boolean;
      'id': string;
      'name': string;
      'tabIndex': number;
      'value': string;
    }
  }

  interface HTMLInoCheckboxElement extends StencilComponents.InoCheckbox, HTMLStencilElement {}

  var HTMLInoCheckboxElement: {
    prototype: HTMLInoCheckboxElement;
    new (): HTMLInoCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    'ino-checkbox': HTMLInoCheckboxElement;
  }
  interface ElementTagNameMap {
    'ino-checkbox': HTMLInoCheckboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-checkbox': JSXElements.InoCheckboxAttributes;
    }
  }
  namespace JSXElements {
    export interface InoCheckboxAttributes extends HTMLAttributes {
      'checked'?: boolean;
      'disabled'?: boolean;
      'id'?: string;
      'name'?: string;
      'tabIndex'?: number;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoIcon {
      'inoIcon': string;
    }
  }

  interface HTMLInoIconElement extends StencilComponents.InoIcon, HTMLStencilElement {}

  var HTMLInoIconElement: {
    prototype: HTMLInoIconElement;
    new (): HTMLInoIconElement;
  };
  interface HTMLElementTagNameMap {
    'ino-icon': HTMLInoIconElement;
  }
  interface ElementTagNameMap {
    'ino-icon': HTMLInoIconElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-icon': JSXElements.InoIconAttributes;
    }
  }
  namespace JSXElements {
    export interface InoIconAttributes extends HTMLAttributes {
      'inoIcon'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoInput {
      'accesskey': string;
      'autocomplete': string;
      'autofocus': boolean;
      'disabled': boolean;
      'max': string;
      'min': string;
      'name': string;
      'pattern': string;
      'placeholder': string;
      'required': boolean;
      'size': number;
      'tabindex': string;
      'type': string;
      'value': string;
    }
  }

  interface HTMLInoInputElement extends StencilComponents.InoInput, HTMLStencilElement {}

  var HTMLInoInputElement: {
    prototype: HTMLInoInputElement;
    new (): HTMLInoInputElement;
  };
  interface HTMLElementTagNameMap {
    'ino-input': HTMLInoInputElement;
  }
  interface ElementTagNameMap {
    'ino-input': HTMLInoInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-input': JSXElements.InoInputAttributes;
    }
  }
  namespace JSXElements {
    export interface InoInputAttributes extends HTMLAttributes {
      'accesskey'?: string;
      'autocomplete'?: string;
      'autofocus'?: boolean;
      'disabled'?: boolean;
      'max'?: string;
      'min'?: string;
      'name'?: string;
      'pattern'?: string;
      'placeholder'?: string;
      'required'?: boolean;
      'size'?: number;
      'tabindex'?: string;
      'type'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoRadio {
      'checked': boolean;
      'disabled': boolean;
      'id': string;
      'name': string;
      'tabIndex': number;
      'value': string;
    }
  }

  interface HTMLInoRadioElement extends StencilComponents.InoRadio, HTMLStencilElement {}

  var HTMLInoRadioElement: {
    prototype: HTMLInoRadioElement;
    new (): HTMLInoRadioElement;
  };
  interface HTMLElementTagNameMap {
    'ino-radio': HTMLInoRadioElement;
  }
  interface ElementTagNameMap {
    'ino-radio': HTMLInoRadioElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-radio': JSXElements.InoRadioAttributes;
    }
  }
  namespace JSXElements {
    export interface InoRadioAttributes extends HTMLAttributes {
      'checked'?: boolean;
      'disabled'?: boolean;
      'id'?: string;
      'name'?: string;
      'tabIndex'?: number;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoSelect {
      'autofocus': boolean;
      'disabled': boolean;
      'form': string;
      'multiple': boolean;
      'name': string;
      'required': boolean;
      'size': number;
    }
  }

  interface HTMLInoSelectElement extends StencilComponents.InoSelect, HTMLStencilElement {}

  var HTMLInoSelectElement: {
    prototype: HTMLInoSelectElement;
    new (): HTMLInoSelectElement;
  };
  interface HTMLElementTagNameMap {
    'ino-select': HTMLInoSelectElement;
  }
  interface ElementTagNameMap {
    'ino-select': HTMLInoSelectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-select': JSXElements.InoSelectAttributes;
    }
  }
  namespace JSXElements {
    export interface InoSelectAttributes extends HTMLAttributes {
      'autofocus'?: boolean;
      'disabled'?: boolean;
      'form'?: string;
      'multiple'?: boolean;
      'name'?: string;
      'required'?: boolean;
      'size'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface InoTooltip {
      'inoLabel': string;
      'inoPlacement': 'auto';
      'inoTargetId': string;
      'inoTrigger': string;
    }
  }

  interface HTMLInoTooltipElement extends StencilComponents.InoTooltip, HTMLStencilElement {}

  var HTMLInoTooltipElement: {
    prototype: HTMLInoTooltipElement;
    new (): HTMLInoTooltipElement;
  };
  interface HTMLElementTagNameMap {
    'ino-tooltip': HTMLInoTooltipElement;
  }
  interface ElementTagNameMap {
    'ino-tooltip': HTMLInoTooltipElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'ino-tooltip': JSXElements.InoTooltipAttributes;
    }
  }
  namespace JSXElements {
    export interface InoTooltipAttributes extends HTMLAttributes {
      'inoLabel'?: string;
      'inoPlacement'?: 'auto';
      'inoTargetId'?: string;
      'inoTrigger'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
