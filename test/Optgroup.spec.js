import Optgroup from '@src/Optgroup';
import Option from '@src/Option';
import { DISABLED_CLASS_NAME } from '@src/statics';

describe('Optgroup', () => {
  let optgroup;

  beforeEach(() => {
    optgroup = new Optgroup(
      {
        text: 'fruit',
        data: [{ text: 'apple', value: 1 }, { text: 'banana', value: 2 }]
      },
      0
    );
  });

  afterEach(() => {
    optgroup.destroy();
  });

  it('should make an optgroup and ul elements.', () => {
    const { el, nativeEl } = optgroup;

    expect(el.tagName).toBe('UL');
    expect(nativeEl.tagName).toBe('OPTGROUP');
    expect(nativeEl.label).toBe('fruit');
    expect(nativeEl.disabled).toBe(false);
  });

  it('should make Options.', () => {
    const { options } = optgroup;

    expect(options.length).toBe(2);
    expect(options[0] instanceof Option).toBe(true);
  });

  it('should disable and enable an optgroup.', () => {
    optgroup.disable();
    expect(optgroup.disabled).toBe(true);
    expect(optgroup.nativeEl.disabled).toBe(true);
    expect(optgroup.el.className.indexOf(DISABLED_CLASS_NAME) > -1).toBe(true);

    optgroup.enable();
    expect(optgroup.disabled).toBe(false);
    expect(optgroup.nativeEl.disabled).toBe(false);
    expect(optgroup.el.className.indexOf(DISABLED_CLASS_NAME) > -1).toBe(false);
  });

  it('should select and deselect an option in the optgroup.', () => {
    const [option] = optgroup.options;
    const result = optgroup.select('1');
    expect(result).toBe(option);
    expect(optgroup.selectedOption).toBe(option);

    optgroup.deselect();
    expect(optgroup.selectedOption).toBe(null);
  });

  it('should select an option by its value (string) and index (number).', () => {
    const [option] = optgroup.options;
    expect(optgroup.select('1')).toBe(option);
    expect(optgroup.select(0)).toBe(option);
  });

  it('should return null when a selection is not valid.', () => {
    expect(optgroup.select('wrong value')).toBe(null);
    expect(optgroup.select(100)).toBe(null);
  });
});
