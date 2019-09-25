/**
 * @fileoverview Option
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { OPTION_CLASS_NAME } from './statics';

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
   *   @param {*} options.value - value to be sent to a server
   *   @param {boolean} [options.disabled=false] - whether an option should be disabled or not
   *   @param {boolean} [options.selected=false] - whether an option should be pre-selected or not
   */
  constructor({ value, text, disabled = false, selected = false }) {
    /**
     * li element for a custom dropdown item
     * @type {HTMLLIElement}
     */
    this.el = this.createElement(text);

    /**
     * option element for a select element
     * @type {HTMLOptionElement}
     */
    this.nativeEl = document.createElement('option');

    this.label = this.nativeEl.label = text;
    this.value = this.nativeEl.value = value;
    this.disabled = this.nativeEl.disabled = disabled;
    this.selected = this.nativeEl.selected = selected;
  }

  /**
   * Create a li element for a custom dropdown item
   * @param {string} text - label to be displayed in the drop-down list
   */
  createElement(text) {
    const el = document.createElement('li');
    el.innerHTML = text;
    el.className = OPTION_CLASS_NAME;

    return el;
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
