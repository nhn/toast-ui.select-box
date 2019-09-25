import Optgroup from '@src/Optgroup';
import Option from '@src/Option';

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
});
