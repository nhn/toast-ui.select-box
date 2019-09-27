import Dropdown from '@src/Dropdown';
import Optgroup from '@src/Optgroup';
import Option from '@src/Option';
import { DISABLED_CLASS_NAME } from '@src/statics';

describe('Dropdown', () => {
  let dropdown;

  beforeEach(() => {
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
  });

  it('should make an select and ul elements.', () => {
    const { el, nativeEl } = dropdown;

    expect(el.tagName).toBe('UL');
    expect(nativeEl.tagName).toBe('SELECT');
    expect(nativeEl.disabled).toBe(false);
    expect(nativeEl.required).toBe(false);
  });

  it('should make Optgroups, Options and a placeholder.', () => {
    const { options, placeholder } = dropdown;

    expect(options.length).toBe(2);
    expect(options[0] instanceof Optgroup).toBe(true);
    expect(options[1] instanceof Option).toBe(true);
    expect(placeholder instanceof Option).toBe(true);
  });

  it('should disable and enable a dropdown.', () => {
    dropdown.changeDisabled(true);
    expect(dropdown.disabled).toBe(true);
    expect(dropdown.nativeEl.disabled).toBe(true);
    expect(dropdown.el.className.indexOf(DISABLED_CLASS_NAME) > -1).toBe(true);

    dropdown.changeDisabled(false);
    expect(dropdown.disabled).toBe(false);
    expect(dropdown.nativeEl.disabled).toBe(false);
    expect(dropdown.el.className.indexOf(DISABLED_CLASS_NAME) > -1).toBe(false);
  });

  it('should select and deselect an option in the dropdown.', () => {
    const [, option] = dropdown.options;
    const result = dropdown.select('0');
    expect(result).toBe(option);
    expect(dropdown.selectedOption).toBe(dropdown.options[1]);

    dropdown.deselect();
    expect(dropdown.selectedOption).toBe(null);
  });

  it('should select an option by its value (string) and index (number).', () => {
    const [, option] = dropdown.options;
    expect(dropdown.select('0')).toBe(option);
    expect(dropdown.select(2)).toBe(option);
  });

  it('should return null when a selection is not valid.', () => {
    expect(dropdown.select('wrong value')).toBe(null);
    expect(dropdown.select(100)).toBe(null);
  });
});
