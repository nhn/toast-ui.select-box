import Item from '@src/item';
import { classNames } from '@src/constants';

describe('Item', () => {
  let item;

  beforeEach(() => {
    setFixtures(`<div id="container"></div>
      <div id="native-container"></div>`);
    item = new Item({ value: 1, text: 'first', index: 0 });
    item.appendToContainer(
      document.getElementById('container'),
      document.getElementById('native-container')
    );
  });

  afterEach(() => {
    item.destroy();
  });

  it('should make an option and li elements.', () => {
    const { el, nativeEl } = item;
    expect(document.querySelector(`.${classNames.ITEM}`)).toBe(el);
    expect(document.querySelector('option')).toBe(nativeEl);
  });

  it('should disable and enable an Item.', () => {
    item.disable();
    expect(item.nativeEl).toBeDisabled();
    expect(item.el).toHaveClass(classNames.DISABLED);

    item.enable();
    expect(item.nativeEl).not.toBeDisabled();
    expect(item.el).not.toHaveClass(classNames.DISABLED);
  });

  it('should select and deselect an Item.', () => {
    item.select('1');
    expect(item.nativeEl).toBeSelected();
    expect(item.el).toHaveClass(classNames.SELECTED);

    item.deselect();
    expect(item.nativeEl).not.toBeSelected();
    expect(item.el).not.toHaveClass(classNames.SELECTED);
  });

  it('should highlight and dehighlight an Item.', () => {
    item.highlight();
    expect(item.el).toHaveClass(classNames.HIGHLIGHT);
    expect(item.el).toBeFocused();

    item.dehighlight();
    expect(item.el).not.toHaveClass(classNames.HIGHLIGHT);
    expect(item.el).not.toBeFocused();
  });
});
