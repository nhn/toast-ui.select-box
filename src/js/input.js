/**
 * @fileoverview Input
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { createElement } from './utils';
import { cls } from './constants';

/**
 * @class
 * @ignore
 * @param {object} options - options
 *   @param {string} [options.placeholder] - placeholder for a select box
 *   @param {string} [options.disabled] - whether an input should be disabled or not
 *   @param {boolean} [options.showIcon] - whether an arrow icon in the input should be shown
 */
export default class Input {
  constructor({ placeholder, disabled, showIcon }) {
    /**
     * text for a placeholder
     * @type {string}
     * @private
     */
    this.placeholderText = placeholder;

    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = createElement('div', '', { className: cls.INPUT, tabIndex: 0 });

    /**
     * @type {HTMLElement}
     * @private
     */
    this.placeholderEl = createElement(
      'p',
      this.placeholderText,
      { className: cls.PLACEHOLDER },
      this.el
    );

    this.initialize(disabled, showIcon);
  }

  /**
   * Initialize
   * @private
   */
  initialize(disabled, showIcon) {
    if (showIcon) {
      createElement('span', 'select', { className: cls.ICON }, this.el);
    } else {
      this.placeholderEl.width = '100%';
    }

    if (disabled) {
      this.disable();
    }
  }

  /**
   * Disable an input
   */
  disable() {
    addClass(this.el, cls.DISABLED);
  }

  /**
   * Enable an input
   */
  enable() {
    removeClass(this.el, cls.DISABLED);
  }

  /**
   * Open an input
   */
  open() {
    addClass(this.el, cls.OPEN);
  }

  /**
   * Close an input
   */
  close() {
    removeClass(this.el, cls.OPEN);
  }

  /**
   * Focus
   */
  focus() {
    this.el.focus();
  }

  /**
   * Change the text in the placeholder
   * @param {Item} item - selected Item
   */
  changeText(item) {
    if (item) {
      this.placeholderEl.textContent = item.getLabel();
    } else {
      this.placeholderEl.textContent = this.placeholderText;
    }
  }

  /**
   * Append the element to the container
   * @param {HTMLElement} container - container element
   */
  appendToContainer(container) {
    container.appendChild(this.el);
  }

  /**
   * Destroy an input
   */
  destroy() {
    removeElement(this.el);
    this.el = this.placeholderEl = null;
  }
}
