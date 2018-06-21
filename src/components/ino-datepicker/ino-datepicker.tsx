import { Component, Element, Prop, State, Watch } from '@stencil/core';
import flatpickr from 'flatpickr';

@Component({
  tag: 'ino-datepicker',
  styleUrls: [
    '../../../node_modules/flatpickr/dist/flatpickr.css',
    'ino-datepicker.scss'
  ],
  shadow: false
})
export class Datepicker {
  @Element() el: HTMLElement;

  /**
   * The accesskey of this element.
   */
  @Prop() accesskey?: string;

  /**
   * Autofocuses this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The input name of this element.
   */
  @Prop() name?: string;

  /**
   * Defines the input placeholder for this element.
   */
  @Prop() placeholder: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The tabindex of this element.
   */
  @Prop() tabindex?: string;

  /**
   * The value of this element.
   */
  @Prop({mutable: true}) value?: string;

  /**
   * The minimum date that a user can start picking from (inclusive).
   */
  @Prop() min: string;
  @Watch('min')
  minChanged(value: string) {
    this.update('minDate', value);
  }

  /**
   * The maximum date that a user can pick to (inclusive).
   */
  @Prop() max: string;
  @Watch('max')
  maxChanged(value: string) {
    this.update('maxDate', value);
  }


  /**
   * The type (`date`, `datetime` or `time`) of this date picker element.
   * Default is `date`.
   */
  @Prop() inoType: 'date'|'datetime'|'time' = 'date';
  @Watch('inoType')
  inoTypeChanged() {
    this.create();
  }

  /**
   * A simple date string that sets the default date.
   */
  @Prop() inoDefaultDate?: string;
  @Watch('inoDefaultDate')
  inoDefaultDateChanged(value: string) {
    this.update('inoDefaultDate', value);
  }

  /**
   * A number containing the initial hour in the date-time picker.
   */
  @Prop() inoDefaultHour: number = 12;
  @Watch('inoDefaultHour')
  inoDefaultHourChanged(value: string) {
    this.update('inoDefaultHour', value);
  }

  /**
   * A number containing the initial minute in the date-time picker.
   */
  @Prop() inoDefaultMinute: number = 0;
  @Watch('inoDefaultMinute')
  inoDefaultMinuteChanged(value: string) {
    this.update('inoDefaultMinute', value);
  }

  /**
   * If true, displays time picker in 12 hour mode with AM/PM selection.
   */
  @Prop() inoTwelfHourTime?: boolean;
  @Watch('inoTwelfHourTime')
  inoTwelfHourTimeChanged(value: string) {
    this.update('inoTwelfHourTime', value);
  }


  @State() flatpickr = null;


  componentDidLoad() {
    this.create();
  }

  private readonly PATTERNS = {
    'date': '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])',
    'time': '(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9])'
  };

  private create() {
    const options = {
      allowInput: true,
      defaultDate: this.inoDefaultDate,
      defaultHour: this.inoDefaultHour,
      defaultMinute: this.inoDefaultMinute,
      minDate: this.min,
      maxDate: this.max,
      enableTime: this.inoType !== 'date',
      noCalendar: this.inoType === 'time',
      ignoredFocusElements: [],
      time_24hr: !this.inoTwelfHourTime
    };

    this.dispose();
    const target = this.el.querySelector('input');
    this.flatpickr = flatpickr(target, options);
  }

  private update(option, value) {
    if (this.flatpickr) {
      this.flatpickr.set(option, value);
    }
  }

  private dispose() {
    if (this.flatpickr) {
      this.flatpickr.destroy();
    }
  }

  private inputPattern() {
    if (this.inoType === 'date') {
      return this.PATTERNS.date;
    }
    if (this.inoType === 'time') {
      return this.PATTERNS.time;
    }
    return this.PATTERNS.date + ' ' + this.PATTERNS.time;
  }

  render() {
    return (
      <div class="composer">
        <ino-input type="text"
          placeholder={this.placeholder}
          disabled={this.disabled}
          accessKey={this.accesskey}
          autofocus={this.autofocus}
          name={this.name}
          pattern={this.inputPattern()}
          required={this.required}
          tabindex={this.tabindex}></ino-input>
      </div>
    );
  }
}
