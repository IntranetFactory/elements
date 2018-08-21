/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import '@stencil/core';


import {
  ButtonType,
} from './components/ino-button/ino-button';
import {
  DatepickerType,
} from './components/ino-datepicker/ino-datepicker';
import {
  ImageDecodingTypes,
} from './components/ino-img/ino-img';


declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface InoButton {
      /**
       * Sets the autofocus for this element.
       */
      'autofocus': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The form id this element origins to.
       */
      'form': string;
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme': string;
      /**
       * Makes the button text and container slightly smaller.
       */
      'inoDense': boolean;
      /**
       * The fill type of this element. Possible values: `solid` (default), `outline`, `raised` or `transparent`.
       */
      'inoFill': string;
      /**
       * Adds an icon to the button. The icon is appended before the text. Use `inoIconPrepend` to place it after the text.
       */
      'inoIcon': string;
      /**
       * Prepends an icon after the text.
       */
      'inoIconPrepend': boolean;
      /**
       * The name of the element.
       */
      'name': string;
      /**
       * The type of this form.  Can either be `button`, `submit` or `reset`.
       */
      'type': ButtonType;
    }

    interface InoCard {
      /**
       * Removes the shadow and displays a hairline outline instead.
       */
      'inoOutline': boolean;
      /**
       * An optional subtitle of this card.
       */
      'inoSubtitle': string;
      /**
       * An optional title of this card.
       */
      'inoTitle': string;
    }

    interface InoCheckbox {
      /**
       * Marks this element as checked.
       */
      'checked': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The id of this element.
       */
      'id': string;
      /**
       * The name of this element.
       */
      'name': string;
      /**
       * The tab index of this element.
       */
      'tabIndex': number;
      /**
       * The value of this element.
       */
      'value': string;
    }

    interface InoChip {
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme': string;
      /**
       * The fill type of this element. Possible values: `solid` (default) or `outline`.
       */
      'inoFill': string;
      /**
       * The icon before the label in this chip.
       */
      'inoIcon': string;
      /**
       * If true, add a close icon on the right side of this chip. It enables an `inoRemove`-Event that can be listened to.
       */
      'inoRemovable': boolean;
      /**
       * Marks this element as selected.
       */
      'inoSelected': boolean;
    }

    interface InoDatepicker {
      /**
       * The accesskey of this element.
       */
      'accesskey': string;
      /**
       * Autofocuses this element.
       */
      'autofocus': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * A simple date string that sets the default date.
       */
      'inoDefaultDate': string;
      /**
       * A number containing the initial hour in the date-time picker.
       */
      'inoDefaultHour': number;
      /**
       * A number containing the initial minute in the date-time picker.
       */
      'inoDefaultMinute': number;
      /**
       * If true, displays time picker in 12 hour mode with AM/PM selection.
       */
      'inoTwelfHourTime': boolean;
      /**
       * The type (`date`, `datetime` or `time`) of this date picker element. Default is `date`.
       */
      'inoType': DatepickerType;
      /**
       * The maximum date that a user can pick to (inclusive).
       */
      'max': string;
      /**
       * The minimum date that a user can start picking from (inclusive).
       */
      'min': string;
      /**
       * The input name of this element.
       */
      'name': string;
      /**
       * Defines the input placeholder for this element.
       */
      'placeholder': string;
      /**
       * Marks this element as required.
       */
      'required': boolean;
      /**
       * The tabindex of this element.
       */
      'tabindex': string;
      /**
       * The value of this element.
       */
      'value': string;
    }

    interface InoFormRow {
      /**
       * The label for this form row which describes the form element.
       */
      'inoLabel': string;
      /**
       * An indicator which marks the contents of the form row as mandatory. If you use this make sure you also check for the values in your application logic.
       */
      'inoMandatory': boolean;
    }

    interface InoIcon {
      /**
       * The name of the icon of this element.
       */
      'inoIcon': string;
    }

    interface InoImg {
      /**
       * The alternative text of this image.
       */
      'alt': string;
      /**
       * The decoding method of the native html input element. Can either be `async`, `auto` or `sync`.
       */
      'decoding': ImageDecodingTypes;
      /**
       * The fixed height of this image.
       */
      'height': number;
      /**
       * The ratio height for this image (default = 1). Use this attribute together with `ino-ratio-width` to reserve a space for the image during rendering and to prevent jumping contents.
       */
      'inoRatioHeight': number;
      /**
       * The ratio width of this image (default = 1). Use this attribute together with `ino-ratio-height` to reserve a space for the image during rendering and to prevent jumping contents.
       */
      'inoRatioWidth': number;
      /**
       * If true, styles the image with rounded borders.
       */
      'inoRounded': boolean;
      /**
       * A set of rules to specify the usage of images sources that are defined in the `srcset` attribute.
       */
      'sizes': string;
      /**
       * The source of this image element.
       */
      'src': string;
      /**
       * A set of sources of this image for different viewports or devices.
       */
      'srcset': string;
      /**
       * An ID referencing to a defined map element for this image.
       */
      'usemap': string;
      /**
       * The fixed of the image.
       */
      'width': number;
    }

    interface InoInput {
      /**
       * The accesskey of this native element.
       */
      'accesskey': string;
      /**
       * The autocomplete property of this element.
       */
      'autocomplete': string;
      /**
       * The autofocus of this element.
       */
      'autofocus': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The optional helper text.
       */
      'inoHelper': string;
      /**
       * Displays the helper permanently.
       */
      'inoHelperPersistent': boolean;
      /**
       * Styles the helper text as a validation message.
       */
      'inoHelperValidation': boolean;
      /**
       * The optional floating label of this input field.
       */
      'inoLabel': string;
      /**
       * Styles the input field as outlined element.
       */
      'inoOutline': boolean;
      /**
       * The max value of this element.
       */
      'max': string;
      /**
       * The min value of this element.
       */
      'min': string;
      /**
       * The name of this element.
       */
      'name': string;
      /**
       * The validation pattern of this element.
       */
      'pattern': string;
      /**
       * The placeholder of this element.
       */
      'placeholder': string;
      /**
       * Marks this element as required.
       */
      'required': boolean;
      /**
       * The size of this element.
       */
      'size': number;
      /**
       * The tabindex of this element.
       */
      'tabindex': string;
      /**
       * The type of this element (default = text).
       */
      'type': string;
      /**
       * The value of this element.
       */
      'value': string;
    }

    interface InoMessageBox {
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme': string;
      /**
       * The heading of this chip.
       */
      'inoHeading': string;
      /**
       * The icon before the heading in this chip.
       */
      'inoIcon': string;
      /**
       * If true, display the message box as modal in fix position on top of the page.
       */
      'inoModal': boolean;
      /**
       * If true, add a close icon on the right side of this chip. It enables an `inoRemove`-Event that can be listened to.
       */
      'inoRemovable': boolean;
    }

    interface InoPopover {
      /**
       * The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.
       */
      'inoFor': string;
      /**
       * The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`
       */
      'inoPlacement': string;
      /**
       * The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.
       */
      'inoTrigger': string;
    }

    interface InoRadio {
      /**
       * Marks this element as checked.
       */
      'checked': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The id of this element.
       */
      'id': string;
      /**
       * The name of this element.
       */
      'name': string;
      /**
       * The tabIndex of this element.
       */
      'tabIndex': number;
      /**
       * The value of this element.
       */
      'value': string;
    }

    interface InoRange {
      /**
       * The autofocus of this element.
       */
      'autofocus': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The name of the color scheme of this component. Possible values: `primary` (default), `secondary`, `tertiary`, `success`, `warning`, `danger`.
       */
      'inoColorScheme': string;
      /**
       * The max value of this element.
       */
      'max': number;
      /**
       * The min value of this element.
       */
      'min': number;
      /**
       * The name of this element.
       */
      'name': string;
      /**
       * Marks this element as required.
       */
      'required': boolean;
      /**
       * The step size for this element (default =1)
       */
      'step': number;
      /**
       * The value of this element.
       */
      'value': number;
    }

    interface InoSelect {
      /**
       * Marks this element as autofocused.
       */
      'autofocus': boolean;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The form this element belongs to.
       */
      'form': string;
      /**
       * The label of this element
       */
      'inoLabel': string;
      /**
       * Styles this select box as outlined element.
       */
      'inoOutline': boolean;
      /**
       * Prepends a selected, empty and disabled option.  The label is positioned as placeholder and floats to the top after selecting an option.
       */
      'inoPrependDefault': boolean;
      /**
       * The name of this element.
       */
      'name': string;
      /**
       * Marks this element as required.
       */
      'required': boolean;
    }

    interface InoSpinner {
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme': string;
      /**
       * The height of this spinner (default = 40)
       */
      'inoHeight': number;
      /**
       * If true, the spinner is shown as modal over the current app page.
       */
      'inoModal': boolean;
      /**
       * The type of this spinner (default = tile). Possible values: `tile`, `bounce` or `circle`
       */
      'inoType': string;
      /**
       * The width of this spinner (defaul = 40)
       */
      'inoWidth': number;
    }

    interface InoTextarea {
      /**
       * The autofocus of this element.
       */
      'autofocus': boolean;
      /**
       * The number of cols of this textarea.
       */
      'cols': number;
      /**
       * Disables this element.
       */
      'disabled': boolean;
      /**
       * The optional floating label of this input field.
       */
      'inoLabel': string;
      /**
       * The max length of this element.
       */
      'maxlength': number;
      /**
       * The min length of this element.
       */
      'minlength': number;
      /**
       * The name of this element.
       */
      'name': string;
      /**
       * The placeholder of this element.
       */
      'placeholder': string;
      /**
       * Marks this element as required.
       */
      'required': boolean;
      /**
       * The number of rows of this textarea.
       */
      'rows': number;
      /**
       * The value of this element.
       */
      'value': string;
    }

    interface InoTooltip {
      /**
       * The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.
       */
      'inoFor': string;
      /**
       * The text shown in the tooltip.
       */
      'inoLabel': string;
      /**
       * The placement of the tooltip. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`
       */
      'inoPlacement': string;
      /**
       * The trigger to show the tooltip - either click, hover or focus. Multiple triggers possible by separating them with a space.
       */
      'inoTrigger': string;
    }
  }


    interface HTMLInoButtonElement extends StencilComponents.InoButton, HTMLStencilElement {}

    var HTMLInoButtonElement: {
      prototype: HTMLInoButtonElement;
      new (): HTMLInoButtonElement;
    };
    

    interface HTMLInoCardElement extends StencilComponents.InoCard, HTMLStencilElement {}

    var HTMLInoCardElement: {
      prototype: HTMLInoCardElement;
      new (): HTMLInoCardElement;
    };
    

    interface HTMLInoCheckboxElement extends StencilComponents.InoCheckbox, HTMLStencilElement {}

    var HTMLInoCheckboxElement: {
      prototype: HTMLInoCheckboxElement;
      new (): HTMLInoCheckboxElement;
    };
    

    interface HTMLInoChipElement extends StencilComponents.InoChip, HTMLStencilElement {}

    var HTMLInoChipElement: {
      prototype: HTMLInoChipElement;
      new (): HTMLInoChipElement;
    };
    

    interface HTMLInoDatepickerElement extends StencilComponents.InoDatepicker, HTMLStencilElement {}

    var HTMLInoDatepickerElement: {
      prototype: HTMLInoDatepickerElement;
      new (): HTMLInoDatepickerElement;
    };
    

    interface HTMLInoFormRowElement extends StencilComponents.InoFormRow, HTMLStencilElement {}

    var HTMLInoFormRowElement: {
      prototype: HTMLInoFormRowElement;
      new (): HTMLInoFormRowElement;
    };
    

    interface HTMLInoIconElement extends StencilComponents.InoIcon, HTMLStencilElement {}

    var HTMLInoIconElement: {
      prototype: HTMLInoIconElement;
      new (): HTMLInoIconElement;
    };
    

    interface HTMLInoImgElement extends StencilComponents.InoImg, HTMLStencilElement {}

    var HTMLInoImgElement: {
      prototype: HTMLInoImgElement;
      new (): HTMLInoImgElement;
    };
    

    interface HTMLInoInputElement extends StencilComponents.InoInput, HTMLStencilElement {}

    var HTMLInoInputElement: {
      prototype: HTMLInoInputElement;
      new (): HTMLInoInputElement;
    };
    

    interface HTMLInoMessageBoxElement extends StencilComponents.InoMessageBox, HTMLStencilElement {}

    var HTMLInoMessageBoxElement: {
      prototype: HTMLInoMessageBoxElement;
      new (): HTMLInoMessageBoxElement;
    };
    

    interface HTMLInoPopoverElement extends StencilComponents.InoPopover, HTMLStencilElement {}

    var HTMLInoPopoverElement: {
      prototype: HTMLInoPopoverElement;
      new (): HTMLInoPopoverElement;
    };
    

    interface HTMLInoRadioElement extends StencilComponents.InoRadio, HTMLStencilElement {}

    var HTMLInoRadioElement: {
      prototype: HTMLInoRadioElement;
      new (): HTMLInoRadioElement;
    };
    

    interface HTMLInoRangeElement extends StencilComponents.InoRange, HTMLStencilElement {}

    var HTMLInoRangeElement: {
      prototype: HTMLInoRangeElement;
      new (): HTMLInoRangeElement;
    };
    

    interface HTMLInoSelectElement extends StencilComponents.InoSelect, HTMLStencilElement {}

    var HTMLInoSelectElement: {
      prototype: HTMLInoSelectElement;
      new (): HTMLInoSelectElement;
    };
    

    interface HTMLInoSpinnerElement extends StencilComponents.InoSpinner, HTMLStencilElement {}

    var HTMLInoSpinnerElement: {
      prototype: HTMLInoSpinnerElement;
      new (): HTMLInoSpinnerElement;
    };
    

    interface HTMLInoTextareaElement extends StencilComponents.InoTextarea, HTMLStencilElement {}

    var HTMLInoTextareaElement: {
      prototype: HTMLInoTextareaElement;
      new (): HTMLInoTextareaElement;
    };
    

    interface HTMLInoTooltipElement extends StencilComponents.InoTooltip, HTMLStencilElement {}

    var HTMLInoTooltipElement: {
      prototype: HTMLInoTooltipElement;
      new (): HTMLInoTooltipElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'ino-button': JSXElements.InoButtonAttributes;
    'ino-card': JSXElements.InoCardAttributes;
    'ino-checkbox': JSXElements.InoCheckboxAttributes;
    'ino-chip': JSXElements.InoChipAttributes;
    'ino-datepicker': JSXElements.InoDatepickerAttributes;
    'ino-form-row': JSXElements.InoFormRowAttributes;
    'ino-icon': JSXElements.InoIconAttributes;
    'ino-img': JSXElements.InoImgAttributes;
    'ino-input': JSXElements.InoInputAttributes;
    'ino-message-box': JSXElements.InoMessageBoxAttributes;
    'ino-popover': JSXElements.InoPopoverAttributes;
    'ino-radio': JSXElements.InoRadioAttributes;
    'ino-range': JSXElements.InoRangeAttributes;
    'ino-select': JSXElements.InoSelectAttributes;
    'ino-spinner': JSXElements.InoSpinnerAttributes;
    'ino-textarea': JSXElements.InoTextareaAttributes;
    'ino-tooltip': JSXElements.InoTooltipAttributes;
    }
  }

  namespace JSXElements {

    export interface InoButtonAttributes extends HTMLAttributes {
      /**
       * Sets the autofocus for this element.
       */
      'autofocus'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The form id this element origins to.
       */
      'form'?: string;
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme'?: string;
      /**
       * Makes the button text and container slightly smaller.
       */
      'inoDense'?: boolean;
      /**
       * The fill type of this element. Possible values: `solid` (default), `outline`, `raised` or `transparent`.
       */
      'inoFill'?: string;
      /**
       * Adds an icon to the button. The icon is appended before the text. Use `inoIconPrepend` to place it after the text.
       */
      'inoIcon'?: string;
      /**
       * Prepends an icon after the text.
       */
      'inoIconPrepend'?: boolean;
      /**
       * The name of the element.
       */
      'name'?: string;
      /**
       * The type of this form.  Can either be `button`, `submit` or `reset`.
       */
      'type'?: ButtonType;
    }

    export interface InoCardAttributes extends HTMLAttributes {
      /**
       * Removes the shadow and displays a hairline outline instead.
       */
      'inoOutline'?: boolean;
      /**
       * An optional subtitle of this card.
       */
      'inoSubtitle'?: string;
      /**
       * An optional title of this card.
       */
      'inoTitle'?: string;
    }

    export interface InoCheckboxAttributes extends HTMLAttributes {
      /**
       * Marks this element as checked.
       */
      'checked'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The id of this element.
       */
      'id'?: string;
      /**
       * The name of this element.
       */
      'name'?: string;
      /**
       * The tab index of this element.
       */
      'tabIndex'?: number;
      /**
       * The value of this element.
       */
      'value'?: string;
    }

    export interface InoChipAttributes extends HTMLAttributes {
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme'?: string;
      /**
       * The fill type of this element. Possible values: `solid` (default) or `outline`.
       */
      'inoFill'?: string;
      /**
       * The icon before the label in this chip.
       */
      'inoIcon'?: string;
      /**
       * If true, add a close icon on the right side of this chip. It enables an `inoRemove`-Event that can be listened to.
       */
      'inoRemovable'?: boolean;
      /**
       * Marks this element as selected.
       */
      'inoSelected'?: boolean;
      /**
       * Event that emits as soon as the user removes this chip. Listen to this event to hide or destroy this chip. The event only emits if the property `inoRemovable` is true.
       */
      'onInoRemove'?: (event: CustomEvent) => void;
    }

    export interface InoDatepickerAttributes extends HTMLAttributes {
      /**
       * The accesskey of this element.
       */
      'accesskey'?: string;
      /**
       * Autofocuses this element.
       */
      'autofocus'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * A simple date string that sets the default date.
       */
      'inoDefaultDate'?: string;
      /**
       * A number containing the initial hour in the date-time picker.
       */
      'inoDefaultHour'?: number;
      /**
       * A number containing the initial minute in the date-time picker.
       */
      'inoDefaultMinute'?: number;
      /**
       * If true, displays time picker in 12 hour mode with AM/PM selection.
       */
      'inoTwelfHourTime'?: boolean;
      /**
       * The type (`date`, `datetime` or `time`) of this date picker element. Default is `date`.
       */
      'inoType'?: DatepickerType;
      /**
       * The maximum date that a user can pick to (inclusive).
       */
      'max'?: string;
      /**
       * The minimum date that a user can start picking from (inclusive).
       */
      'min'?: string;
      /**
       * The input name of this element.
       */
      'name'?: string;
      /**
       * Defines the input placeholder for this element.
       */
      'placeholder'?: string;
      /**
       * Marks this element as required.
       */
      'required'?: boolean;
      /**
       * The tabindex of this element.
       */
      'tabindex'?: string;
      /**
       * The value of this element.
       */
      'value'?: string;
    }

    export interface InoFormRowAttributes extends HTMLAttributes {
      /**
       * The label for this form row which describes the form element.
       */
      'inoLabel'?: string;
      /**
       * An indicator which marks the contents of the form row as mandatory. If you use this make sure you also check for the values in your application logic.
       */
      'inoMandatory'?: boolean;
    }

    export interface InoIconAttributes extends HTMLAttributes {
      /**
       * The name of the icon of this element.
       */
      'inoIcon'?: string;
    }

    export interface InoImgAttributes extends HTMLAttributes {
      /**
       * The alternative text of this image.
       */
      'alt'?: string;
      /**
       * The decoding method of the native html input element. Can either be `async`, `auto` or `sync`.
       */
      'decoding'?: ImageDecodingTypes;
      /**
       * The fixed height of this image.
       */
      'height'?: number;
      /**
       * The ratio height for this image (default = 1). Use this attribute together with `ino-ratio-width` to reserve a space for the image during rendering and to prevent jumping contents.
       */
      'inoRatioHeight'?: number;
      /**
       * The ratio width of this image (default = 1). Use this attribute together with `ino-ratio-height` to reserve a space for the image during rendering and to prevent jumping contents.
       */
      'inoRatioWidth'?: number;
      /**
       * If true, styles the image with rounded borders.
       */
      'inoRounded'?: boolean;
      /**
       * A set of rules to specify the usage of images sources that are defined in the `srcset` attribute.
       */
      'sizes'?: string;
      /**
       * The source of this image element.
       */
      'src'?: string;
      /**
       * A set of sources of this image for different viewports or devices.
       */
      'srcset'?: string;
      /**
       * An ID referencing to a defined map element for this image.
       */
      'usemap'?: string;
      /**
       * The fixed of the image.
       */
      'width'?: number;
    }

    export interface InoInputAttributes extends HTMLAttributes {
      /**
       * The accesskey of this native element.
       */
      'accesskey'?: string;
      /**
       * The autocomplete property of this element.
       */
      'autocomplete'?: string;
      /**
       * The autofocus of this element.
       */
      'autofocus'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The optional helper text.
       */
      'inoHelper'?: string;
      /**
       * Displays the helper permanently.
       */
      'inoHelperPersistent'?: boolean;
      /**
       * Styles the helper text as a validation message.
       */
      'inoHelperValidation'?: boolean;
      /**
       * The optional floating label of this input field.
       */
      'inoLabel'?: string;
      /**
       * Styles the input field as outlined element.
       */
      'inoOutline'?: boolean;
      /**
       * The max value of this element.
       */
      'max'?: string;
      /**
       * The min value of this element.
       */
      'min'?: string;
      /**
       * The name of this element.
       */
      'name'?: string;
      /**
       * The validation pattern of this element.
       */
      'pattern'?: string;
      /**
       * The placeholder of this element.
       */
      'placeholder'?: string;
      /**
       * Marks this element as required.
       */
      'required'?: boolean;
      /**
       * The size of this element.
       */
      'size'?: number;
      /**
       * The tabindex of this element.
       */
      'tabindex'?: string;
      /**
       * The type of this element (default = text).
       */
      'type'?: string;
      /**
       * The value of this element.
       */
      'value'?: string;
    }

    export interface InoMessageBoxAttributes extends HTMLAttributes {
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme'?: string;
      /**
       * The heading of this chip.
       */
      'inoHeading'?: string;
      /**
       * The icon before the heading in this chip.
       */
      'inoIcon'?: string;
      /**
       * If true, display the message box as modal in fix position on top of the page.
       */
      'inoModal'?: boolean;
      /**
       * If true, add a close icon on the right side of this chip. It enables an `inoRemove`-Event that can be listened to.
       */
      'inoRemovable'?: boolean;
      /**
       * Event that emits as soon as the user removes this element. Listen to this event to hide or destroy this element. The event only emits if the property `inoRemovable` is true.
       */
      'onInoRemove'?: (event: CustomEvent) => void;
    }

    export interface InoPopoverAttributes extends HTMLAttributes {
      /**
       * The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.
       */
      'inoFor'?: string;
      /**
       * The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`
       */
      'inoPlacement'?: string;
      /**
       * The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.
       */
      'inoTrigger'?: string;
    }

    export interface InoRadioAttributes extends HTMLAttributes {
      /**
       * Marks this element as checked.
       */
      'checked'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The id of this element.
       */
      'id'?: string;
      /**
       * The name of this element.
       */
      'name'?: string;
      /**
       * The tabIndex of this element.
       */
      'tabIndex'?: number;
      /**
       * The value of this element.
       */
      'value'?: string;
    }

    export interface InoRangeAttributes extends HTMLAttributes {
      /**
       * The autofocus of this element.
       */
      'autofocus'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The name of the color scheme of this component. Possible values: `primary` (default), `secondary`, `tertiary`, `success`, `warning`, `danger`.
       */
      'inoColorScheme'?: string;
      /**
       * The max value of this element.
       */
      'max'?: number;
      /**
       * The min value of this element.
       */
      'min'?: number;
      /**
       * The name of this element.
       */
      'name'?: string;
      /**
       * Marks this element as required.
       */
      'required'?: boolean;
      /**
       * The step size for this element (default =1)
       */
      'step'?: number;
      /**
       * The value of this element.
       */
      'value'?: number;
    }

    export interface InoSelectAttributes extends HTMLAttributes {
      /**
       * Marks this element as autofocused.
       */
      'autofocus'?: boolean;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The form this element belongs to.
       */
      'form'?: string;
      /**
       * The label of this element
       */
      'inoLabel'?: string;
      /**
       * Styles this select box as outlined element.
       */
      'inoOutline'?: boolean;
      /**
       * Prepends a selected, empty and disabled option.  The label is positioned as placeholder and floats to the top after selecting an option.
       */
      'inoPrependDefault'?: boolean;
      /**
       * The name of this element.
       */
      'name'?: string;
      /**
       * Marks this element as required.
       */
      'required'?: boolean;
    }

    export interface InoSpinnerAttributes extends HTMLAttributes {
      /**
       * The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`.
       */
      'inoColorScheme'?: string;
      /**
       * The height of this spinner (default = 40)
       */
      'inoHeight'?: number;
      /**
       * If true, the spinner is shown as modal over the current app page.
       */
      'inoModal'?: boolean;
      /**
       * The type of this spinner (default = tile). Possible values: `tile`, `bounce` or `circle`
       */
      'inoType'?: string;
      /**
       * The width of this spinner (defaul = 40)
       */
      'inoWidth'?: number;
    }

    export interface InoTextareaAttributes extends HTMLAttributes {
      /**
       * The autofocus of this element.
       */
      'autofocus'?: boolean;
      /**
       * The number of cols of this textarea.
       */
      'cols'?: number;
      /**
       * Disables this element.
       */
      'disabled'?: boolean;
      /**
       * The optional floating label of this input field.
       */
      'inoLabel'?: string;
      /**
       * The max length of this element.
       */
      'maxlength'?: number;
      /**
       * The min length of this element.
       */
      'minlength'?: number;
      /**
       * The name of this element.
       */
      'name'?: string;
      /**
       * The placeholder of this element.
       */
      'placeholder'?: string;
      /**
       * Marks this element as required.
       */
      'required'?: boolean;
      /**
       * The number of rows of this textarea.
       */
      'rows'?: number;
      /**
       * The value of this element.
       */
      'value'?: string;
    }

    export interface InoTooltipAttributes extends HTMLAttributes {
      /**
       * The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.
       */
      'inoFor'?: string;
      /**
       * The text shown in the tooltip.
       */
      'inoLabel'?: string;
      /**
       * The placement of the tooltip. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`
       */
      'inoPlacement'?: string;
      /**
       * The trigger to show the tooltip - either click, hover or focus. Multiple triggers possible by separating them with a space.
       */
      'inoTrigger'?: string;
    }
  }

  interface HTMLElementTagNameMap {
    'ino-button': HTMLInoButtonElement
    'ino-card': HTMLInoCardElement
    'ino-checkbox': HTMLInoCheckboxElement
    'ino-chip': HTMLInoChipElement
    'ino-datepicker': HTMLInoDatepickerElement
    'ino-form-row': HTMLInoFormRowElement
    'ino-icon': HTMLInoIconElement
    'ino-img': HTMLInoImgElement
    'ino-input': HTMLInoInputElement
    'ino-message-box': HTMLInoMessageBoxElement
    'ino-popover': HTMLInoPopoverElement
    'ino-radio': HTMLInoRadioElement
    'ino-range': HTMLInoRangeElement
    'ino-select': HTMLInoSelectElement
    'ino-spinner': HTMLInoSpinnerElement
    'ino-textarea': HTMLInoTextareaElement
    'ino-tooltip': HTMLInoTooltipElement
  }

  interface ElementTagNameMap {
    'ino-button': HTMLInoButtonElement;
    'ino-card': HTMLInoCardElement;
    'ino-checkbox': HTMLInoCheckboxElement;
    'ino-chip': HTMLInoChipElement;
    'ino-datepicker': HTMLInoDatepickerElement;
    'ino-form-row': HTMLInoFormRowElement;
    'ino-icon': HTMLInoIconElement;
    'ino-img': HTMLInoImgElement;
    'ino-input': HTMLInoInputElement;
    'ino-message-box': HTMLInoMessageBoxElement;
    'ino-popover': HTMLInoPopoverElement;
    'ino-radio': HTMLInoRadioElement;
    'ino-range': HTMLInoRangeElement;
    'ino-select': HTMLInoSelectElement;
    'ino-spinner': HTMLInoSpinnerElement;
    'ino-textarea': HTMLInoTextareaElement;
    'ino-tooltip': HTMLInoTooltipElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;