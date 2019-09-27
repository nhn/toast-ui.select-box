import SelectBox from '@src/SelectBox';
import {
  OPTION_CLASS_NAME,
  OPTGROUP_CLASS_NAME,
  DROPDOWN_CLASS_NAME,
  INPUT_CLASS_NAME
} from '@src/statics';

describe('SelectBox', () => {
  let container, selectbox;

  function createSelectBoxWithoutPlaceholder() {
    selectbox.destroy();
    selectbox = new SelectBox(container, {
      data: [
        {
          text: 'fruit',
          data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }]
        },
        { text: 'none', value: 0 }
      ]
    });
  }

  beforeEach(() => {
    fixture.set('<div id="select-box"></div>');
    container = document.querySelector('#select-box');
    selectbox = new SelectBox(container, {
      placeholder: 'Please select an option.',
      data: [
        {
          text: 'fruit',
          data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }]
        },
        { text: 'none', value: 0 }
      ]
    });
  });

  afterEach(() => {
    selectbox.destroy();
  });

  it('should make Options, Optgroups, Dropdown and Input.', () => {
    const { input, dropdown } = selectbox;
    expect(container.querySelector(`.${INPUT_CLASS_NAME}`)).toBe(input.el);
    expect(container.querySelector(`.${DROPDOWN_CLASS_NAME}`)).toBe(dropdown.el);
    expect(container.querySelectorAll(`.${OPTGROUP_CLASS_NAME}`).length).toBe(1);
    expect(container.querySelectorAll(`.${OPTION_CLASS_NAME}`).length).toBe(3);
  });

  it('should select the first option when there is no placeholder.', () => {
    createSelectBoxWithoutPlaceholder();

    const { dropdown } = selectbox;
    expect(selectbox.getSelectedOption()).toBe(dropdown.options[0].options[0]);
  });

  it('should disable and enable a select box.', () => {
    const { input, dropdown } = selectbox;
    spyOn(input, 'changeDisabled');
    spyOn(dropdown, 'changeDisabled');

    selectbox.disable();
    expect(input.changeDisabled).toHaveBeenCalledWith(true);
    expect(dropdown.changeDisabled).toHaveBeenCalledWith(true);

    selectbox.enable();
    expect(input.changeDisabled).toHaveBeenCalledWith(false);
    expect(dropdown.changeDisabled).toHaveBeenCalledWith(false);
  });

  it('should open and close a dropdown list.', () => {
    const { input, dropdown } = selectbox;
    spyOn(input, 'changeOpened');
    spyOn(dropdown, 'changeOpened');

    selectbox.open();
    expect(input.changeOpened).toHaveBeenCalledWith(true);
    expect(dropdown.changeOpened).toHaveBeenCalledWith(true);

    selectbox.close();
    expect(input.changeOpened).toHaveBeenCalledWith(false);
    expect(dropdown.changeOpened).toHaveBeenCalledWith(false);
  });

  it('should select and deselect an option.', () => {
    const { input } = selectbox;
    const [, option] = selectbox.dropdown.options;
    const result = selectbox.select('0');
    expect(result).toBe(option);
    expect(selectbox.getSelectedOption()).toBe(option);
    expect(input.placeholderEl.innerHTML).toBe('none');

    selectbox.deselect();
    expect(selectbox.getSelectedOption()).toBe(null);
  });

  it('should select a placeholder when deselect or select a wrong option if there is a placeholder.', () => {
    const { input } = selectbox;

    selectbox.select(0);
    selectbox.deselect();
    expect(input.placeholderEl.innerHTML).toBe('Please select an option.');

    selectbox.select(0);
    selectbox.select('wrong value');
    expect(input.placeholderEl.innerHTML).toBe('Please select an option.');
  });

  it('should be empty when deselect or select a wrong option if there is no placeholder.', () => {
    createSelectBoxWithoutPlaceholder();

    const { input } = selectbox;

    selectbox.select(0);
    selectbox.deselect();
    expect(input.placeholderEl.innerHTML).toBe('');

    selectbox.select(0);
    selectbox.select('wrong value');
    expect(input.placeholderEl.innerHTML).toBe('');
  });

  it('should select an option by its value (string) and index (number).', () => {
    const [, option] = selectbox.dropdown.options;
    expect(selectbox.select('0')).toBe(option);
    expect(selectbox.select(2)).toBe(option);
  });

  it('should return null when a selection is not valid.', () => {
    expect(selectbox.select('wrong value')).toBe(null);
    expect(selectbox.select(100)).toBe(null);
  });

  describe('mouse event', () => {
    it('should open and close a dropdown list when click the input.', () => {
      const { input } = selectbox;

      input.el.click();
      expect(selectbox.opened).toBe(true);

      input.el.click();
      expect(selectbox.opened).toBe(false);
    });

    it('should select an option when click the option.', () => {
      const { dropdown } = selectbox;
      const [, option] = dropdown.options;

      const result = selectbox.select('0');
      expect(result).toBe(option);
      expect(selectbox.getSelectedOption()).toBe(option);
    });
  });
});
