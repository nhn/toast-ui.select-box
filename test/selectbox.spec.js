import SelectBox from '@src/selectBox';
import { classNames } from '@src/constants';

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
    expect(document.querySelector(`.${classNames.INPUT}`)).toBe(input.el);
    expect(document.querySelector(`.${classNames.DROPDOWN}`)).toBe(dropdown.el);
    expect(document.querySelectorAll(`.${classNames.ITEM_GROUP}`).length).toBe(1);
    expect(document.querySelectorAll(`.${classNames.ITEM}`).length).toBe(3);
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
    expect(input.el).toHaveClass(classNames.DISABLED);
    expect(dropdown.el).toHaveClass(classNames.DISABLED);

    selectBox.enable();
    expect(input.el).not.toHaveClass(classNames.DISABLED);
    expect(dropdown.el).not.toHaveClass(classNames.DISABLED);
  });

  it('should open and close a dropdown list.', () => {
    const { input, dropdown } = selectBox;

    selectBox.open();
    expect(input.el).toHaveClass(classNames.OPEN);
    expect(dropdown.el).not.toHaveClass(classNames.HIDDEN);

    selectBox.close();
    expect(input.el).not.toHaveClass(classNames.OPEN);
    expect(dropdown.el).toHaveClass(classNames.HIDDEN);
  });

  describe('selection', () => {
    it('should select and deselect an Item.', () => {
      const { input } = selectBox;
      const [, item] = selectBox.dropdown.items;
      const result = selectBox.select('0');
      expect(result).toBe(item);
      expect(selectBox.getSelectedItem()).toBe(item);
      expect(input.placeholderEl).toContainText('none');

      selectBox.deselect();
      expect(selectBox.getSelectedItem()).toBe(null);
    });

    it('should select a placeholder when deselect or select a wrong Item if there is a placeholder.', () => {
      const { input } = selectBox;

      selectBox.select(0);
      selectBox.deselect();
      expect(input.placeholderEl).toContainText('Please select an option.');

      selectBox.select(0);
      selectBox.select('wrong value');
      expect(input.placeholderEl).toContainText('Please select an option.');
    });

    it('should be empty when deselect or select a wrong Item if there is no placeholder.', () => {
      createSelectBox();

      const { input } = selectBox;

      selectBox.select(0);
      selectBox.deselect();
      expect(input.placeholderEl.innerHTML).toBe('');

      selectBox.select(0);
      selectBox.select('wrong value');
      expect(input.placeholderEl.innerHTML).toBe('');
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

  describe('mouse event', () => {
    it('should open and close a dropdown list when click the input.', () => {
      const { input, dropdown } = selectBox;

      input.el.click();
      expect(input.el).toHaveClass(classNames.OPEN);
      expect(dropdown.el).not.toHaveClass(classNames.HIDDEN);

      input.el.click();
      expect(input.el).not.toHaveClass(classNames.OPEN);
      expect(dropdown.el).toHaveClass(classNames.HIDDEN);
    });

    it('should select an Item when click the Item.', () => {
      const { input, dropdown } = selectBox;
      const [, item] = dropdown.items;

      const result = selectBox.select('0');
      expect(result).toBe(item);
      expect(selectBox.getSelectedItem()).toBe(item);
      expect(input.placeholderEl).toContainText('none');
    });

    it('should close a dropdown list when click anywhere except the select box.', () => {
      const { input, dropdown } = selectBox;

      selectBox.open();
      document.body.click();
      expect(input.el).not.toHaveClass(classNames.OPEN);
      expect(dropdown.el).toHaveClass(classNames.HIDDEN);
    });

    it('should highlight the Item when mouseover the Item.', () => {
      const item = selectBox.getItem(2);

      selectBox.handleMouseover({ target: item.el }, classNames);
      expect(selectBox.dropdown.getHighlightedItem()).toBe(item);
      expect(item.el).toHaveClass(classNames.HIGHLIGHT);
    });
  });

  describe('keyboard event', () => {
    it('should open a dropdown list when press ArrowUp, ArrowDown, Space, or Enter on the input if a dropdown is closed.', () => {
      const { input, dropdown } = selectBox;

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'ArrowDown', preventDefault: () => {} },
        classNames
      );
      expect(input.el).toHaveClass(classNames.OPEN);
      expect(dropdown.el).not.toHaveClass(classNames.HIDDEN);
    });

    it('should move a highlighted Item when press ArrowUp and ArrowDown on the input if a dropdown is opened.', () => {
      selectBox.open();
      spyOn(selectBox.dropdown, 'highlight');

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'ArrowUp', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(0);

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'ArrowDown', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(0);
    });

    it('should move a highlighted Item when press ArrowUp and ArrowDown on the Items.', () => {
      selectBox.dropdown.highlight(1);
      spyOn(selectBox.dropdown, 'highlight');

      selectBox.handleKeydown(
        { target: selectBox.getItem(1).el, key: 'ArrowUp', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(0);

      selectBox.handleKeydown(
        { target: selectBox.getItem(1).el, key: 'ArrowDown', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.dropdown.highlight).toHaveBeenCalledWith(2);
    });

    it('should select a highlighted Item when press Space or Enter on the Item.', () => {
      selectBox.handleKeydown(
        { target: selectBox.getItem(2).el, key: ' ', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.getSelectedItem()).toBe(selectBox.getItem(2));

      selectBox.handleKeydown(
        { target: selectBox.getItem(1).el, key: 'Enter', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.getSelectedItem()).toBe(selectBox.getItem(1));
    });

    it('should close a dropdown list when press Escape on the input and Items.', () => {
      selectBox.open();
      spyOn(selectBox, 'close');

      selectBox.handleKeydown(
        { target: selectBox.getItem(2).el, key: 'Escape', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.close).toHaveBeenCalled();

      selectBox.handleKeydown(
        { target: selectBox.input.el, key: 'Escape', preventDefault: () => {} },
        classNames
      );
      expect(selectBox.close).toHaveBeenCalled();
    });
  });
});
