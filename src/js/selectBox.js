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
import { classNames } from './constants';
import Input from './input';
import Dropdown from './dropdown';

/**
 * @class
 * @param {HTMLElement|string} container - container element or selector
 * @param {object} options - options
 *   @param {string} [options.placeholder] - placeholder for an input
 *   @param {array<object>} options.data - data for ItemGroups and Items
 *   @param {boolean} [options.disabled=false] - whether an Item should be disabled or not
 *   @param {boolean} [options.autofocus=false] - whether a selectbox should get focus when th page loads
 */
export default class SelectBox {
  constructor(container, { placeholder = '', disabled = false, autofocus = false, ...options }) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = this.createElement();

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
    this.appendToContainer(container);
  }

  /**
   * Create div element
   * @return {HTMLElement}
   * @private
   */
  createElement() {
    const el = document.createElement('div');
    el.className = classNames.SELECT_BOX;

    return el;
  }

  /**
   * Append the select box element to the container
   * @param {HTMLElement|string} container - container element or selector
   * @private
   */
  appendToContainer(container) {
    const containerEl = isHTMLNode(container) ? container : document.querySelector(container);
    containerEl.appendChild(this.el);
  }

  /**
   * Initialize
   * @param {object} options - options
   * @private
   */
  initialize(options) {
    const selectedItem = this.getSelectedItem();
    if (selectedItem) {
      this.input.changeText(selectedItem);
    } else if (!options.placeholder) {
      this.select(0);
    }

    if (options.autofocus) {
      on(window, 'load', () => {
        this.input.focus();
      });
    }

    if (options.disabled) {
      this.disable();
    }

    on(document, 'click', ev => {
      const target = getTarget(ev);
      if (!closest(target, `.${classNames.INPUT}`)) {
        this.close();
      }
    });
    on(this.el, 'click', ev => this.handleClick(ev, classNames));
    on(this.el, 'mouseover', ev => this.handleMouseover(ev, classNames));
    on(this.el, 'keydown', ev => this.handleKeydown(ev, classNames));

    this.input.appendToContainer(this.el);
    this.dropdown.appendToContainer(this.el);
  }

  /**
   * Handle click events
   * @param {Event} ev - an event
   * @param {object} classNames - classNames
   * @private
   */
  handleClick(ev, { INPUT, ITEM }) {
    const target = getTarget(ev);
    const itemEl = closest(target, `.${ITEM}`);

    if (itemEl) {
      this.select(itemEl.getAttribute('data-value'));
    } else if (closest(target, `.${INPUT}`)) {
      this.toggle();
    }
  }

  /**
   * Handle mouseover events
   * @param {Event} ev - an event
   * @param {object} classNames - classNames
   * @private
   */
  handleMouseover(ev, { ITEM }) {
    const target = getTarget(ev);
    const itemEl = closest(target, `.${ITEM}`);

    if (itemEl) {
      const highlightedItem = this.dropdown.getItem(itemEl.getAttribute('data-value'));
      this.dropdown.highlight(highlightedItem.getIndex());
    }
  }

  /**
   * Handle keydown events
   * @param {Event} ev - an event
   * @param {object} classNames - classNames
   * @private
   */
  handleKeydown(ev, { INPUT, ITEM }) {
    const target = getTarget(ev);
    const key = identifyKey(ev);
    const keys = ['ArrowUp', 'ArrowDown', ' ', 'Enter', 'Escape'];

    if (key === 'Tab') {
      this.close();
    } else if (keys.indexOf(key) > -1) {
      preventDefault(ev);

      const itemEl = closest(target, `.${ITEM}`);

      if (key === 'Escape') {
        this.close();
        this.input.focus();
      } else if (itemEl) {
        this.moveHighlightedItem(key, itemEl);
      } else if (closest(target, `.${INPUT}`)) {
        this.openDropdownByKeydown(key);
      }
    }
  }

  /**
   * Use keyboard to open a dropdown list
   * @param {string} key - key pressed by the user
   * @private
   */
  openDropdownByKeydown(key) {
    if (this.opened) {
      this.moveHighlightedItem(key);
    } else {
      this.open();
    }
  }

  /**
   * Use arrow keys to move a highlighted Item
   * @param {string} key - key pressed by the user
   * @param {HTMLElement} [itemEl] - an Item element
   * @private
   */
  moveHighlightedItem(key, itemEl) {
    const highlightedItem = this.dropdown.getHighlightedItem();
    let index = -1;
    if (highlightedItem) {
      index = highlightedItem.getIndex();
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
        this.select(itemEl.getAttribute('data-value'));
        this.close();
        this.input.focus();
        break;
      default:
        break;
    }
  }

  /**
   * Get valid index (from 0 to length - 1)
   * @param {number} index - Item's index
   * @returns {number}
   * @private
   */
  getValidIndex(index) {
    return Math.min(Math.max(index, 0), this.dropdown.getItemLength() - 1);
  }

  /**
   * Disable a select box
   */
  disable() {
    this.disabled = true;
    this.input.disable();
    this.dropdown.disable();
  }

  /**
   * Enable a select box
   */
  enable() {
    this.disabled = false;
    this.input.enable();
    this.dropdown.enable();
  }

  /**
   * Open a dropdown list
   */
  open() {
    if (!this.disabled) {
      this.opened = true;
      this.dropdown.open();
      this.input.open();
    }
  }

  /**
   * Close a dropdown list
   */
  close() {
    this.opened = false;
    this.dropdown.close();
    this.input.close();
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
   * Select an Item
   * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
   * @return {Item} - selected Item
   */
  select(value) {
    let selectedItem = null;

    if (!this.disabled) {
      selectedItem = this.dropdown.select(value);
      if (selectedItem) {
        this.input.changeText(selectedItem);
      }
    }

    return selectedItem;
  }

  /**
   * Deselect an Item
   * If selectBox has a placeholder, the input is a placeholder. If no placeholder, ths input is empty.
   */
  deselect() {
    if (!this.disabled) {
      this.dropdown.deselect();
      this.input.changeText();
    }
  }

  /**
   * Return the selected Item
   * @return {Item}
   */
  getSelectedItem() {
    return this.dropdown.getSelectedItem();
  }

  /**
   * Get all Items
   * @returns {array<Item>}
   */
  getItems() {
    return this.dropdown.getItems();
  }

  /**
   * Get an Item by its index or value
   * @param {number|string} value - if string, the Item's value. if number, the Item's index.
   * @return {Item}
   */
  getItem(value) {
    return this.dropdown.getItem(value);
  }

  /**
   * Destory a select box
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
