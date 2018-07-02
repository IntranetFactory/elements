import { storiesOf } from '@storybook/vue';

import { number, boolean, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-spinner/readme.md';
import './ino-spinner.scss';



storiesOf('<ino-spinner>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-spinner">
        <div class="flex-parent-center">
          <div>
            <h4>Customizable Spinner</h4>
            <ino-spinner
              class="customizable-spinner"
              ino-color-scheme={select(
                'ino-color-scheme',
                ['primary', 'secondary', 'tertiary', 'success', 'warning', 'error', 'light', 'dark' ],
                'primary'
              )}
              ino-type={select(
                'ino-type',
                ['tile', 'bounce', 'circle'],
                'tile'
              )}
              ino-height={number('ino-height', 40)}
              ino-width={number('ino-width', 40)}
              ino-modal={boolean('ino-modal', false)}
            >
            </ino-spinner>
          </div>
        </div>

        <h4>Color Scheme</h4>

        <div class="flex-parent">
          <div class="flex-child">
            <h5>primary</h5>
            <ino-spinner ino-color-scheme="primary"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>secondary</h5>
            <ino-spinner ino-color-scheme="secondary"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>tertiary</h5>
            <ino-spinner ino-color-scheme="tertiary"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>success</h5>
            <ino-spinner ino-color-scheme="success"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>warning</h5>
            <ino-spinner ino-color-scheme="warning"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>error</h5>
            <ino-spinner ino-color-scheme="error"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>light</h5>
            <ino-spinner ino-color-scheme="light"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>dark</h5>
            <ino-spinner ino-color-scheme="dark"></ino-spinner>
          </div>
        </div>

        <h4>Type</h4>
        <div class="flex-parent">
          <div class="flex-child">
            <h5>tile</h5>
            <ino-spinner ino-type="tile"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>bounce</h5>
            <ino-spinner ino-type="bounce"></ino-spinner>
          </div>
          <div class="flex-child">
            <h5>circle</h5>
            <ino-spinner ino-type="circle"></ino-spinner>
          </div>
        </div>
      </div>
    )
  }))
  .add('As modal', () => ({
    render: h => (
      <div class="story-button">
        <ino-spinner ino-modal></ino-spinner>
      </div>
    )
  })
);