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

  describe('disable', () => {
    it('should disable and enable an ItemGroup and its Items.', () => {
      itemGroup.destroy();
      itemGroup = new ItemGroup({
        text: 'fruit',
        data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }],
        index: 0,
        disabled: true
      });
      expect(itemGroup.nativeEl).toBeDisabled();
      expect(itemGroup.labelEl).toHaveClass(classNames.DISABLED);
      expect(itemGroup.items[0].nativeEl).toBeDisabled();
      expect(itemGroup.items[1].nativeEl).toBeDisabled();

      itemGroup.enable();
      expect(itemGroup.nativeEl).not.toBeDisabled();
      expect(itemGroup.labelEl).not.toHaveClass(classNames.DISABLED);
      expect(itemGroup.items[0].nativeEl).not.toBeDisabled();
      expect(itemGroup.items[1].nativeEl).not.toBeDisabled();
    });

    it('should enable ItemGroup only when the Item itself is disabled.', () => {
      itemGroup.destroy();
      itemGroup = new ItemGroup({
        text: 'fruit',
        data: [{ text: 'apple', value: 1, disabled: true }, { text: 'banana', value: 2 }],
        index: 0
      });

      itemGroup.disable();
      expect(itemGroup.items[0].nativeEl).toBeDisabled();
      expect(itemGroup.items[1].nativeEl).toBeDisabled();

      itemGroup.enable();
      expect(itemGroup.items[0].nativeEl).toBeDisabled();
      expect(itemGroup.items[1].nativeEl).not.toBeDisabled();
    });
  });

  it('should get an Item by its value (string) and index (number).', () => {
    const [, item] = itemGroup.items;
    expect(itemGroup.getItem('2')).toBe(item);
    expect(itemGroup.getItem(1)).toBe(item);
  });
});
