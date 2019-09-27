import SelectBox from '@src/SelectBox';
import {
  OPTION_CLASS_NAME,
  OPTGROUP_CLASS_NAME,
  DROPDOWN_CLASS_NAME,
  INPUT_CLASS_NAME
} from '@src/statics';

describe('SelectBox', () => {
  let container, selectbox;

  beforeEach(() => {
    fixture.set('<div id="select-box"></div>');
    container = document.querySelector('#select-box');
    selectbox = new SelectBox(container, {
      placeholder: 'Please select an option.',
      data: [
        {
          text: '과일',
          data: [
            {
              text: '사과',
              value: 1
            },
            {
              text: '바나나',
              value: 2
            }
          ]
        },
        {
          text: '없음',
          value: 0
        }
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
    const [, option] = selectbox.dropdown.options;
    const result = selectbox.select(option.value);
    expect(result).toBe(true);
    expect(selectbox.getSelectedOption()).toBe(option);

    selectbox.deselect();
    expect(selectbox.getSelectedOption()).toBe(null);
  });

  it('should return true when a selection is valid.', () => {
    expect(selectbox.select('1')).toBe(true);
    expect(selectbox.select('wrong value')).toBe(false);
  });

  describe('mouse event', () => {
    it('should open and close a dropdown list when clicking the input.', () => {
      const { input } = selectbox;

      input.el.click();
      expect(selectbox.opened).toBe(true);

      input.el.click();
      expect(selectbox.opened).toBe(false);
    });

    it('should select an option when clicking the option.', () => {
      const { dropdown } = selectbox;
      const [, option] = dropdown.options;

      const result = selectbox.select(option.value);
      expect(result).toBe(true);
      expect(selectbox.getSelectedOption()).toBe(option);
    });
  });
});
