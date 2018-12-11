import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

import componentReadme from '../../components/ino-checkbox/readme.md';
import withStencilReadme from '../core/with-stencil-readme';

import './ino-checkbox.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-checkbox') {
      return;
    }

    el.setAttribute('checked', e.detail);

    if (el.getAttribute('indeterminate') === "true") {
        el.setAttribute('indeterminate', 'false');
    }
  };

  document.addEventListener('checkedChanges', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChanges', eventHandler);
  };
};


storiesOf('<ino-checkbox>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions(
    'checkedChanges .customizable-checkbox'
  ))
  .addDecorator(story => {
    addons.getChannel().emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => /*html*/`
    <div class="story-checkbox">
      <ino-checkbox
        class="customizable-checkbox"
        checked="${boolean('checked', false)}"
        disabled="${boolean('disabled', false)}"
        indeterminate="${boolean('indeterminate', false)}"
      >
        ${text('<slot />', 'A standard checkbox')}
      </ino-checkbox>
      <ino-checkbox checked>Checked</ino-checkbox>
      <ino-checkbox disabled>Disabled</ino-checkbox>
      <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
      <ino-checkbox indeterminate="true">Indeterminated</ino-checkbox>
    </div>
  `);
