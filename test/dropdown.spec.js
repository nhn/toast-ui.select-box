import Dropdown from '@src/dropdown';
import { cls } from '@src/constants';

describe('Dropdown', () => {
  let dropdown;

  beforeEach(() => {
    setFixtures('<div id="container"></div>');
    dropdown = new Dropdown({
      placeholder: '',
      data: [
        {
          text: 'fruit',
          data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }]
        },
        { text: 'none', value: 0 }
      ]
    });
    dropdown.appendToContainer(document.getElementById('container'));
  });

  it('should make an select and ul elements.', () => {
    const { el, nativeEl } = dropdown;
    expect(document.querySelector(`.${cls.DROPDOWN}`)).toBe(el);
    expect(document.querySelector('select')).toBe(nativeEl);
  });

  it('should make ItemGroups, Items.', () => {
    const { items, itemLength } = dropdown;
    expect(items.length).toBe(2);
    expect(itemLength).toBe(3);
    expect(document.querySelectorAll(`.${cls.ITEM}`).length).toBe(3);
  });

  it('should open and close a dropdown.', () => {
    dropdown.open();
    expect(dropdown.el).not.toHaveClass(cls.HIDDEN);

    dropdown.close();
    expect(dropdown.el).toHaveClass(cls.HIDDEN);
  });

  it('should disable and enable a dropdown.', () => {
    dropdown.disable();
    expect(dropdown.nativeEl).toBeDisabled();
    expect(dropdown.el).toHaveClass(cls.DISABLED);

    dropdown.enable();
    expect(dropdown.nativeEl).not.toBeDisabled();
    expect(dropdown.el).not.toHaveClass(cls.DISABLED);
  });

  describe('selection', () => {
    it('should select and deselect an Item in the dropdown.', () => {
      const [, item] = dropdown.items;
      const result = dropdown.select(item.value);
      expect(result).toBe(item);
      expect(dropdown.selectedItem).toBe(dropdown.items[1]);
      expect(dropdown.selectedItem.el).toHaveClass(cls.SELECTED);

      dropdown.deselect();
      expect(dropdown.selectedItem).toBe(null);
    });

    it('should select an Item by its value (string) and index (number).', () => {
      const [, item] = dropdown.items;
      expect(dropdown.select('0')).toBe(item);
      expect(dropdown.select(2)).toBe(item);
    });

    it('should return null when a selection is not valid.', () => {
      expect(dropdown.select()).toBe(null);
      expect(dropdown.select('wrong value')).toBe(null);
      expect(dropdown.select(100)).toBe(null);
    });
  });

  describe('highlight', () => {
    it('should highlight and dehighlight an Item in the dropdown.', () => {
      dropdown.highlight(0);
      expect(dropdown.highlightedItem).not.toBeNull();
      expect(dropdown.highlightedItem.el).toHaveClass(cls.HIGHLIGHT);

      dropdown.dehighlight(0);
      expect(dropdown.highlightedItem).toBeNull();
    });

    it('should move a highlight among enabled items.', () => {
      dropdown.items[0].items[1].disable();
      dropdown.highlight(0);

      dropdown.moveHighlightedItem(1);
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(2));

      dropdown.moveHighlightedItem(-1);
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(0));
    });
  });

  describe('open and highlight', () => {
    it('should highlight a selected Item if it exists when a dropdown is open.', () => {
      dropdown.select(0);
      dropdown.open();
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(0));
    });

    it('should highlight the first enabled Item if there is no a selected Item.', () => {
      dropdown.items[0].items[0].disable();
      dropdown.open();
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(1));
    });

    it('should highlight next enabled Item if the selected Item is disabled.', () => {
      dropdown.select(0);
      dropdown.items[0].disable();
      dropdown.open();
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(2));
    });
  });

  it('should get an Item by its value (string) and index (number).', () => {
    const [, item] = dropdown.items;
    expect(dropdown.getItem('0')).toBe(item);
    expect(dropdown.getItem(2)).toBe(item);
  });

  it('should get all Items.', () => {
    const items = dropdown.getItems();
    expect(items.length).toBe(3);
  });

  it('should get particular Items by passing a function.', () => {
    dropdown.items[0].items[1].disable();
    const disabledItems = dropdown.getItems(item => item.isDisabled());

    expect(disabledItems.length).toBe(1);
    expect(disabledItems[0]).toBe(dropdown.items[0].items[1]);
  });

  it('should get an ItemGroup by index (number).', () => {
    const [itemGroup] = dropdown.items;
    expect(dropdown.getItemGroup(0)).toBe(itemGroup);
  });

  it('should get all ItemGroups.', () => {
    const itemGroups = dropdown.getItemGroups();
    expect(itemGroups.length).toBe(1);
  });

  it('should get particular ItemGroups by passing a function.', () => {
    dropdown.items[0].disable();

    expect(dropdown.getItemGroups(item => item.isDisabled()).length).toBe(1);
    expect(dropdown.getItemGroups(item => !item.isDisabled()).length).toBe(0);
  });
});
