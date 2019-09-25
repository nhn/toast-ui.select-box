/**
 * @fileoverview Input
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { CSS_PREFIX, INPUT_CLASS_NAME } from './statics';

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
   */
  constructor(options) {
    const el = document.createElement('div');
    el.innerHTML = `<p class="${PLACEHOLDER_CLASS_NAME}">${options.placeholder}</p>
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
  }

  /**
   * Destroy an option
   */
  destroy() {
    removeElement(this.el);
    this.el = this.placeholder = null;
  }
}
