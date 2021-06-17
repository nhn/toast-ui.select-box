import ItemGroup from '@src/itemGroup';
import { cls } from '@src/constants';

describe('ItemGroup', () => {
  let itemGroup;

  beforeEach(() => {
    setFixtures(`<div id="container"></div>
      <div id="native-container"></div>`);
    itemGroup = new ItemGroup({
      label: 'fruit',
      data: [
        { label: 'apple', value: 1 },
        { label: 'banana', value: 2 }
      ],
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
    expect(document.querySelector(`.${cls.ITEM_GROUP_LABEL}`)).toHaveTextContent('fruit');
    expect(document.querySelector(`.${cls.ITEM_GROUP}`)).toBe(itemContainerEl);
    expect(document.querySelector('optgroup')).toBe(nativeEl);
  });

  it('should make Items.', () => {
    const { items } = itemGroup;
    expect(items.length).toBe(2);
    expect(document.querySelectorAll(`.${cls.ITEM}`).length).toBe(2);
  });

  describe('disable', () => {
    it('should disable and enable an ItemGroup and its Items.', () => {
      itemGroup.destroy();
      itemGroup = new ItemGroup({
        label: 'fruit',
        data: [
          { label: 'apple', value: 1 },
          { label: 'banana', value: 2 }
        ],
        index: 0,
        disabled: true
      });
      expect(itemGroup.nativeEl).toBeDisabled();
      expect(itemGroup.labelEl).toHaveClass(cls.DISABLED);
      expect(itemGroup.items[0].nativeEl).toBeDisabled();
      expect(itemGroup.items[1].nativeEl).toBeDisabled();

      itemGroup.enable();
      expect(itemGroup.nativeEl).not.toBeDisabled();
      expect(itemGroup.labelEl).not.toHaveClass(cls.DISABLED);
      expect(itemGroup.items[0].nativeEl).not.toBeDisabled();
      expect(itemGroup.items[1].nativeEl).not.toBeDisabled();
    });

    it('should enable ItemGroup only when the Item itself is disabled.', () => {
      itemGroup.destroy();
      itemGroup = new ItemGroup({
        label: 'fruit',
        data: [
          { label: 'apple', value: 1, disabled: true },
          { label: 'banana', value: 2 }
        ],
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
});
