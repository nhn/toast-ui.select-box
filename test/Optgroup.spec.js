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

  it('should get an option by its value (string) and index (number).', () => {
    const [, option] = optgroup.options;
    expect(optgroup.getOption('2')).toBe(option);
    expect(optgroup.getOption(1)).toBe(option);
  });
});
