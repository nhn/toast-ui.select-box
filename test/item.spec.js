import Item from '@src/item';
import { cls } from '@src/constants';

describe('Item', () => {
  let item;

  beforeEach(() => {
    setFixtures(`<div id="container"></div>
      <div id="native-container"></div>`);
    item = new Item({ value: 1, label: 'first', index: 0 });
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
    expect(document.querySelector(`.${cls.ITEM}`)).toBe(el);
    expect(document.querySelector('option')).toBe(nativeEl);
  });

  it('should disable and enable an Item.', () => {
    item.disable();
    expect(item.nativeEl).toBeDisabled();
    expect(item.el).toHaveClass(cls.DISABLED);

    item.enable();
    expect(item.nativeEl).not.toBeDisabled();
    expect(item.el).not.toHaveClass(cls.DISABLED);

    item.disableItemGroup();
    expect(item.nativeEl).toBeDisabled();
    expect(item.el).toHaveClass(cls.DISABLED);

    item.enableItemGroup();
    expect(item.nativeEl).not.toBeDisabled();
    expect(item.el).not.toHaveClass(cls.DISABLED);
  });

  it('should select and deselect an Item.', () => {
    item.select('1');
    expect(item.nativeEl).toBeSelected();
    expect(item.el).toHaveClass(cls.SELECTED);

    item.deselect();
    expect(item.nativeEl).not.toBeSelected();
    expect(item.el).not.toHaveClass(cls.SELECTED);
  });

  it('should highlight and dehighlight an Item.', () => {
    item.highlight();
    expect(item.el).toHaveClass(cls.HIGHLIGHT);
    expect(item.el).toHaveFocus();

    item.dehighlight();
    expect(item.el).not.toHaveClass(cls.HIGHLIGHT);
    expect(item.el).not.toHaveFocus();
  });
});
