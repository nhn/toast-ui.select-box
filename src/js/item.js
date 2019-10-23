/**
 * @fileoverview Item
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { createElement } from './utils';
import { cls } from './constants';

/**
 * @class
 * @description
 * An item.
 * You can get Item by {@link SelectBox#getItem SelectBox.getItem()} and {@link SelectBox#getItems SelectBox.getItems()}.
 */
export default class Item {
  /**
   * @hideconstructor
   * @param {object} options - options
   *   @param {string} [options.label] - label to be displayed in the drop-down list
   *   @param {string} options.value - value of an item
   *   @param {boolean} [options.disabled=false] - whether an Item should be disabled or not
   *   @param {boolean} [options.selected=false] - whether an Item should be pre-selected or not
   *   @param {number} options.index - Item's index
   */
  constructor({ value, label, disabled, selected, index }) {
    /**
     * value of an item
     * @type {string}
     * @private
     */
    this.value = `${value}`;

    /**
     * label to be displayed in the drop-down list
     * if label is an empty string, it should be same as its value
     * @type {string}
     * @private
     */
    this.label = label || this.value;

    /**
     * @type {number}
     * @private
     */
    this.index = index;

    /**
     * whether an ItemGroup of the Item is disabled or not
     * @type {boolean}
     * @private
     */
    this.itemGroupDisabled = false;

    /**
     * whether an Item is disabled or not
     * @type {boolean}
     * @private
     */
    this.itemDisabled = false;

    /**
     * @type {boolean}
     * @private
     */
    this.selected = false;

    /**
     * <li> element for a custom dropdown item
     * @type {HTMLElement}
     * @private
     */
    this.el = createElement('li', this.label, {
      className: cls.ITEM,
      tabIndex: -1,
      'data-value': this.value,
      'data-index': this.index
    });

    /**
     * <option> element for a select element
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = createElement('option', '', {
      value: this.value,
      label: this.label
    });

    this.initialize(disabled, selected);
  }

  /**
   * Initialize
   * @private
   */
  initialize(disabled, selected) {
    if (selected) {
      this.select();
    }

    if (disabled) {
      this.disable();
    }
  }

  /**
   * Make an Item disable
   * @private
   */
  makeDisable() {
    this.nativeEl.disabled = true;
    addClass(this.el, cls.DISABLED);
  }

  /**
   * Make an Item enable
   * @private
   */
  makeEnable() {
    this.nativeEl.disabled = false;
    removeClass(this.el, cls.DISABLED);
  }

  /**
   * Disable an Item due to an ItemGroup
   * @ignore
   */
  disableItemGroup() {
    this.itemGroupDisabled = true;
    this.makeDisable();
  }

  /**
   * Enable an Item due to an ItemGroup
   * @ignore
   */
  enableItemGroup() {
    this.itemGroupDisabled = false;
    if (!this.isDisabled()) {
      this.makeEnable();
    }
  }

  /**
   * Disable an Item
   * @ignore
   */
  disable() {
    this.itemDisabled = true;
    this.makeDisable();
  }

  /**
   * Enable an Item
   * @ignore
   */
  enable() {
    this.itemDisabled = false;
    if (!this.isDisabled()) {
      this.makeEnable();
    }
  }

  /**
   * Select an Item
   * @ignore
   */
  select() {
    if (!this.isDisabled()) {
      this.selected = this.nativeEl.selected = true;
      addClass(this.el, cls.SELECTED);
    }
  }

  /**
   * Deselect an Item
   * @ignore
   */
  deselect() {
    this.selected = this.nativeEl.selected = false;
    removeClass(this.el, cls.SELECTED);
  }

  /**
   * Highlight an Item
   * @ignore
   */
  highlight() {
    if (!this.isDisabled()) {
      addClass(this.el, cls.HIGHLIGHT);
      this.el.focus();
    }
  }

  /**
   * Remove a highlight from an Item
   * @ignore
   */
  dehighlight() {
    removeClass(this.el, cls.HIGHLIGHT);
    this.el.blur();
  }

  /**
   * Return an item's value.
   * @return {string}
   */
  getValue() {
    return this.value;
  }

  /**
   * Return an item's label.
   * @return {string}
   */
  getLabel() {
    return this.label;
  }

  /**
   * Return an item's index.
   * @return {number}
   */
  getIndex() {
    return this.index;
  }

  /**
   * Return whether an item is selected or not.
   * @return {boolean}
   */
  isSelected() {
    return this.selected;
  }

  /**
   * Return whether an item is disabled or not.
   * The result is true if any of the items and item groups are disabled.
   * @return {boolean}
   */
  isDisabled() {
    return this.itemDisabled || this.itemGroupDisabled;
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
   * Destroy an Item
   * @ignore
   */
  destroy() {
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.nativeEl = null;
  }
}
