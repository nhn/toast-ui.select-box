/**
 * @fileoverview Dropdown
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isNumber from 'tui-code-snippet/type/isNumber';
import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { classNames } from './constants';
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
     * ul element for a custom dropdown
     * @type {HTMLElement}
     * @private
     */
    this.el = this.createElement();

    /**
     * select element
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = this.createNativeElement(placeholder);

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
     * selected Item
     * @type {Item}
     * @private
     */
    this.selectedItem = null;

    /**
     * highlighted Item
     * @type {Item}
     * @private
     */
    this.highlightedItem = null;

    this.initialize(data, disabled);
  }

  /**
   * Create ul element
   * @return {HTMLElement}
   * @private
   */
  createElement() {
    const el = document.createElement('ul');
    el.className = `${classNames.DROPDOWN} ${classNames.HIDDEN}`;

    return el;
  }

  /**
   * Create select element
   * @param {string} placeholder - placeholder for an input
   * @return {HTMLElement}
   * @private
   */
  createNativeElement(placeholder) {
    const nativeEl = document.createElement('select');
    nativeEl.className = classNames.HIDDEN;
    nativeEl.tabIndex = -1;

    if (placeholder) {
      nativeEl.innerHTML = `<option label="${placeholder}" value=""></option>`;
    }

    return nativeEl;
  }

  /**
   * Create Items and ItemGroups and calculate the number of Items
   * @returns {array<Item|ItemGroup>}
   * @private
   */
  initializeItems(data) {
    let item;
    let itemIndex = 0;
    data.forEach(datum => {
      if (datum.data) {
        item = new ItemGroup({ index: itemIndex, ...datum });
        itemIndex += datum.data.length - 1;
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
  initialize(data, disabled) {
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
    removeClass(this.el, classNames.HIDDEN);
    if (this.selectedItem) {
      this.highlight();
    }
  }

  /**
   * Close a dropdown list
   */
  close() {
    addClass(this.el, classNames.HIDDEN);
    this.dehighlight();
  }

  /**
   * Disable an dropdown
   */
  disable() {
    this.nativeEl.disabled = true;
    addClass(this.el, classNames.DISABLED);
  }

  /**
   * Enable an dropdown
   */
  enable() {
    this.nativeEl.disabled = false;
    removeClass(this.el, classNames.DISABLED);
  }

  /**
   * Select an Item
   * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
   * @return {Item} result of selection
   */
  select(value) {
    const selectedItem = value instanceof Item ? value : this.getItem(value);

    if (selectedItem && selectedItem.select()) {
      this.deselect();
      this.selectedItem = selectedItem;

      return selectedItem;
    }

    return null;
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
   * @param {number} index - index
   */
  highlight(index) {
    const highlightedItem = isNumber(index)
      ? this.getItem(index)
      : this.selectedItem || this.getItem(0);

    if (highlightedItem !== this.highlightedItem) {
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
   * Get all Items
   * @returns {array<Item>}
   */
  getItems() {
    const items = [];
    this.iterateItems(item => {
      items.push(item);
    });

    return items;
  }

  /**
   * Get an Item by its index or value
   * @param {number|string} value - if string, the Item's value. if number, the Item's index.
   * @return {Item}
   */
  getItem(value) {
    let result, item;

    const isValidItem = isNumber(value)
      ? comparedItem => comparedItem.getIndex() === value
      : comparedItem => comparedItem.getValue() === value;

    for (let i = 0, len = this.items.length; i < len; i += 1) {
      item = this.items[i];

      if (item instanceof ItemGroup) {
        result = item.getItem(value);
      } else if (isValidItem(item)) {
        result = item;
      }

      if (result) {
        break;
      }
    }

    return result;
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
