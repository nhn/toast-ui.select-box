import Dropdown from '@src/dropdown';
import { classNames } from '@src/constants';

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
    expect(document.querySelector(`.${classNames.DROPDOWN}`)).toBe(el);
    expect(document.querySelector('select')).toBe(nativeEl);
  });

  it('should make ItemGroups, Items.', () => {
    const { items, itemLength } = dropdown;
    expect(items.length).toBe(2);
    expect(itemLength).toBe(3);
    expect(document.querySelectorAll(`.${classNames.ITEM}`).length).toBe(3);
  });

  it('should open and close a dropdown.', () => {
    dropdown.open();
    expect(dropdown.el).not.toHaveClass(classNames.HIDDEN);

    dropdown.close();
    expect(dropdown.el).toHaveClass(classNames.HIDDEN);
  });

  it('should disable and enable a dropdown.', () => {
    dropdown.disable();
    expect(dropdown.nativeEl).toBeDisabled();
    expect(dropdown.el).toHaveClass(classNames.DISABLED);

    dropdown.enable();
    expect(dropdown.nativeEl).not.toBeDisabled();
    expect(dropdown.el).not.toHaveClass(classNames.DISABLED);
  });

  describe('selection', () => {
    it('should select and deselect an Item in the dropdown.', () => {
      const [, item] = dropdown.items;
      const result = dropdown.select(item.value);
      expect(result).toBe(item);
      expect(dropdown.selectedItem).toBe(dropdown.items[1]);
      expect(dropdown.selectedItem.el).toHaveClass(classNames.SELECTED);

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
      dropdown.highlight();
      expect(dropdown.highlightedItem).not.toBeNull();
      expect(dropdown.highlightedItem.el).toHaveClass(classNames.HIGHLIGHT);

      dropdown.dehighlight();
      expect(dropdown.highlightedItem).toBeNull();
    });

    it('should highlight an Item by its index.', () => {
      dropdown.highlight(1);
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(1));

      dropdown.highlight(2);
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(2));
    });

    it('should highlight the selected Item or the first Item.', () => {
      dropdown.highlight();
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(0));

      dropdown.select(2);
      dropdown.highlight();
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(2));
    });

    it('should highlight a selected option if it exists when a dropdown is open.', () => {
      dropdown.select(0);
      dropdown.open();
      expect(dropdown.highlightedItem).toBe(dropdown.getItem(0));
    });
  });

  it('should get an Item by its value (string) and index (number).', () => {
    const [, item] = dropdown.items;
    expect(dropdown.getItem('0')).toBe(item);
    expect(dropdown.getItem(2)).toBe(item);
  });
});
