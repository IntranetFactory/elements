# ino-header

A header component with a separator.

## Usage

The component can be used as follows:

### Web Component

```html
<ino-header ino-title="<string>"></ino-header>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoHeader } from '@inovex.de/elements-react/';

class MyComponent extends Component {
  render() {
    return (
      <InoCard inoTitle="My awesome header!"></InoCard>
    );
  }
}
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property                | Attribute   | Description             | Type     | Default     |
| ----------------------- | ----------- | ----------------------- | -------- | ----------- |
| `inoTitle` _(required)_ | `ino-title` | The text of this header | `string` | `undefined` |


## CSS Custom Properties

| Name                     | Description              |
| ------------------------ | ------------------------ |
| `--ino-header-box-color` | Color of the header box  |
| `--ino-header-color`     | Text color of the header |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
