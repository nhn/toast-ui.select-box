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
   *   @param {array<object>} options.data - data for optgroups and options
   *   @param {boolean} [options.disabled=false] - whether a dropdown should be disabled or not
   *   @param {boolean} [options.required=false] - whether a dropdown should be required or not
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

    /**
     * selected Option or Optgroup
     * @type {Option|Optgroup}
     * @private
     */
    this.selectedOption = null;

    this.appendOptions();
    this.initialize();
  }

  /**
   * Append options and optgroups to a dropdown
   * @private
   */
  appendOptions() {
    this.options.forEach(option => {
      this.el.appendChild(option.el);
      this.nativeEl.appendChild(option.nativeEl);
    });
  }

  /**
   * Initialize
   * @private
   */
  initialize() {
    this.changeDisabled(this.disabled);
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
   * @param {string} value - value to find an option
   * @return {boolean} result of selection
   */
  select(value) {
    let result = false;

    this.deselect();
    this.options.some(option => {
      result = option.select(value);
      if (result) {
        this.selectedOption = option;
      }

      return result;
    });

    return !!this.selectedOption;
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
