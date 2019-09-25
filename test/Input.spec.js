import Input from '@src/Input';

describe('Input', () => {
  it('should make a div and p elements.', () => {
    const input = new Input({ placeholder: 'Please select an option.' });
    const { el, placeholderEl } = input;

    expect(el.tagName).toBe('DIV');
    expect(placeholderEl.tagName).toBe('P');
    expect(placeholderEl.innerText).toBe('Please select an option.');
  });
});
