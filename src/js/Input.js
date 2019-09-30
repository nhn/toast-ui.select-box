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
const OPEN_CLASS_NAME = `${CSS_PREFIX}-open`;

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
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = this.createElement(placeholder);

    /**
     * An element for a placeholder
     * @type {HTMLElement}
     * @private
     */
    this.placeholderEl = this.el.querySelector(`.${PLACEHOLDER_CLASS_NAME}`);

    this.placeholderText = placeholder;

    this.disabled = disabled;

    this.initialize();
  }

  /**
   * Create a li element for a custom dropdown item
   * @param {string} placeholder - placeholder
   * @private
   */
  createElement(placeholder) {
    const el = document.createElement('div');
    el.innerHTML = `<p class="${PLACEHOLDER_CLASS_NAME}">${placeholder}</p>
      <span class="${ICON_CLASS_NAME}">select</span>`;
    el.className = INPUT_CLASS_NAME;
    el.tabIndex = 0;

    return el;
  }

  /**
   * Initialize
   * @private
   */
  initialize() {
    this.changeDisabled(this.disabled);
  }

  /**
   * Make disable or enable an input
   * @param {boolean} disabled - if true, an input is disabled. if false, an input is enabled.
   * @private
   */
  changeDisabled(disabled) {
    if (this.disabled !== disabled) {
      this.disabled = disabled;
      if (disabled) {
        addClass(this.el, DISABLED_CLASS_NAME);
      } else {
        removeClass(this.el, DISABLED_CLASS_NAME);
      }
    }
  }

  /**
   * Change the direction of arrow depending on whether a dropdown list is open
   * @param {boolean} opened - if true, an arrow points upward. if false, an arrow points downward.
   * @private
   */
  changeOpened(openness) {
    if (openness) {
      addClass(this.el, OPEN_CLASS_NAME);
    } else {
      removeClass(this.el, OPEN_CLASS_NAME);
    }
  }

  /**
   * Change the text in the placeholder
   * @param {Option} option - selected option
   */
  changeText(option) {
    if (option) {
      this.placeholderEl.innerHTML = option.label;
    } else {
      this.placeholderEl.innerHTML = this.placeholderText;
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
