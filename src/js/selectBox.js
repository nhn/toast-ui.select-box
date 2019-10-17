/**
 * @fileoverview SelectBox
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import isEmpty from 'tui-code-snippet/type/isEmpty';
import isHTMLNode from 'tui-code-snippet/type/isHTMLNode';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import closest from 'tui-code-snippet/domUtil/closest';
import on from 'tui-code-snippet/domEvent/on';
import off from 'tui-code-snippet/domEvent/off';
import preventDefault from 'tui-code-snippet/domEvent/preventDefault';
import getTarget from 'tui-code-snippet/domEvent/getTarget';
import { createElement, identifyKey } from './utils';
import { cls } from './constants';
import Input from './input';
import Dropdown from './dropdown';
import Theme from './theme';

/**
 * @class
 * @param {HTMLElement|string} container - container element or selector
 * @param {object} options - options
 *   @param {string} [options.placeholder] - placeholder for an input
 *   @param {array<object>} options.data - data for ItemGroups and Items
 *   @param {boolean} [options.disabled=false] - whether an Item should be disabled or not
 *   @param {boolean} [options.autofocus=false] - whether a selectbox should get focus when th page loads
 *   @param {boolean} [options.autoclose=true] - whether a selectbox should close after selection
 *   @param {object} [options.theme] - theme object for custom style
 */
export default class SelectBox {
  constructor(
    container,
    { placeholder = '', disabled = false, autofocus = false, autoclose = true, theme, ...options }
  ) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this.el = createElement('div', '', { className: cls.SELECT_BOX });

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
     * @type {boolean}
     * @private
     */
    this.opened = false;

    /**
     * @type {boolean}
     * @private
     */
    this.diabled = false;

    /**
     * @type {boolean}
     */
    this.autoclose = autoclose;

    /**
     * @type {Theme}
     * @private
     */
    this.theme = isEmpty(theme) ? null : new Theme(theme, container);

    this.initialize({ placeholder, disabled, autofocus });
    this.appendToContainer(container);
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

    if (options.disabled) {
      this.disable();
    }

    this.bindEvents(options.autofocus);

    this.input.appendToContainer(this.el);
    this.dropdown.appendToContainer(this.el);
  }

  /**
   * Bind events
   * @private
   */
  bindEvents(autofocus) {
    if (autofocus) {
      on(window, 'load', () => {
        this.input.focus();
      });
    }
    on(document, 'click', ev => {
      const target = getTarget(ev);
      if (!closest(target, `.${cls.SELECT_BOX}`)) {
        this.close();
      }
    });
    on(this.el, 'click', ev => this.handleClick(ev, cls));
    on(this.el, 'mouseover', ev => this.handleMouseover(ev, cls));
    on(this.el, 'keydown', ev => this.handleKeydown(ev, cls));
  }

  /**
   * Unbind events
   * @private
   */
  unbindEvents() {
    off(window, 'load');
    off(document, 'click');
    off(this.el, 'click mouseover keydown');
  }

  /**
   * Handle click events
   * @param {Event} ev - an event
   * @param {object} cls - cls
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
   * @param {object} cls - cls
   * @private
   */
  handleMouseover(ev, { ITEM }) {
    const target = getTarget(ev);
    const itemEl = closest(target, `.${ITEM}`);

    if (itemEl) {
      this.dropdown.highlight(itemEl.getAttribute('data-value'));
    }
  }

  /**
   * Handle keydown events
   * @param {Event} ev - an event
   * @param {object} cls - cls
   * @private
   */
  handleKeydown(ev, { INPUT, ITEM }) {
    const target = getTarget(ev);
    const key = identifyKey(ev);
    const keys = ['arrowUp', 'arrowDown', 'space', 'enter', 'escape'];

    if (key === 'tab') {
      this.close();
    } else if (keys.indexOf(key) > -1) {
      preventDefault(ev);

      const itemEl = closest(target, `.${ITEM}`);

      if (key === 'escape') {
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
    const index = highlightedItem ? highlightedItem.getIndex() : -1;

    switch (key) {
      case 'arrowUp':
        this.dropdown.highlight(this.getValidIndex(index - 1));
        break;
      case 'arrowDown':
        this.dropdown.highlight(this.getValidIndex(index + 1));
        break;
      case 'enter':
      case 'space':
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
   * @return {number}
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
   * If select an Item that is already selected, return null
   * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
   * @return {Item} - selected Item.
   */
  select(value) {
    let selectedItem = null;

    if (!this.disabled) {
      selectedItem = this.dropdown.select(value);

      if (selectedItem) {
        this.input.changeText(selectedItem);
        if (this.autoclose) {
          this.close();
        }
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
   * @return {array<Item>}
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
    this.unbindEvents();

    this.input.destroy();
    this.dropdown.destroy();
    if (this.theme) {
      this.theme.destroy();
    }

    removeElement(this.el);
    this.container = this.el = this.input = this.dropdown = this.theme = null;
  }
}
