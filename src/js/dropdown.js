/**
 * @fileoverview Dropdown
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isExisty from 'tui-code-snippet/type/isExisty';
import isNumber from 'tui-code-snippet/type/isNumber';
import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { createElement } from './utils';
import { cls } from './constants';
import ItemGroup from './itemGroup';
import Item from './item';

/**
 * @class
 * @ignore
 * @param {object} options - options
 *   @param {string} [options.placeholder] - placeholder for an input
 *   @param {array<object>} options.data - data for ItemGroups and Items
 *   @param {boolean} [options.disabled=false] - whether a dropdown should be disabled or not
 */
export default class Dropdown {
  constructor({ placeholder, data, disabled = false }) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = createElement('ul', '', { className: `${cls.DROPDOWN} ${cls.HIDDEN}` });

    /**
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = createElement('select', '', { className: cls.HIDDEN, tabIndex: -1 });

    /**
     * Items and ItemGroups
     * @type {Array.<Item|ItemGroup>}
     * @private
     */
    this.items = [];

    /**
     * the number of Item
     * @type {number}
     * @private
     */
    this.itemLength = 0;

    /**
     * @type {Item}
     * @private
     */
    this.selectedItem = null;

    /**
     * @type {Item}
     * @private
     */
    this.highlightedItem = null;

