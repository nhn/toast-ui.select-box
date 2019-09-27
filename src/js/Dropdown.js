/**
 * @fileoverview Dropdown
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { DROPDOWN_CLASS_NAME, HIDDEN_CLASS_NAME, DISABLED_CLASS_NAME } from './statics';
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
   *   @param {string} [options.placeholder] - placeholder for an input
   *   @param {array<object>} options.data - data for optgroups and options
   *   @param {boolean} [options.disabled=false] - whether a dropdown should be disabled or not
   *   @param {boolean} [options.required=false] - whether a dropdown should be required or not
   *   @param {name} [options.name] - name of the select
   */
  constructor({ placeholder, data, disabled = false, required = false, name }) {
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
    this.nativeEl.tabIndex = -1;

    this.disabled = this.nativeEl.disabled = disabled;
    this.required = this.nativeEl.required = required;
    this.name = this.nativeEl.name = name;

    /**
     * Options and Optgroups
     * @type {array<Option|Optgroup>}
     * @private
     */
    let idx = 0;
    this.options = data.map((datum, index) => {
      if (datum.data) {
        const optgroupIndex = index + idx;
        idx += datum.data.length - 1;

        return new Optgroup(datum, optgroupIndex);
      }

      return new Option(datum, index + idx);
    });

    /**
     * Placeholder
     * @type {Option}
     * @private
     */
    this.placeholder = new Option({
      value: '',
      text: placeholder
    });

    /**
     * selected Option or Optgroup
     * @type {Option|Optgroup}
     * @private
     */
    this.selectedOption = null;

    this.initialize();
  }

  /**
   * Initialize
   * @private
   */
  initialize() {
    this.appendOptions();
    this.changeDisabled(this.disabled);
  }

  /**
   * Append options and optgroups to a dropdown
   * @private
   */
  appendOptions() {
    this.nativeEl.appendChild(this.placeholder.nativeEl);
    this.options.forEach(option => {
      this.el.appendChild(option.el);
      this.nativeEl.appendChild(option.nativeEl);
    });
  }

  /**
   * Make disable or enable a dropdown
   * @param {boolean} disabled - if true, a dropdown is disabled. if false, a dropdown is enabled.
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
   * Open or close a dropdown list
   * @param {boolean} opened - if true, a dropdown opens. if false, a dropdown closes.
   * @private
   */
  changeOpened(opened) {
    if (opened) {
      removeClass(this.el, HIDDEN_CLASS_NAME);
    } else {
      addClass(this.el, HIDDEN_CLASS_NAME);
    }
  }

  /**
   * Select an option
   * @param {string|number} value - if string, find an option by its value. if number, find an option by its index.
   * @return {boolean} result of selection
   */
  select(value) {
    this.deselect();
    this.options.some(option => {
      this.selectedOption = option.select(value);

      return !!this.selectedOption;
    });

    return this.selectedOption;
  }

  /**
   * Deselect an option
   */
  deselect() {
    if (this.selectedOption) {
      this.selectedOption.deselect();
      this.selectedOption = null;
    }
  }

  /**
   * Return the selected option
   * @return {Option}
   */
  getSelectedOption() {
    if (this.selectedOption instanceof Optgroup) {
      return this.selectedOption.getSelectedOption();
    }

    return this.selectedOption;
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
