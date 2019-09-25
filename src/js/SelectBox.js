/**
 * @fileoverview SelectBox
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isHTMLNode from 'tui-code-snippet/type/isHTMLNode';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import { CSS_PREFIX } from './statics';
import Input from './Input';
import Dropdown from './Dropdown';

/**
 * @class
 */
export default class SelectBox {
  /**
   * Create a select box
   * @constructor
   * @param {HTMLElement|string} container - container element or selector
   * @param {object} options - options
   *   @param {string} [options.placeholder] - placeholder for an input
   *   @param {array<object>} options.data - data for optgroups and options
   *   @param {boolean} [options.disabled=false] - whether an option should be disabled or not
   *   @param {boolean} [options.required=false] - whether an option should be required or not
   *   @param {name} [options.name] - name of the select
   */
  constructor(container, { placeholder, ...options }) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.container = isHTMLNode(container) ? container : document.querySelector(container);

    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = document.createElement('div');
    this.el.className = CSS_PREFIX;

    /**
     * @type {Input}
     * @private
     */
    this.input = new Input({ placeholder });

    /**
     * @type {Dropdown}
     * @private
     */
    this.dropdown = new Dropdown(options);

    this.appendElements();
    this.container.appendChild(this.el);
  }

  appendElements() {
    this.el.appendChild(this.input.el);
    this.el.appendChild(this.dropdown.el);
    this.el.appendChild(this.dropdown.nativeEl);
  }

  /**
   * Destory an optgroup
   */
  destroy() {
    this.input.destroy();
    this.dropdown.destroy();
    removeElement(this.el);
    this.container = this.el = null;
  }
}
