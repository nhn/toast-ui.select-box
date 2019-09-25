import Dropdown from '@src/Dropdown';
import Optgroup from '@src/Optgroup';
import Option from '@src/Option';

describe('Dropdown', () => {
  let dropdown;

  beforeEach(() => {
    dropdown = new Dropdown({
      data: [
        {
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
        },
        {
          text: 'none',
          value: 0
        }
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

  it('should make Optgroups and Options.', () => {
    const { options } = dropdown;

    expect(options.length).toBe(2);
    expect(options[0] instanceof Optgroup).toBe(true);
    expect(options[1] instanceof Option).toBe(true);
  });
});
