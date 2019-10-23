import Input from '@src/input';
import Item from '@src/item';
import { cls } from '@src/constants';

describe('Input', () => {
  let input;

  beforeEach(() => {
    setFixtures('<div id="container"></div>');
    input = new Input({ placeholder: 'Please select an option.' });
    input.appendToContainer(document.getElementById('container'));
  });

  afterEach(() => {
    input.destroy();
  });

  it('should make a div and p elements.', () => {
    const { el, placeholderEl } = input;
    expect(document.querySelector(`.${cls.INPUT}`)).toBe(el);
    expect(document.querySelector(`.${cls.PLACEHOLDER}`)).toBe(placeholderEl);
  });

  it('should disable and enable an input.', () => {
    input.disable();
    expect(input.el).toHaveClass(cls.DISABLED);

    input.enable();
    expect(input.el).not.toHaveClass(cls.DISABLED);
  });

  it('should open and close an input.', () => {
    input.open();
    expect(input.el).toHaveClass(cls.OPEN);

    input.close();
    expect(input.el).not.toHaveClass(cls.OPEN);
  });

  it('should focus an input.', () => {
    input.focus();
    expect(input.el).toBeFocused();
  });

  it('should change text in the placeholder by the Item.', () => {
    const item = new Item({ value: 1, label: 'first', index: 0 });
    input.changeText(item);
    expect(input.placeholderEl).toContainText('first');
  });
});
