import Optgroup from '@src/Optgroup';
import Option from '@src/Option';
import { DISABLED_CLASS_NAME } from '@src/statics';

describe('Optgroup', () => {
  let optgroup;

  beforeEach(() => {
    optgroup = new Optgroup({
      text: 'fruit',
      data: [
        {
          text: 'apple',
          value: 1
        },
        {
          text: 'banana',
          value: 2
        }
      ]
    });
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
    const result = optgroup.select('1');
    expect(result).toBe(true);
    expect(optgroup.selectedOption).toBe(optgroup.options[0]);

    optgroup.deselect();
    expect(optgroup.selectedOption).toBe(null);
  });

  it('should return true and set a selectedOption when a selection is valid.', () => {
    expect(optgroup.select('1')).toBe(true);
    expect(optgroup.selectedOption).toBe(optgroup.options[0]);
    expect(optgroup.select('wrong value')).toBe(false);
    expect(optgroup.selectedOption).toBe(null);
  });
});
