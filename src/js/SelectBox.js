/**
 * @fileoverview SelectBox
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isHTMLNode from 'tui-code-snippet/type/isHTMLNode';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import closest from 'tui-code-snippet/domUtil/closest';
import on from 'tui-code-snippet/domEvent/on';
import off from 'tui-code-snippet/domEvent/off';
import preventDefault from 'tui-code-snippet/domEvent/preventDefault';
import getTarget from 'tui-code-snippet/domEvent/getTarget';
import { identifyKey } from './utils';
import { CSS_PREFIX, OPTION_CLASS_NAME, INPUT_CLASS_NAME } from './statics';
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
   *   @param {boolean} [options.autofocus=false] - whether a selectbox should get focus when th page loads
   */
  constructor(container, { placeholder = '', disabled = false, autofocus = false, ...options }) {
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
    this.input = new Input({ placeholder, disabled });

    /**
     * @type {Dropdown}
     * @private
     */
    this.dropdown = new Dropdown({ placeholder, disabled, ...options });

    /**
     * whether a dropdown list open
     * @type {boolean}
     * @private
     */
    this.opened = false;

    /**
     * whether a selectbox is disabled
     * @type {boolean}
     * @private
     */
    this.diabled = false;

    this.initialize({ placeholder, disabled, autofocus });
    this.container.appendChild(this.el);
  }

  /**
   * Initialize
   * @private
   */
  initialize(options) {
    this.appendElements();

    if (!options.placeholder) {
      this.select(0);
    }

    if (options.autofocus) {
      window.onload = () => {
        this.input.focus();
      };
    }

    this.changeDisabled(options.disabled);

    const classNames = {
      input: `.${INPUT_CLASS_NAME}`,
      option: `.${OPTION_CLASS_NAME}`
    };
    on(document, 'click', ev => {
      const target = getTarget(ev);
      if (!closest(target, classNames.input)) {
        this.close();
      }
    });
    on(this.el, 'click', ev => this.handleClick(ev, classNames));
    on(this.el, 'mouseover', ev => this.handleMouseover(ev, classNames));
    on(this.el, 'keydown', ev => this.handleKeydown(ev, classNames));
  }

  /**
   * Append input, dropdown, and select
   * @private
   */
  appendElements() {
    this.el.appendChild(this.input.el);
    this.el.appendChild(this.dropdown.el);
    this.el.appendChild(this.dropdown.nativeEl);
  }

  /**
   * Make disable or enable a select box
   * @param {boolean} disabled - if true, a select box is disabled. if false, a select box is enabled.
   * @private
   */
  changeDisabled(disabled) {
    if (this.disabled !== disabled) {
      this.disabled = disabled;
      this.input.changeDisabled(disabled);
      this.dropdown.changeDisabled(disabled);
    }
  }

  /**
   * Handle click events
   * @param {Event} ev - an event
   * @param {object} classNames - classNames
   * @private
   */
  handleClick(ev, classNames) {
    const target = getTarget(ev);
    const optionEl = closest(target, classNames.option);

    if (optionEl) {
      this.select(optionEl.getAttribute('data-value'));
    } else if (closest(target, classNames.input)) {
      this.toggle();
    }
  }

  /**
   * Handle mouseover events
   * @param {Event} ev - an event
   * @param {object} classNames - classNames
   * @private
   */
  handleMouseover(ev, { option }) {
    const target = getTarget(ev);
    const optionEl = closest(target, option);

    if (optionEl) {
      const highlightingOption = this.dropdown.getOption(optionEl.getAttribute('data-value'));
      this.dropdown.highlight(highlightingOption.getIndex());
    }
  }

  /**
   * Handle keydown events
   * @param {Event} ev - an event
   * @param {object} classNames - classNames
   * @private
   */
  handleKeydown(ev, classNames) {
    const target = getTarget(ev);
    const key = identifyKey(ev);
    const optionEl = closest(target, classNames.option);

    if (key === 'Escape') {
      this.close();
      this.input.focus();
    } else if (optionEl) {
      preventDefault(ev);
      this.moveHighlightedOption(key, optionEl);
    } else if (closest(target, classNames.input)) {
      preventDefault(ev);
      this.openDropdownByKeydown(target, key);
    }
  }

  /**
   * Use keyboard to open a dropdown list
   * @param {HTMLElement} target - a highlighted option
   * @param {string} key - key pressed by the user
   */
  openDropdownByKeydown(target, key) {
    const keys = ['ArrowUp', 'ArrowDown', ' ', 'Enter'];
    if (keys.indexOf(key) > -1) {
      if (this.opened) {
        this.moveHighlightedOption(key);
      } else {
        this.open();
      }
    }
  }

  /**
   * Use arrow keys to move a highlighted option
   * @param {string} key - key pressed by the user
   * @param {HTMLElement} [optionEl] - an option element
   */
  moveHighlightedOption(key, optionEl) {
    const highlightedOption = this.dropdown.getHighlightedOption();
    let index = -1;
    if (highlightedOption) {
      index = highlightedOption.getIndex();
    }

    switch (key) {
      case 'ArrowUp':
        this.dropdown.highlight(this.getValidIndex(index - 1));
        break;
      case 'ArrowDown':
        this.dropdown.highlight(this.getValidIndex(index + 1));
        break;
      case 'Enter':
      case ' ':
        this.select(optionEl.getAttribute('data-value'));
        this.close();
        this.input.focus();
        break;
      default:
        break;
    }
  }

  getValidIndex(index) {
    return Math.min(Math.max(index, 0), this.dropdown.getOptionLength() - 1);
  }

  /**
   * Disable a select box
   */
  disable() {
    this.changeDisabled(true);
  }

  /**
   * Enable a select box
   */
  enable() {
    this.changeDisabled(false);
  }

  /**
   * Open a dropdown list
   */
  open() {
    if (!this.opened) {
      this.opened = true;
      this.dropdown.changeOpened(true);
      this.input.changeOpened(true);
    }
  }

  /**
   * Close a dropdown list
   */
  close() {
    if (this.opened) {
      this.opened = false;
      this.dropdown.changeOpened(false);
      this.input.changeOpened(false);
    }
  }

  /**
   * Toggle a dropdown list
   */
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Select an option.
   * If a value is not valid, automatically select the first option.
   * @param {string|number} value - if string, find an option by its value. if number, find an option by its index.
   * @return {Option} - selected option
   */
  select(value) {
    const selectedOption = this.dropdown.select(value);
    this.input.changeText(selectedOption);

    return selectedOption;
  }

  /**
   * Deselect an option
   */
  deselect() {
    this.dropdown.deselect();
    this.input.changeText();
  }

  /**
   * Return the selected option
   * @return {Option}
   */
  getSelectedOption() {
    return this.dropdown.getSelectedOption();
  }

  /**
   * Get an option by its index or value
   * @param {number|string} value - if string, the option's value. if number, the option's index.
   * @return {Option}
   */
  getOption(value) {
    return this.dropdown.getOption(value);
  }

  /**
   * Destory an optgroup
   */
  destroy() {
    this.input.destroy();
    this.dropdown.destroy();

    off(document, 'click');
    off(this.el, 'click mouseover keydown');
    removeElement(this.el);
    this.container = this.el = null;
  }
}
