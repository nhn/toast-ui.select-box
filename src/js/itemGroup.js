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
 * @description
 * A group of items.
 * You can get ItemGroup by {@link SelectBox#getItemGroup SelectBox.getItemGroup()} and {@link SelectBox#getItemGroups SelectBox.getItemGroups()}.
 */
export default class ItemGroup {
  /**
   * @hideconstructor
   * @param {object} options - options
   *   @param {string} [options.label] - label to be displayed in the dropdown list
   *   @param {array<itemData>} options.data - data for Items to be included in the ItemGroup
   *   @param {boolean} [options.disabled=false] - whether an ItemGroup should be disabled or not
   *   @param {number} options.index - index of the first Item in the ItemGroup
   *   @param {number} options.itemGroupIndex - index of the ItemGroup
   */
  constructor({ label = '', data, disabled = false, index, itemGroupIndex }) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = createElement('li', '', { 'data-group-index': itemGroupIndex });

    /**
     * @type {HTMLElement}
     * @private
     */
    this.labelEl = createElement('span', label, { className: cls.ITEM_GROUP_LABEL }, this.el);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.itemContainerEl = createElement('ul', '', { className: cls.ITEM_GROUP }, this.el);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = createElement('optgroup', label);

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
     * @type {string}
     * @private
     */
    this.label = label;

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
   * @ignore
   */
  disable() {
    this.disabled = this.nativeEl.disabled = true;
    addClass(this.labelEl, cls.DISABLED);
    this.items.forEach(item => item.disableItemGroup());
  }

  /**
   * Enable an ItemGroup
   * @ignore
   */
  enable() {
    this.disabled = this.nativeEl.disabled = false;
    removeClass(this.labelEl, cls.DISABLED);
    this.items.forEach(item => item.enableItemGroup());
  }

  /**
   * Get {@link Item items} in the item group.
   * @return {array<Item>}
   * @example
   * const items = itemGroup.getItems();
   * console.log(items[0]); // first item in the item group
   * console.log(items.length); // the number of items in the item group
   */
  getItems() {
    return this.items;
  }

  /**
   * Return an item group's index.
   * @return {number}
   */
  getIndex() {
    return this.index;
  }

  /**
   * Return an item group's label.
   * @return {string}
   */
  getLabel() {
    return this.label;
  }

  /**
   * Return whether an ItemGroup is disabled or not.
   * @return {boolean}
   */
  isDisabled() {
    return this.disabled;
  }

  /**
   * Append the element and native element to the containers
   * @param {HTMLElement} container - container element
   * @param {HTMLElement} nativeContainer - native container element
   * @ignore
   */
  appendToContainer(container, nativeContainer) {
    container.appendChild(this.el);
    nativeContainer.appendChild(this.nativeEl);
  }

  /**
   * Destory an ItemGroup
   * @ignore
   */
  destroy() {
    this.items.forEach(item => item.destroy());
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.labelEl = this.itemContainerEl = this.nativeEl = this.items = null;
  }
}
