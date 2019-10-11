import ItemGroup from '@src/itemGroup';
import { classNames } from '@src/constants';

describe('ItemGroup', () => {
  let itemGroup;

  beforeEach(() => {
    setFixtures(`<div id="container"></div>
      <div id="native-container"></div>`);
    itemGroup = new ItemGroup({
      text: 'fruit',
      data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }],
      index: 0
    });
    itemGroup.appendToContainer(
      document.getElementById('container'),
      document.getElementById('native-container')
    );
  });

  afterEach(() => {
    itemGroup.destroy();
  });

  it('should make label, itemContainer, optgroup elements.', () => {
    const { itemContainerEl, nativeEl } = itemGroup;
    expect(document.querySelector(`.${classNames.ITEM_GROUP_LABEL}`)).toHaveText('fruit');
    expect(document.querySelector(`.${classNames.ITEM_GROUP}`)).toBe(itemContainerEl);
    expect(document.querySelector('optgroup')).toBe(nativeEl);
  });

  it('should make Items.', () => {
    const { items } = itemGroup;
    expect(items.length).toBe(2);
    expect(document.querySelectorAll(`.${classNames.ITEM}`).length).toBe(2);
  });

  it('should disable and enable an ItemGroup.', () => {
    itemGroup.disable();
    expect(itemGroup.nativeEl).toBeDisabled();
    expect(itemGroup.el).toHaveClass(classNames.DISABLED);

    itemGroup.enable();
    expect(itemGroup.nativeEl).not.toBeDisabled();
    expect(itemGroup.el).not.toHaveClass(classNames.DISABLED);
  });

  it('should get an Item by its value (string) and index (number).', () => {
    const [, item] = itemGroup.items;
    expect(itemGroup.getItem('2')).toBe(item);
    expect(itemGroup.getItem(1)).toBe(item);
  });
});
