/**
 * @fileoverview Dropdown
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { DROPDOWN_CLASS_NAME, HIDDEN_CLASS_NAME } from './statics';
import Optgroup from './Optgroup';
import Option from './Option';

/**
 * @class
 * @private
 */
export default class Dropdown {
  /**
   * Create a select box
   * @constructor
   * @param {object} options - options
   *   @param {array<object>} options.data - data for optgroups and options
   *   @param {boolean} [options.disabled=false] - whether an option should be disabled or not
   *   @param {boolean} [options.required=false] - whether an option should be required or not
   *   @param {name} [options.name] - name of the select
   */
  constructor({ data, disabled = false, required = false, name }) {
    /**
     * ul element for a custom dropdown
     * @type {HTMLElement}
     * @private
     */
    this.el = document.createElement('ul');
    this.el.className = `${DROPDOWN_CLASS_NAME} ${HIDDEN_CLASS_NAME}`;

    /**
     * select element
     * @type {HTMLElement}
     * @private
     */
    this.nativeEl = document.createElement('select');
    this.nativeEl.className = HIDDEN_CLASS_NAME;

    this.disabled = this.nativeEl.disabled = disabled;
    this.required = this.nativeEl.required = required;
    this.name = this.nativeEl.name = name;

    /**
     * Options and Optgroups
     * @type {array<Option|Optgroup>}
     * @private
     */
    this.options = data.map(datum => {
      if (datum.data) {
        return new Optgroup(datum);
      }

      return new Option(datum);
    });

    this.appendOptions();
  }

  /**
   * Append options and optgroups to a dropdown
   */
  appendOptions() {
    this.options.forEach(option => {
      this.el.appendChild(option.el);
      this.nativeEl.appendChild(option.nativeEl);
    });
  }

  /**
   * Destory an optgroup
   */
  destroy() {
    this.options.forEach(option => option.destroy());
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.nativeEl = null;
  }
}
