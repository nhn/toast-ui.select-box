/**
 * @fileoverview Dropdown
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isNumber from 'tui-code-snippet/type/isNumber';
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
    if (name) {
      this.name = this.nativeEl.name = name;
    }

    /**
     * Options and Optgroups
     * @type {Array.<Option|Optgroup>}
     * @private
     */
    this.options = [];

    /**
     * the number of Options
     * @type {number}
     * @private
     */
    this.optionLength = 0;

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

    /**
     * Highlighted option
     * @type {Option}
     * @private
     */
    this.highlightedOption = null;

    this.initialize(data);
  }

  /**
   * Initialize
   * @private
   */
  initialize(data) {
    this.createOptions(data);
    this.appendOptions();
    this.changeDisabled(this.disabled);
  }

  /**
   * Create options and optgroup
   * @param {object} data - data for optgroups and options
   */
  createOptions(data) {
    let idx = 0;
    this.options = data.map((datum, index) => {
      index += idx;
      if (datum.data) {
        idx += datum.data.length - 1;

        return new Optgroup(datum, index);
      }

      return new Option(datum, index);
    });
    this.optionLength = data.length + idx;
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
    if (this.disabled !== disabled) {
      this.disabled = this.nativeEl.disabled = disabled;
      if (disabled) {
        addClass(this.el, DISABLED_CLASS_NAME);
      } else {
        removeClass(this.el, DISABLED_CLASS_NAME);
      }
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
      if (this.selectedOption) {
        this.highlight();
      }
    } else {
      addClass(this.el, HIDDEN_CLASS_NAME);
      this.dehighlight();
    }
  }

  /**
   * Select an option
   * @param {string|number} value - if string, find an option by its value. if number, find an option by its index.
   * @return {boolean} result of selection
   */
  select(value) {
    this.deselect();

    const selectingOption = this.getOption(value);
    if (selectingOption) {
      selectingOption.select();
      this.selectedOption = selectingOption;
    }

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
   * Highlight an option
   * @param {number} index - index
   */
  highlight(index) {
    let highlightingOption;
    if (isNumber(index)) {
      highlightingOption = this.getOption(index);
    } else {
      highlightingOption = this.selectedOption || this.getOption(0);
    }

    if (highlightingOption !== this.highlightedOption) {
      this.dehighlight();
      highlightingOption.highlight();
      this.highlightedOption = highlightingOption;
    }
  }

  /**
   * Dehighlight an option
   */
  dehighlight() {
    if (this.highlightedOption) {
      this.highlightedOption.dehighlight();
      this.highlightedOption = null;
    }
  }

  /**
   * Return the selected option
   * @return {Option}
   */
  getSelectedOption() {
    return this.selectedOption;
  }

  /**
   * Return the highlighted option
   * @return {Option}
   */
  getHighlightedOption() {
    return this.highlightedOption;
  }

  /**
   * Return the number of options
   * @return {number}
   */
  getOptionLength() {
    return this.optionLength;
  }

  /**
   * Get an option by its index or value
   * @param {number|string} value - if string, the option's value. if number, the option's index.
   * @return {Option}
   */
  getOption(value) {
    let result;

    this.options.some(option => {
      if (option instanceof Optgroup) {
        result = option.getOption(value);
      } else if (option.compare(value)) {
        result = option;
      }

      return result;
    });

    return result;
  }

  /**
   * Destory an optgroup
   */
  destroy() {
    this.options.forEach(option => option.destroy());
    this.placeholder.destroy();
    removeElement(this.el);
    removeElement(this.nativeEl);
    this.el = this.nativeEl = this.options = this.placeholder = this.selectedOption = this.highlightedOption = null;
  }
}
