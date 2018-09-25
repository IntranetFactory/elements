import { storiesOf } from '@storybook/html';
import { boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import listReadme from '../../components/ino-list/readme.md';
import listItemReadme from '../../components/ino-list-item/readme.md';
import listDividerReadme from '../../components/ino-list-divider/readme.md';

import ICONS from '../../components/ino-icon/icons';

import './ino-list.scss';

storiesOf('<ino-list>', module)
  .addDecorator(withStencilReadme(listReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-list">
      <h4>Customizable List</h4>
      <ino-list ino-dense="${boolean('ino-dense', false)}">
        <ino-list-item ino-text="First text item"></ino-list-item>
        <ino-list-item ino-text="Second text item"></ino-list-item>
        <ino-list-item ino-text="Third text item"></ino-list-item>
      </ino-list>

      <h4>Two lines</h4>
      <ino-list ino-two-lines>
        <ino-list-item ino-text="First text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Third text item" ino-secondary-text="Secondary"></ino-list-item>
      </ino-list>

      <h4>Densed</h4>
      <ino-list ino-dense class="first-densed-list">
        <ino-list-item ino-text="First text item"></ino-list-item>
        <ino-list-item ino-text="Second text item"></ino-list-item>
        <ino-list-item ino-text="Third text item"></ino-list-item>
      </ino-list>
      <ino-list ino-dense ino-two-lines>
        <ino-list-item ino-text="First text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary"></ino-list-item>
        <ino-list-item ino-text="Third text item" ino-secondary-text="Secondary"></ino-list-item>
      </ino-list>
    </div>
  `)

storiesOf('<ino-list>', module)
  .addDecorator(withStencilReadme(listItemReadme))
  .add('List item', () => /*html*/`
    <div class="story-list">
      <h4>Customizable list item</h4> 
      <ino-list ino-two-lines="${boolean('ino-two-lines (on ino-list)', true)}">
        <ino-list-item
          ino-secondary-text="${text('ino-secondary-text', 'Second line text')}"
          ino-selected="${boolean('ino-selected', false)}"
          ino-activated="${boolean('ino-activated', false)}"
          ino-text="${text('ino-text', 'List item')}">
        </ino-list-item>
      </ino-list>

      <h4>States</h4>
      <ino-list>
        <ino-list-item ino-text="Simple item"></ino-list-item>
        <ino-list-item ino-selected ino-text="Selected item"></ino-list-item>
        <ino-list-item ino-selected ino-text="Selected item 2"></ino-list-item>
        <ino-list-item ino-text="Simple item 2"></ino-list-item>
        <ino-list-item ino-activated ino-text="Activated item"></ino-list-item>
      </ino-list>



      <h4>Graphic and Meta</h4>
      <ino-list>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>
    </div>
  `);


storiesOf('<ino-list>', module)
  .add('List item variants', () => /*html*/`
    <div class="story-list">
      <h1>List item variants</h1>
      <h4>Graphic</h4>
      <ino-list>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Graphic (Dense)</h4>
      <ino-list ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Icon with Text</h4>
      <ino-list>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <ino-icon slot="ino-leading" class="ino-list-item__icon" ino-icon="star"></ino-icon>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <ino-icon slot="ino-leading" class="ino-list-item__icon" ino-icon="star"></ino-icon>
        </ino-list-item>
      </ino-list>


      <h4>Leading Checkbox</h4>
      <ino-list>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <ino-checkbox slot="ino-leading"></ino-checkbox>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <ino-checkbox slot="ino-leading"></ino-checkbox>
        </ino-list-item>
      </ino-list>


      <h4>Avatar List</h4>
      <ino-list ino-avatar>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Avatar List (Dense)</h4>
      <ino-list ino-avatar ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Metadata</h4>
      <ino-list>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>


      <h4>Metadata (Dense)</h4>
      <ino-list ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>


      <h4>Trailing Checkbox</h4>
      <ino-list>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <ino-checkbox slot="ino-trailing"></ino-checkbox>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
          <ino-checkbox slot="ino-trailing"></ino-checkbox>
        </ino-list-item>
      </ino-list>


      <h4>Avatar + Metadata</h4>
      <ino-list ino-avatar>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>


      <h4>Avatar + Metadata (Dense)</h4>
      <ino-list ino-avatar ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit">
            <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>


      <h2>Two-Line List</h2>


      <h4>Graphic</h4>
      <ino-list ino-two-lines>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Graphic (Dense)</h4>
      <ino-list ino-two-lines ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Avatar List</h4>
      <ino-list ino-two-lines ino-avatar>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Avatar List (Dense)</h4>
      <ino-list ino-two-lines ino-avatar ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        </ino-list-item>
      </ino-list>


      <h4>Metadata</h4>
      <ino-list ino-two-lines ino-avatar>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>


      <h4>Metadata (Dense)</h4>
      <ino-list ino-two-lines ino-avatar ino-dense>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
            <p slot="ino-trailing">$10.00</p>
        </ino-list-item>
      </ino-list>


      <h4>Example - Two-line Avatar + Text + Icon</h4>
      <ino-list ino-two-lines ino-avatar>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
          <ino-icon slot="ino-trailing" class="ino-list-item__icon" ino-icon="info"></ino-icon>
        </ino-list-item>
        <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
          <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
          <ino-icon slot="ino-trailing" class="ino-list-item__icon" ino-icon="info"></ino-icon>
        </ino-list-item>
      </ino-list>
    </div>
  `);

storiesOf('<ino-list>', module)
  .addDecorator(withStencilReadme(listDividerReadme))
  .add('List divider', () => /*html*/`
    <div class="story-list">
      <h4>Divider to seperate list items</h4>
      <ino-list>
        <ino-list-item ino-text="Item 1"></ino-list-item>
        <ino-list-item ino-text="Item 2"></ino-list-item>
        <ino-list-divider></ino-list-divider>
        <ino-list-item ino-text="Item 3"></ino-list-item>
      </ino-list>

      <h4>Divider to separate two lists</h4>
      <ino-list class="divider-two-lists">
        <ino-list-item ino-text="List 1 - item 1"></ino-list-item>
        <ino-list-item ino-text="List 1 - item 2"></ino-list-item>
        <ino-list-item ino-text="List 1 - item 3"></ino-list-item>
      </ino-list>
      <ino-list-divider ino-between-lists></ino-list-divider>
      <ino-list class="divider-two-lists">
        <ino-list-item ino-text="List 2 - item 1"></ino-list-item>
        <ino-list-item ino-text="List 2 - item 2"></ino-list-item>
        <ino-list-item ino-text="List 2 - item 3"></ino-list-item>
      </ino-list>

      <h4>Inset divider</h4>
      <ino-list>
        <ino-list-item ino-text="Add to favorites">
          <ino-icon slot="ino-leading" ino-icon="favorite"></ino-icon>
        </ino-list-item>
        <ino-list-divider ino-inset></ino-list-divider>
        <ino-list-item ino-text="Star it!">
          <ino-icon slot="ino-leading" ino-icon="star"></ino-icon>
        </ino-list-item>
      </ino-list>
    </div>
  `);
