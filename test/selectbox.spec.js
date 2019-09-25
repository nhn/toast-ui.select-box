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
              value: 'apple'
            },
            {
              text: '바나나',
              value: 'banana'
            }
          ]
        },
        {
          text: '없음',
          value: 'none'
        }
      ]
    });
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
});
