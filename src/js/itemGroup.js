/**
 * @fileoverview ItemGroup
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isNumber from 'tui-code-snippet/type/isNumber';
import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { classNames } from './constants';
import Item from './item';

/**
 * @class
 * @ignore
 * @param {object} options - options
 *   @param {string} [options.text] - label to be displayed in the dropdown list
 *   @param {array<object>} options.data - data for Items to be included in the ItemGroup
 *   @param {boolean} [options.disabled=false] - whether an ItemGroup should be disabled or not
 *   @param {number} [options.index] - ItemGroup's index
 */
export default class ItemGroup {
  constructor({ text = '', data, disabled = false, index }) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = this.createElement();

    /**
     * @type {HTMLElement}
     * @private
     */
    this.labelEl = this.createLabelElement(text);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.itemContainerEl = this.createItemContainerEl();

    /**
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = this.createNativeElement(text);

    /**
     * @type {array<Item>}
     * @private
     */
    this.items = this.createItems(data, index);

    this.initialize(disabled);
  }

  /**
   * Create <ul> element
   * @return {HTMLElement}
   * @private
   */
  createElement() {
    const el = document.createElement('li');

    return el;
  }

  /**
   * Create <span> element for a label
   * @return {HTMLElement}
   * @private
   */
  createLabelElement(label) {
    const labelEl = document.createElement('span');
    labelEl.className = classNames.ITEM_GROUP_LABEL;
    labelEl.innerText = label;

    this.el.appendChild(labelEl);

    return labelEl;
  }

  /**
   * Create <ul> element to wrap Items
   * @return {HTMLElement}
   * @private
   */
  createItemContainerEl() {
    const itemContainerEl = document.createElement('ul');
    itemContainerEl.className = classNames.ITEM_GROUP;

    this.el.appendChild(itemContainerEl);

    return itemContainerEl;
  }

  /**
   * Create <optgroup> element
   * @return {HTMLElement}
   * @private
   */
  createNativeElement(label) {
    const nativeEl = document.createElement('optgroup');
    nativeEl.label = label;

    return nativeEl;
  }

  /**
   * Create Items to be included in the ItemGroup
   * @return {array<Item>}
   * @private
   */
  createItems(data, index) {
    return data.map((datum, itemIndex) => {
      const item = new Item({ index: index + itemIndex, ...datum });
      item.appendToContainer(this.itemContainerEl, this.nativeEl);

      return item;
    });
  }

  /**
   * Initialize
   * @private
   */
  initialize(disabled) {
    if (disabled) {
      this.disable();
    }
  }

  /**
   * Disable an ItemGroup
   */
  disable() {
    this.nativeEl.disabled = true;
    addClass(this.labelEl, classNames.DISABLED);
    this.items.forEach(item => item.disableItemGroup());
  }

  /**
   * Enable an ItemGroup
   */
  enable() {
    this.nativeEl.disabled = false;
    removeClass(this.labelEl, classNames.DISABLED);
    this.items.forEach(item => item.enableItemGroup());
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

      if (isValidItem(item)) {
        result = item;
        break;
      }
    }

    return result;
  }

  /**
   * Get items in the ItemGroup
   * @return {array<Item>}
   */
  getItems() {
    return this.items;
  }

  /**
   * Append the element and native element to the containers
   * @param {HTMLElement} container - container element
   * @param {HTMLElement} nativeContainer - native container element
   */
  appendToContainer(container, nativeContainer) {
    container.appendChild(this.el);
    nativeContainer.appendChild(this.nativeEl);
  }

  /**
   * Destory an ItemGroup
   */
  destroy() {
    this.items.forEach(item => item.destroy());
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.labelEl = this.itemContainerEl = this.nativeEl = this.items = null;
  }
}
