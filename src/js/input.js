/**
 * @fileoverview Input
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import addClass from 'tui-code-snippet/domUtil/addClass';
import removeClass from 'tui-code-snippet/domUtil/removeClass';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { classNames } from './constants';

/**
 * @class
 * @ignore
 * @param {object} options - options
 *   @param {string} [options.placeholder] - placeholder for a select box
 *   @param {string} [options.disabled] - whether an input should be disabled or not
 */
export default class Input {
  constructor({ placeholder, disabled }) {
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
    this.el = this.createElement();

    /**
     * @type {HTMLElement}
     * @private
     */
    this.placeholderEl = this.createPlaceholderElement(this.placeholderText);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.iconEl = this.createIconElement();

    this.initialize(disabled);
  }

  /**
   * Create a li element
   * @return {HTMLElement}
   * @private
   */
  createElement() {
    const el = document.createElement('div');
    el.className = classNames.INPUT;
    el.tabIndex = 0;

    return el;
  }

  /**
   * Create a placeholder element
   * @return {HTMLElement}
   * @private
   */
  createPlaceholderElement(text) {
    const placeholderEl = document.createElement('p');
    placeholderEl.innerText = text;
    placeholderEl.className = classNames.PLACEHOLDER;

    this.el.appendChild(placeholderEl);

    return placeholderEl;
  }

  /**
   * Create an icon element
   * @return {HTMLElement}
   * @private
   */
  createIconElement() {
    const iconEl = document.createElement('span');
    iconEl.className = classNames.ICON;
    iconEl.innerText = 'select';

    this.el.appendChild(iconEl);

    return iconEl;
  }

  /**
   * Initialize
   * @private
   */
  initialize(disabled) {
    if (disabled) {
      this.disable();
    }
  }

  /**
   * Disable an input
   */
  disable() {
    addClass(this.el, classNames.DISABLED);
  }

  /**
   * Enable an input
   */
  enable() {
    removeClass(this.el, classNames.DISABLED);
  }

  /**
   * Open an input
   */
  open() {
    addClass(this.el, classNames.OPEN);
  }

  /**
   * Close an input
   */
  close() {
    removeClass(this.el, classNames.OPEN);
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
      this.placeholderEl.innerText = item.getLabel();
    } else {
      this.placeholderEl.innerHTML = this.placeholderText;
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
    this.el = this.placeholderEl = this.iconEl = null;
  }
}
