/**
 * @fileoverview Option
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { OPTION_CLASS_NAME, DISABLED_CLASS_NAME, SELECTED_CLASS_NAME } from './statics';

/**
 * @class
 * @private
 */
export default class Option {
  /**
   * Create an option
   * @constructor
   * @param {object} options - options
   *   @param {string} [options.text] - label to be displayed in the drop-down list
   *   @param {string} options.value - value to be sent to a server
   *   @param {boolean} [options.disabled=false] - whether an option should be disabled or not
   *   @param {boolean} [options.selected=false] - whether an option should be pre-selected or not
   */
  constructor({ value, text, disabled = false, selected = false }) {
    /**
     * li element for a custom dropdown item
     * @type {HTMLLIElement}
     * @private
     */
    this.el = this.createElement(text);
    this.el.setAttribute('data-value', value);

    /**
     * option element for a select element
     * @type {HTMLOptionElement}
     * @private
     */
    this.nativeEl = document.createElement('option');

    this.label = this.nativeEl.label = text;
    this.value = this.nativeEl.value = value.toString();
    this.disabled = this.nativeEl.disabled = disabled;
    this.selected = this.nativeEl.selected = selected;

    this.initialize();
  }

  /**
   * Create a li element for a custom dropdown item
   * @param {string} text - label to be displayed in the drop-down list
   * @private
   */
  createElement(text) {
    const el = document.createElement('li');
    el.innerHTML = text;
    el.className = OPTION_CLASS_NAME;

    return el;
  }

  /**
   * Initialize
   * @private
   */
  initialize() {
    this.changeDisabled(this.disabled);
    this.changeSelected(this.selected);
  }

  /**
   * Make disable or enable an option
   * @param {boolean} disabled - if true, an option is disabled. if false, an option is enabled.
   * @private
   */
  changeDisabled(disabled) {
    this.disabled = this.nativeEl.disabled = disabled;
    if (disabled) {
      addClass(this.el, DISABLED_CLASS_NAME);
    } else {
      removeClass(this.el, DISABLED_CLASS_NAME);
    }
  }

  /**
   * Select or deselect an option
   * @param {boolean} selected - if true, an option is selected. if false, an option is not selected.
   * @private
   */
  changeSelected(selected) {
    this.selected = this.nativeEl.selected = selected;
    if (selected) {
      addClass(this.el, SELECTED_CLASS_NAME);
    } else {
      removeClass(this.el, SELECTED_CLASS_NAME);
    }
  }

  /**
   * Disable an option
   */
  disable() {
    this.changeDisabled(true);
  }

  /**
   * Enable an option
   */
  enable() {
    this.changeDisabled(false);
  }

  /**
   * Select an option
   * @return {boolean}
   */
  select(value) {
    if (this.value === value) {
      this.changeSelected(true);

      return true;
    }

    return false;
  }

  /**
   * Deselect an option
   */
  deselect() {
    this.changeSelected(false);
  }

  /**
   * Destroy an option
   */
  destroy() {
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.nativeEl = null;
  }
}
