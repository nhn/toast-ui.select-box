import SelectBox from '@src/selectBox';
import { cls } from '@src/constants';

describe('SelectBox', () => {
  let selectBox;

  function createSelectBox(options = {}) {
    if (selectBox) {
      selectBox.destroy();
    }

    selectBox = new SelectBox('#select-box', {
      data: [
        {
          text: 'fruit',
          data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }]
        },
        { text: 'none', value: 0 }
      ],
      ...options
    });
  }

  beforeEach(() => {
    setFixtures('<div id="select-box"></div>');
    createSelectBox({ placeholder: 'Please select an option.' });
  });

  it('should make Items, ItemGroups, Dropdown and Input.', () => {
    const { input, dropdown } = selectBox;
    expect(document.querySelector(`.${cls.INPUT}`)).toBe(input.el);
    expect(document.querySelector(`.${cls.DROPDOWN}`)).toBe(dropdown.el);
    expect(document.querySelectorAll(`.${cls.ITEM_GROUP}`).length).toBe(1);
    expect(document.querySelectorAll(`.${cls.ITEM}`).length).toBe(3);
  });

  describe('initialization', () => {
    it('should select the first Item when there is no placeholder.', () => {
      createSelectBox();
      expect(document.querySelector('option')).toBeSelected();
    });
  });

  it('should disable and enable a select box.', () => {
    const { input, dropdown } = selectBox;

    selectBox.disable();
    expect(input.el).toHaveClass(cls.DISABLED);
    expect(dropdown.el).toHaveClass(cls.DISABLED);

    selectBox.enable();
    expect(input.el).not.toHaveClass(cls.DISABLED);
    expect(dropdown.el).not.toHaveClass(cls.DISABLED);
  });

  it('should open and close a dropdown list.', () => {
    const { input, dropdown } = selectBox;

    selectBox.open();
    expect(input.el).toHaveClass(cls.OPEN);
    expect(dropdown.el).not.toHaveClass(cls.HIDDEN);

    selectBox.close();
    expect(input.el).not.toHaveClass(cls.OPEN);
    expect(dropdown.el).toHaveClass(cls.HIDDEN);
  });

  describe('selection', () => {
    it('should select an Item.', () => {
      const { input } = selectBox;
      const [, item] = selectBox.dropdown.items;
      const result = selectBox.select('0');
      expect(result).toBe(item);
      expect(selectBox.getSelectedItem()).toBe(item);
      expect(input.placeholderEl).toHaveText('none');

      selectBox.deselect();
      expect(selectBox.getSelectedItem()).toBe(null);
    });

    it('should not change a selected item when select a wrong Item.', () => {
      const { input } = selectBox;

      selectBox.select(0);
      selectBox.select('wrong value');
      expect(input.placeholderEl).toHaveText('apple');
    });

    it('should be a placeholder when deselect if there is a placeholder.', () => {
      const { input } = selectBox;

      selectBox.select(0);
      selectBox.deselect();
      expect(input.placeholderEl).toHaveText('Please select an option.');
    });

    it('should be empty when deselect if there is no placeholder.', () => {
      createSelectBox();

      const { input } = selectBox;

      selectBox.select(0);
      selectBox.deselect();
      expect(input.placeholderEl).toHaveText('');
    });

    it('should select an Item by its value (string) and index (number).', () => {
      const [, item] = selectBox.dropdown.items;
      expect(selectBox.select('0')).toBe(item);
      expect(selectBox.select(2)).toBe(item);
      expect(selectBox.getSelectedItem()).toBe(item);
    });

    it('should return null when a selection is not valid.', () => {
      expect(selectBox.select('wrong value')).toBe(null);
      expect(selectBox.select(100)).toBe(null);
    });
  });

  it('should get an Item by its value (string) and index (number).', () => {
    const [, item] = selectBox.dropdown.items;
    expect(selectBox.getItem('0')).toBe(item);
    expect(selectBox.getItem(2)).toBe(item);
  });

  it('should get all Items.', () => {
    const items = selectBox.getItems();
    expect(items.length).toBe(3);
  });

  describe('mouse event', () => {
    it('should open and close a dropdown list when click the input.', () => {
      const { input, dropdown } = selectBox;

      input.el.click();
      expect(input.el).toHaveClass(cls.OPEN);
      expect(dropdown.el).not.toHaveClass(cls.HIDDEN);

      input.el.click();
      expect(input.el).not.toHaveClass(cls.OPEN);
      expect(dropdown.el).toHaveClass(cls.HIDDEN);
    });

    it('should select an Item when click the Item.', () => {
      const { input, dropdown } = selectBox;
      const [, item] = dropdown.items;

      const result = selectBox.select('0');
      expect(result).toBe(item);
      expect(selectBox.getSelectedItem()).toBe(item);
      expect(input.placeholderEl).toHaveText('none');
    });

    it('should close a dropdown list when click anywhere except the select box.', () => {
      const { input, dropdown } = selectBox;

      selectBox.open();
      document.body.click();
      expect(input.el).not.toHaveClass(cls.OPEN);
      expect(dropdown.el).toHaveClass(cls.HIDDEN);
    });

    it('should highlight the Item when mouseover the Item.', () => {
      const item = selectBox.getItem(2);

      selectBox.handleMouseover({ target: item.el }, cls);
      expect(selectBox.dropdown.getHighlightedItem()).toBe(item);
      expect(item.el).toHaveClass(cls.HIGHLIGHT);
    });
  });

  describe('keyboard event', () => {
    it('should open a dropdown list when press ArrowUp, ArrowDown, Space, or Enter on the input if a dropdown is closed.', () => {
      const { input, dropdown } = selectBox;

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'ArrowDown', preventDefault: () => {} },
        cls
      );
      expect(input.el).toHaveClass(cls.OPEN);
      expect(dropdown.el).not.toHaveClass(cls.HIDDEN);
    });

    it('should move a highlighted Item when press ArrowUp and ArrowDown on the input if a dropdown is opened.', () => {
      selectBox.open();
      spyOn(selectBox.dropdown, 'highlight');

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'ArrowUp', preventDefault: () => {} },
        cls
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(0);

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'ArrowDown', preventDefault: () => {} },
        cls
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(0);
    });

    it('should move a highlighted Item when press ArrowUp and ArrowDown on the Items.', () => {
      selectBox.dropdown.highlight(1);
      spyOn(selectBox.dropdown, 'highlight');

      selectBox.handleKeydown(
        { target: selectBox.getItem(1).el, key: 'ArrowUp', preventDefault: () => {} },
        cls
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(0);

      selectBox.handleKeydown(
        { target: selectBox.getItem(1).el, key: 'ArrowDown', preventDefault: () => {} },
        cls
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(2);
    });

    it('should select a highlighted Item when press Space or Enter on the Item.', () => {
      selectBox.handleKeydown(
        { target: selectBox.getItem(2).el, key: ' ', preventDefault: () => {} },
        cls
      );
      expect(selectBox.getSelectedItem()).toBe(selectBox.getItem(2));

      selectBox.handleKeydown(
        { target: selectBox.getItem(1).el, key: 'Enter', preventDefault: () => {} },
        cls
      );
      expect(selectBox.getSelectedItem()).toBe(selectBox.getItem(1));
    });

    it('should close a dropdown list when press Escape or Tab on the input and Items.', () => {
      selectBox.open();
      spyOn(selectBox, 'close');

      selectBox.handleKeydown(
        { target: selectBox.getItem(2).el, key: 'Escape', preventDefault: () => {} },
        cls
      );
      expect(selectBox.close).toHaveBeenCalled();

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'Tab', preventDefault: () => {} },
        cls
      );
      expect(selectBox.close).toHaveBeenCalled();
    });
  });

  it('should make a theme to customize a select box.', () => {
    createSelectBox({
      theme: {
        'common.border': '1px solid black',
        'common.color': 'black',
        'common.width': '200px',
        'common.height': '50px',

        'common.disabled.background': 'gray',
        'common.disabled.color': 'white'
      }
    });

    expect(selectBox.theme).not.toBeNull();
  });
});
