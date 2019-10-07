/**
 * @fileoverview Option
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isNumber from 'tui-code-snippet/type/isNumber';
import isString from 'tui-code-snippet/type/isString';
import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import {
  OPTION_CLASS_NAME,
  DISABLED_CLASS_NAME,
  SELECTED_CLASS_NAME,
  HIGHLIGHT_CLASS_NAME
} from './statics';

/**
 * @class
 * @private
 */
export default class Option {
  /**
   * Create an option
   * @constructor
   * @param {HTMLElement} container - container element
   * @param {HTMLElement} nativeContainer - native container element
   * @param {object} options - options
   *   @param {string} [options.text] - label to be displayed in the drop-down list
   *   @param {string} options.value - value to be sent to a server
   *   @param {boolean} [options.disabled=false] - whether an option should be disabled or not
   *   @param {boolean} [options.selected=false] - whether an option should be pre-selected or not
   *   @param {number} [options.index] - option's index
   */
  constructor(
    container,
    nativeContainer,
    { value, text, disabled = false, selected = false, index }
  ) {
    /**
     * li element for a custom dropdown item
     * @type {HTMLLIElement}
     * @private
     */
    this.el = this.createElement(text);
    this.el.tabIndex = -1;
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
    this.index = index;

    this.initialize();
    if (container) {
      container.appendChild(this.el);
    }
    nativeContainer.appendChild(this.nativeEl);
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
   * Highlight or not highlight an option
   * @param {boolean} highlight - if true, an option is highlighted. if false, an option is not highlighted.
   * @private
   */
  changeHighlight(highlight) {
    if (highlight) {
      addClass(this.el, HIGHLIGHT_CLASS_NAME);
    } else {
      removeClass(this.el, HIGHLIGHT_CLASS_NAME);
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
   */
  select() {
    this.changeSelected(true);
  }

  /**
   * Deselect an option
   */
  deselect() {
    this.changeSelected(false);
  }

  /**
   * Highlight an option
   */
  highlight() {
    this.changeHighlight(true);
    this.el.focus();
  }

  /**
   * Remove a highlight from an option
   */
  dehighlight() {
    this.changeHighlight(false);
    this.el.blur();
  }

  /**
   * whether an option has a same index with a parameter
   * @param {number|string} value - if string, the option's value. if number, the option's index.
   * @return {boolean}
   */
  compare(value) {
    return (isNumber(value) && this.index === value) || (isString(value) && this.value === value);
  }

  /**
   * Return an option's index
   * @return {number}
   */
  getIndex() {
    return this.index;
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
