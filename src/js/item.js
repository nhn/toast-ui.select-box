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
 * @ignore
 * @param {object} options - options
 *   @param {string} [options.text] - label to be displayed in the drop-down list
 *   @param {string} options.value - value of an item
 *   @param {boolean} [options.disabled=false] - whether an Item should be disabled or not
 *   @param {boolean} [options.selected=false] - whether an Item should be pre-selected or not
 *   @param {number} options.index - Item's index
 */
export default class Item {
  constructor({ value, text, disabled, selected, index }) {
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
    this.label = text || this.value;

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
   */
  disableItemGroup() {
    this.itemGroupDisabled = true;
    this.makeDisable();
  }

  /**
   * Enable an Item due to an ItemGroup
   */
  enableItemGroup() {
    this.itemGroupDisabled = false;
    if (!this.isDisabled()) {
      this.makeEnable();
    }
  }

  /**
   * Disable an Item
   */
  disable() {
    this.itemDisabled = true;
    this.makeDisable();
  }

  /**
   * Enable an Item
   */
  enable() {
    this.itemDisabled = false;
    if (!this.isDisabled()) {
      this.makeEnable();
    }
  }

  /**
   * Select an Item
   * @return {boolean} result
   */
  select() {
    if (!this.isDisabled()) {
      this.selected = this.nativeEl.selected = true;
      addClass(this.el, cls.SELECTED);
    }
  }

  /**
   * Deselect an Item
   */
  deselect() {
    this.selected = this.nativeEl.selected = false;
    removeClass(this.el, cls.SELECTED);
  }

  /**
   * Highlight an Item
   */
  highlight() {
    if (!this.isDisabled()) {
      addClass(this.el, cls.HIGHLIGHT);
      this.el.focus();
    }
  }

  /**
   * Remove a highlight from an Item
   */
  dehighlight() {
    removeClass(this.el, cls.HIGHLIGHT);
    this.el.blur();
  }

  /**
   * Return an Item's value
   * @return {string}
   */
  getValue() {
    return this.value;
  }

  /**
   * Return an Item's label
   * @return {string}
   */
  getLabel() {
    return this.label;
  }

  /**
   * Return an Item's index
   * @return {number}
   */
  getIndex() {
    return this.index;
  }

  /**
   * Return whether an Item is selected or not
   * @return {boolean}
   */
  isSelected() {
    return this.selected;
  }

  /**
   * Return whether an Item is disabled or not
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
   */
  appendToContainer(container, nativeContainer) {
    container.appendChild(this.el);
    nativeContainer.appendChild(this.nativeEl);
  }

  /**
   * Destroy an Item
   */
  destroy() {
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.nativeEl = null;
  }
}
