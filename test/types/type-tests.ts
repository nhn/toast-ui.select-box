import SelectBox, { Item, ItemGroup, IEventObjects } from '@toast-ui/select-box';

const container =
  document.querySelector('#container') ||
  document.getElementById('container') ||
  document.createElement('div') ||
  '#container';

const selectBox = new SelectBox(container, {
  data: [
    {
      text: 'Fruits',
      data: [{ text: 'Apple', value: 'apple', selected: true }, { text: 'Banana', value: 'banana' }]
    },
    { text: 'The quick brown fox jumps over the lazy dog.', value: 'none' },
    {
      text: 'Colors',
      data: [
        { text: 'Red', value: 'red' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Green', value: 'green', disabled: true },
        { text: 'Blue', value: 'blue', disabled: true },
        { text: 'Purple', value: 'purple' }
      ],
      disabled: true
    }
  ],
  placeholder: 'Please select an option.',
  disabled: false,
  autofocus: true,
  autoclose: true,
  theme: {
    'common.border': '1px solid black',
    'common.color': 'black',
    'common.width': '200px',
    'common.height': '50px',

    'common.disabled.background': 'gray',
    'common.disabled.color': 'lightgray',

    'input.showIcon': false,

    'dropdown.maxHeight': '300px',

    'itemGroup.items.paddingLeft': false,

    'item.selected.background': 'black',
    'item.selected.color': 'white',

    'item.highlighted.background': 'yellow',
    'item.highlighted.color': 'gray'
  },
  usageStatistics: false
});

const value = 0 || 'apple';
const item = selectBox.getItem(value);
const itemGroup = selectBox.getItemGroup(0);
const changeHandler = (ev: IEventObjects['change']) =>
  console.log(ev.prev.getLabel() + ev.curr.getLabel());
const disableEnableHandler = (ev: IEventObjects['disable'] | IEventObjects['enable']) => {
  let msg = '';
  if (ev.target instanceof SelectBox) {
    msg = 'SelectBox';
  } else {
    msg = ev.target.getLabel();
  }
  console.log(msg + ' is ' + ev.type);
};
const openCloseEvents = {
  open: (ev: IEventObjects['open']) => console.log(ev.type),
  close: (ev: IEventObjects['close']) => console.log(ev.type)
};

item.getIndex();
item.getLabel();
item.getValue();
item.isDisabled();
item.isSelected();

itemGroup.getIndex();
itemGroup.getItems();
itemGroup.isDisabled();

selectBox.close();
selectBox.deselect();
selectBox.disable(value || item || itemGroup);
selectBox.enable(value || item || itemGroup);
selectBox.getItemGroups(ig => ig.isDisabled(), 0);
selectBox.getItemGroups();
selectBox.getItems(i => i.isDisabled(), 0);
selectBox.getItems();
selectBox.getSelectedItem();
selectBox.open();
selectBox.select(value || item);
selectBox.toggle();
selectBox.on('change', changeHandler);
selectBox.on({
  ...openCloseEvents,
  disable: disableEnableHandler,
  enable: disableEnableHandler
});
selectBox.off('change', changeHandler);
selectBox.off(openCloseEvents);
selectBox.off();
selectBox.destroy();
