import { storiesOf } from '@storybook/html';
import moment from 'moment';

import { withActions } from '@storybook/addon-actions';
import { select, text, boolean, number } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-datepicker/readme.md';
import './ino-datepicker.scss';


const defaultDate = moment().add(1, 'days');
const minDate = moment().subtract(5, 'days').format('YYYY-MM-DD');
const maxDate = moment().add(5, 'days').format('YYYY-MM-DD');

storiesOf('<ino-datepicker>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-datepicker">
      <ino-datepicker class="customizable-picker"
        ino-label="${text('ino-label', 'Label', 'STANDARD')}"
        ino-outline="${boolean('ino-outline', false, 'STANDARD')}"
        min="${text('min', minDate, 'STANDARD')}"
        max="${text('max', maxDate, 'STANDARD')}"
        disabled="${boolean('disabled', false, 'STANDARD')}"
        required="${boolean('required', false, 'STANDARD')}"

        ino-type="${select('ino-type', ['datetime', 'date', 'time'], 'datetime', 'DATE CONFIG')}"
        ino-default-date="${text('ino-default-date', defaultDate.format('YYYY-MM-DD HH:mm'), 'DATE CONFIG')}"
        ino-twelf-hour-time="${boolean('ino-twelf-hour-time', false, 'DATE CONFIG')}"

        ino-helper="${text('ino-helper', 'Helper message', 'HELPER TEXT')}"
        ino-helper-persistent="${boolean('ino-helper-persistent', false, 'HELPER TEXT')}"
        ino-helper-validation="${boolean('ino-helper-validation', false, 'HELPER TEXT')}">
      </ino-datepicker>
    
      <h4>Types</h4>
      <ino-datepicker ino-type="datetime" ino-label="Datetime"></ino-datepicker>
      <ino-datepicker ino-type="date" ino-label="Date"></ino-datepicker>
      <ino-datepicker ino-type="time" ino-label="Time"></ino-datepicker>
      <ino-datepicker ino-type="range" ino-label="Range"></ino-datepicker>

      <h4>Restrictions</h4>
      <ino-datepicker ino-label="Custom default date" ino-default-date="2017-02-02" ino-type="date"></ino-datepicker>
      <ino-datepicker ino-label="Min date" min="${minDate}" ino-type="date"></ino-datepicker>
      <ino-datepicker ino-label="Max date" max="${maxDate}"  ino-type="date"></ino-datepicker>
      <ino-datepicker ino-label="Min and Max date" min="${minDate} max="${maxDate}"  ino-type="date"></ino-datepicker>
      <ino-datepicker ino-label="hour step and minute step" hour-step="2" minute-step="5" ino-type="datetime"></ino-datepicker>
      <ino-datepicker ino-label="Default hour and minute" ino-type="time" ino-default-hour="14" ino-default-minute="49"></ino-datepicker>

      <h4>Variations</h4>
      <ino-datepicker ino-type="time" ino-label="Twelf hour time" ino-twelf-hour-time></ino-datepicker>
      
      <h4>States</h4>
      <ino-datepicker ino-type="datetime" ino-label="Disabled" disabled></ino-datepicker>
      <ino-datepicker ino-type="datetime" ino-label="Required" required></ino-datepicker>
    </div>
  `)
  .addDecorator(withActions('submit .form'))
  .add('Forms', () => /*html*/`
    <div class="story-datepicker">
      <h4>Required</h4>
      <p>The form should not submit as long as the date field is empty.</p>
      <form class="form" onSubmit="return false;">
        <ino-datepicker ino-type="datetime" ino-label="Required" required></ino-datepicker>
        <ino-button type="submit">Submit</ino-button>
      </form>
    </div>
  `)
;