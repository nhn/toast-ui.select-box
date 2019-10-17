/**
 * @fileoverview ItemGroup
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { createElement } from './utils';
import { cls } from './constants';
import Item from './item';

/**
 * @class
 * @ignore
 * @param {object} options - options
 *   @param {string} [options.text] - label to be displayed in the dropdown list
 *   @param {array<object>} options.data - data for Items to be included in the ItemGroup
 *   @param {boolean} [options.disabled=false] - whether an ItemGroup should be disabled or not
 *   @param {number} options.index - index of the first Item in the ItemGroup
 *   @param {number} options.itemGroupIndex - index of the ItemGroup
 */
export default class ItemGroup {
  constructor({ text = '', data, disabled = false, index, itemGroupIndex }) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = createElement('li', '', { 'data-group-index': itemGroupIndex });

    /**
     * @type {HTMLElement}
     * @private
     */
    this.labelEl = createElement('span', text, { className: cls.ITEM_GROUP_LABEL }, this.el);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.itemContainerEl = createElement('ul', '', { className: cls.ITEM_GROUP }, this.el);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = createElement('optgroup', text);

    /**
     * @type {array<Item>}
     * @private
     */
    this.items = this.createItems(data, index);

    /**
     * @type {number}
     * @private
     */
    this.index = itemGroupIndex;

    /**
     * whether an ItemGroup is disabled or not
     * @type {boolean}
     * @private
     */
    this.disabled = false;

    this.initialize(disabled);
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
    this.disabled = this.nativeEl.disabled = true;
    addClass(this.labelEl, cls.DISABLED);
    this.items.forEach(item => item.disableItemGroup());
  }

  /**
   * Enable an ItemGroup
   */
  enable() {
    this.disabled = this.nativeEl.disabled = false;
    removeClass(this.labelEl, cls.DISABLED);
    this.items.forEach(item => item.enableItemGroup());
  }

  /**
   * Get items in the ItemGroup
   * @return {array<Item>}
   */
  getItems() {
    return this.items;
  }

  /**
   * Return an ItemGroup's index
   * @return {number}
   */
  getIndex() {
    return this.index;
  }

  /**
   * Return whether an ItemGroup is disabled or not
   * @return {boolean}
   */
  isDisabled() {
    return this.disabled;
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