    this.initialize(data, disabled, placeholder);
  }

  /**
   * Create Items and ItemGroups and calculate the number of Items
   * @return {array<Item|ItemGroup>}
   * @private
   */
  initializeItems(data) {
    let item;
    let itemIndex = 0;
    let itemGroupIndex = 0;
    data.forEach(datum => {
      if (datum.data) {
        item = new ItemGroup({ index: itemIndex, itemGroupIndex, ...datum });
        itemIndex += datum.data.length - 1;
        itemGroupIndex += 1;
      } else {
        item = new Item({ index: itemIndex, ...datum });
      }

      this.items.push(item);
      item.appendToContainer(this.el, this.nativeEl);
      itemIndex += 1;
    });

    this.itemLength = itemIndex;
  }

  /**
   * Initialize
   * @private
   */
  initialize(data, disabled, placeholder) {
    if (placeholder) {
      createElement('option', '', { label: placeholder, value: '' }, this.nativeEl);
    }

    this.initializeItems(data);

    this.iterateItems(item => {
      if (!this.selectedItem && item.isSelected()) {
        this.selectedItem = item;
      } else if (this.selectedItem && item.isSelected()) {
        item.deselect();
      }
    });

    if (disabled) {
      this.disable();
    }
  }

  /**
   * Execute a function while iterating items
   * @param {Function} fn - function to execute
   * @param  {...any} args - arguments
   * @private
   */
  iterateItems(fn, ...args) {
    this.items.forEach(item => {
      if (item instanceof ItemGroup) {
        item.getItems().forEach(itemInGroup => fn.apply(this, [itemInGroup, ...args]));
      } else {
        fn.apply(this, [item, ...args]);
      }
    });
  }

  /**
   * Open a dropdown list
   */
  open() {
    removeClass(this.el, cls.HIDDEN);
    const highlightedItem =
      !this.selectedItem || this.selectedItem.isDisabled()
        ? this.getItems(item => !item.isDisabled())[0]
        : this.selectedItem;
    this.highlight(highlightedItem);
  }

  /**
   * Close a dropdown list
   */
  close() {
    addClass(this.el, cls.HIDDEN);
    this.dehighlight();
  }

  /**
   * Disable an dropdown
   */
  disable() {
    this.nativeEl.disabled = true;
    addClass(this.el, cls.DISABLED);
  }

  /**
   * Enable an dropdown
   */
  enable() {
    this.nativeEl.disabled = false;
    removeClass(this.el, cls.DISABLED);
  }

  /**
   * Select an Item
   * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
   * @return {Item} result of selection
   */
  select(value) {
    const selectedItem = value instanceof Item ? value : this.getItem(value);
    this.deselect();

    if (!selectedItem || (selectedItem && selectedItem.isDisabled())) {
      return null;
    }

    selectedItem.select();
    this.selectedItem = selectedItem;

    return selectedItem;
  }

  /**
   * Deselect an Item
   */
  deselect() {
    if (this.selectedItem) {
      this.selectedItem.deselect();
      this.selectedItem = null;
    }
  }

  /**
   * Highlight an Item
   * @param {number|string|Item} value - if string, find an Item by its value. if number, find an Item by its index.
   */
  highlight(value) {
    let highlightedItem;
    if (value instanceof Item) {
      highlightedItem = value;
    } else if (isExisty(value)) {
      highlightedItem = this.getItem(value);
    }

    if (highlightedItem && highlightedItem !== this.highlightedItem) {
      this.dehighlight();
      highlightedItem.highlight();
      this.highlightedItem = highlightedItem;
    }
  }

  /**
   * Dehighlight an Item
   */
  dehighlight() {
    if (this.highlightedItem) {
      this.highlightedItem.dehighlight();
      this.highlightedItem = null;
    }
  }

  /**
   * Move a highlighted Item
   * @param {number} direction - direction to move
   */
  moveHighlightedItem(direction) {
    const highlightedItem = this.getHighlightedItem();
    const items = this.getItems();

    let index = items.indexOf(highlightedItem);
    if (index > -1) {
      index += direction;
      for (; index < items.length && index >= 0; index += direction) {
        if (!items[index].isDisabled()) {
          this.highlight(items[index]);
          break;
        }
      }
    }
  }

  /**
   * Get all Items that pass the test implemented by the provided function
   * If filter function is not passed, it returns all Items
   * @param {function} fn - filter function
   * @return {array<Item>}
   */
  getItems(fn = () => true) {
    const items = [];
    this.iterateItems(item => {
      if (fn(item)) {
        items.push(item);
      }
    });

    return items;
  }

  /**
   * Get an Item by its index or value
   * @param {number|string} value - if string, the Item's value. if number, the Item's index.
   * @return {Item}
   */
  getItem(value) {
    const isValidItem = isNumber(value)
      ? comparedItem => comparedItem.getIndex() === value
      : comparedItem => comparedItem.getValue() === value;

    return this.getItems(isValidItem)[0];
  }

  /**
   * Get all ItemGroups that pass the test implemented by the provided function
   * If filter function is not passed, it returns all ItemGroups
   * @param {function} fn - filter function
   * @return {array<ItemGroup>}
   */
  getItemGroups(fn = () => true) {
    const itemGroups = [];
    this.items.forEach(itemGroup => {
      if (itemGroup instanceof ItemGroup && fn(itemGroup)) {
        itemGroups.push(itemGroup);
      }
    });

    return itemGroups;
  }

  /**
   * Get an ItemGroup by its index
   * @param {number} index - groupIndex of the ItemGroup
   * @return {ItemGroup}
   */
  getItemGroup(index) {
    return this.getItemGroups(itemGroup => itemGroup.getIndex() === index)[0];
  }

  /**
   * Return the number of Items
   * @return {number}
   */
  getItemLength() {
    return this.itemLength;
  }

  /**
   * Return the selected Item
   * @return {Item}
   */
  getSelectedItem() {
    return this.selectedItem;
  }

  /**
   * Return the highlighted Item
   * @return {Item}
   */
  getHighlightedItem() {
    return this.highlightedItem;
  }

  /**
   * Append the element and native element to the container
   * @param {HTMLElement} container - container element
   */
  appendToContainer(container) {
    container.appendChild(this.el);
    container.appendChild(this.nativeEl);
  }

  /**
   * Destory a dropdown
   */
  destroy() {
    this.items.forEach(item => item.destroy());
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.nativeEl = this.items = this.selectedItem = this.highlightedItem = null;
  }
}
