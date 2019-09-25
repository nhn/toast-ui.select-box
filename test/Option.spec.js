import Option from '@src/Option';
import { DISABLED_CLASS_NAME, SELECTED_CLASS_NAME } from '@src/statics';

describe('Option', () => {
  let option;

  beforeEach(() => {
    option = new Option({
      value: 1,
      text: 'first'
    });
  });

  it('should make an option and li elements.', () => {
    const { el, nativeEl } = option;

    expect(el.tagName).toBe('LI');
    expect(el.innerText).toBe('first');
    expect(nativeEl.tagName).toBe('OPTION');
    expect(nativeEl.label).toBe('first');
    expect(nativeEl.value).toBe('1');
    expect(nativeEl.disabled).toBe(false);
    expect(nativeEl.selected).toBe(false);
  });

  it('should disable and enable an option.', () => {
    option.disable();
    expect(option.disabled).toBe(true);
    expect(option.nativeEl.disabled).toBe(true);
    expect(option.el.className.indexOf(DISABLED_CLASS_NAME) > -1).toBe(true);

    option.enable();
    expect(option.disabled).toBe(false);
    expect(option.nativeEl.disabled).toBe(false);
    expect(option.el.className.indexOf(DISABLED_CLASS_NAME) > -1).toBe(false);
  });

  it('should select and not select an option.', () => {
    option.select();
    expect(option.selected).toBe(true);
    expect(option.nativeEl.selected).toBe(true);
    expect(option.el.className.indexOf(SELECTED_CLASS_NAME) > -1).toBe(true);

    option.deselect();
    expect(option.selected).toBe(false);
    expect(option.nativeEl.selected).toBe(false);
    expect(option.el.className.indexOf(SELECTED_CLASS_NAME) > -1).toBe(false);
  });
});
