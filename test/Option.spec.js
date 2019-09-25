import Option from '@src/Option';

describe('Option', () => {
  it('should make an option and li elements.', () => {
    const option = new Option({
      value: 1,
      text: 'first'
    });
    const { el, nativeEl } = option;

    expect(el.tagName).toBe('LI');
    expect(el.innerText).toBe('first');
    expect(nativeEl.tagName).toBe('OPTION');
    expect(nativeEl.label).toBe('first');
    expect(nativeEl.value).toBe('1');
    expect(nativeEl.disabled).toBe(false);
    expect(nativeEl.selected).toBe(false);
  });
});
