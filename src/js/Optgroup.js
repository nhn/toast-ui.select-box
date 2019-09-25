/**
 * @fileoverview Optgroup
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { CSS_PREFIX, OPTGROUP_CLASS_NAME, DISABLED_CLASS_NAME } from './statics';
import Option from './Option';

const OPTGROUP_LABEL_CLASS_NAME = `${CSS_PREFIX}-optgroup-label`;

/**
 * @class
 */
export default class Optgroup {
  /**
   * Create an optgroup
   * @constructor
   * @param {object} options - options
   *   @param {string} [options.text] - label to be displayed in the drop-down list
   *   @param {array<object>} options.data - data for options to be included in the optgroup
   *   @param {boolean} [options.disabled=false] - whether an optgroup should be disabled or not
   */
  constructor({ text = '', data, disabled = false }) {
    /**
     * ul element for a custom dropdown item
     * @type {HTMLUListElement}
     * @private
     */
    this.el = this.createElement(text);

    /**
     * optgroup element for a select element
     * @type {HTMLOptGroupElement}
     * @private
     */
    this.nativeEl = document.createElement('optgroup');

    this.label = this.nativeEl.label = text;
    this.disabled = this.nativeEl.disabled = disabled;

    /**
     * Options to be included in the optgroup
     * @type {array<Option>}
     */
    this.options = data.map(datum => new Option(datum));

    this.appendOptions();
    this.initialize();
  }

  /**
   * Create an ul element for a custom dropdown item
   * @param {string} text - label to be displayed in the drop-down list
   * @private
   */
  createElement(text) {
    const el = document.createElement('ul');
    el.innerHTML = `<li class="${OPTGROUP_LABEL_CLASS_NAME}">${text}</li>`;
    el.className = OPTGROUP_CLASS_NAME;

    return el;
  }

  /**
   * Append options to an optgroup
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
   * Make disable or enable an optgroup
   * @param {boolean} disabled - if true, an optgroup is disabled. if false, an optgroup is enabled.
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
   * Disable an optgroup
   */
  disable() {
    this.changeDisabled(true);
  }

  /**
   * Enable an optgroup
   */
  enable() {
    this.changeDisabled(false);
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
