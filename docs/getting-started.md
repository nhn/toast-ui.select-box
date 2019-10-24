# Getting Started 🚀

## Install

#### npm

``` sh
$ npm install --save @toast-ui/select-box # Latest version
$ npm install --save @toast-ui/select-box@<version> # Specific version
```

### Via Contents Delivery Network (CDN)

```html
<link rel="stylesheet" href="https://uicdn.toast.com/toast-ui.select-box/latest/toastui-select-box.css">
<script src="https://uicdn.toast.com/toast-ui.select-box/latest/toastui-select-box.js"></script>
```

## Usage

### HTML

```html
<div id="container"></div>
```

### JavaScript

#### Using namespace in browser environment
``` javascript
const SelectBox = tui.SelectBox;
```

#### Using module format in node environment
``` javascript
const SelectBox = require('@toast-ui/select-box'); /* CommonJS */
```

``` javascript
import SelectBox from '@toast-ui/select-box'; /* ES6 */
```

#### Creating a select box

``` javascript
const container = document.getElementById('container');

const selectBox = new SelectBox(container, {
  data: [
    {
      label: 'Fruits',
      data: [ { label: 'Apple', value: 'apple', selected: true }, { label: 'Banana', value: 'banana' } ]
    }
  ],
  ...
});

console.log(selectBox.getSelectedItem().getLabel()); // 'Apple'
```

You can create an instance with options and call various APIs after creating an instance. For more information, please see [here](https://nhn.github.io/toast-ui.select-box/latest/SelectBox).

## Group related options

TOAST UI SelectBox supports an one-level group to group related options. To make a group, you can use [itemGroupData](https://nhn.github.io/toast-ui.select-box/latest/itemGroupData) into `data` option.

```javascript
const selectBox = new SelectBox('#select-box', {
  data: [
    {
      // item group
      label: 'Fruits',
      data: [
        { label: 'Apple', value: 'apple', selected: true }, // item in the item group
        { label: 'Banana', value: 'banana' } // item in the item group
      ]
    },
    { label: 'The quick brown fox jumps over the lazy dog.', value: 'none' }, // item
  ]
})
```

The above code creates a select box like the one below.

<img src="" /> 그림 추가

Please refer to the [data option](https://nhn.github.io/toast-ui.select-box/latest/SelectBox) and [itemGroupData](https://nhn.github.io/toast-ui.select-box/latest/itemGroupData). The example using item groups can be found [here](https://nhn.github.io/toast-ui.select-box/latest/tutorial-example01-basic).

## Customize the styles

TOAST UI SelectBox provides `theme` option to easily customize the SelectBox. To set custom styles, you can use `theme` option when you create an instance of SelectBox.

``` javascript
const selectBox = new SelectBox('#select-box', {
  ...,
  theme: {
    'common.border': '1px solid black',
    'common.color': 'black',
    'input.showIcon': false,
    'item.highlighted.background': 'yellow'
  }
});
```

The above code creates a select box like the one below.

<img src="" /> 그림 추가

Please refer to the [theme option](https://nhn.github.io/toast-ui.select-box/latest/SelectBox) and [themeConfig](https://nhn.github.io/toast-ui.select-box/latest/themeConfig). The example using theme can be found [here](https://nhn.github.io/toast-ui.select-box/latest/tutorial-example02-theme).

## Use custom events

TOAST UI SelectBox provides some custom events: [open](https://nhn.github.io/toast-ui.select-box/latest/SelectBox#event-open), [close](https://nhn.github.io/toast-ui.select-box/latest/SelectBox#event-close), [disable](https://nhn.github.io/toast-ui.select-box/latest/SelectBox#event-disable), [enable](https://nhn.github.io/toast-ui.select-box/latest/SelectBox#event-enable), [change](https://nhn.github.io/toast-ui.select-box/latest/SelectBox#event-change).

You can bind event handlers by `selectBox.on(eventName, handler)` and unbind by `selectBox.off(eventName, handler)`. Refer to the [CustomEvents](https://nhn.github.io/tui.code-snippet/latest/CustomEvents) document at [tui-code-snippet](https://github.com/nhn/tui.code-snippet) to know how to bind and unbind custom events.

``` javascript
// bind 'change' event
selectBox.on('change', ev => {
  console.log(`selected item is changed from ${ev.prev.getLabel()} to ${ev.curr.getLabel()}.`);
});

// bind 'disable' and enable event
const print = ev => {
  let target = '';
  if (ev.target instanceof SelectBox) {
    target = 'Select box';
  } else {
    target = ev.target.getLabel();
  }
  console.log(`${target} is ${ev.type}.`);
}
selectBox.on({
  disable: print,
  enable: print
});

// unbind change event
selectBox.off('change');

// unbind disable event
selectBox.off(disable, print);

// unbind all events
selectBox.off();
```

The example using custom events can be found [here](https://nhn.github.io/toast-ui.select-box/latest/tutorial-example03-custom-events).