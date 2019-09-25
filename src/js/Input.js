/**
 * @fileoverview Input
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { CSS_PREFIX, INPUT_CLASS_NAME, DISABLED_CLASS_NAME } from './statics';

const PLACEHOLDER_CLASS_NAME = `${CSS_PREFIX}-placeholder`;
const ICON_CLASS_NAME = `${CSS_PREFIX}-ico-select`;

/**
 * @class
 * @private
 */
export default class Input {
  /**
   * Create an input
   * @constructor
   * @param {object} options - options
   *   @param {string} [options.placeholder] - placeholder for a select box
   *   @param {string} [options.disabled] - whether an input should be disabled or not
   */
  constructor({ placeholder, disabled }) {
    const el = document.createElement('div');
    el.innerHTML = `<p class="${PLACEHOLDER_CLASS_NAME}">${placeholder}</p>
      <span class="${ICON_CLASS_NAME}">select</span>`;
    el.className = INPUT_CLASS_NAME;

    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = el;

    /**
     * An element for a placeholder
     * @type {HTMLElement}
     * @private
     */
    this.placeholderEl = el.querySelector(`.${PLACEHOLDER_CLASS_NAME}`);

    this.disabled = disabled;

    this.initialize();
  }

  /**
   * Initialize
   * @private
   */
  initialize() {
    this.changeDisabled(this.disabled);
  }

  /**
   * Make disable or enable a select box
   * @param {boolean} disabled - if true, a select box is disabled. if false, a select box is enabled.
   * @private
   */
  changeDisabled(disabled) {
    this.disabled = disabled;
    if (disabled) {
      addClass(this.el, DISABLED_CLASS_NAME);
    } else {
      removeClass(this.el, DISABLED_CLASS_NAME);
    }
  }

  /**
   * Destroy an option
   */
  destroy() {
    removeElement(this.el);
    this.el = this.placeholder = null;
  }
}
