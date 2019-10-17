/**
 * @fileoverview SelectBox
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import CustomEvents from 'tui-code-snippet/customEvents/customEvents';
import on from 'tui-code-snippet/domEvent/on';
import off from 'tui-code-snippet/domEvent/off';
import preventDefault from 'tui-code-snippet/domEvent/preventDefault';
import getTarget from 'tui-code-snippet/domEvent/getTarget';
import closest from 'tui-code-snippet/domUtil/closest';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import isObject from 'tui-code-snippet/type/isObject';
import isExisty from 'tui-code-snippet/type/isExisty';
import isHTMLNode from 'tui-code-snippet/type/isHTMLNode';
import { createElement, identifyKey } from './utils';
import { cls } from './constants';
import Input from './input';
import Dropdown from './dropdown';
import ItemGroup from './itemGroup';
import Item from './item';
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
class SelectBox {
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
    this.theme = isObject(theme) ? new Theme(theme, container) : null;

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
        this.pressKeyOnItem(key, itemEl);
      } else if (closest(target, `.${INPUT}`)) {
        this.pressKeyOnInput(key);
      }
    }
  }

  /**
   * Handle keydown events when it occurs on the Input
   * @param {string} key - key
   * @private
   */
  pressKeyOnInput(key) {
    if (!this.opened) {
      this.open();
    } else if (key === 'arrowUp' || key === 'arrowDown') {
      this.dropdown.moveHighlightedItem(key === 'arrowUp' ? -1 : 1);
    }
  }

  /**
   * Handle keydown events when it occurs on the Item
   * @param {string} key - key
   * @param {HTMLElement} itemEl - Item.el
   * @private
   */
  pressKeyOnItem(key, itemEl) {
    if (key === 'enter' || key === 'space') {
      this.selectByKeydown(itemEl);
    } else if (key === 'arrowUp' || key === 'arrowDown') {
      this.dropdown.moveHighlightedItem(key === 'arrowUp' ? -1 : 1);
    }
  }

  /**
   * Select an Item by space or enter
   * @param {HTMLElement} itemEl - Item.el
   * @private
   */
  selectByKeydown(itemEl) {
    this.select(itemEl.getAttribute('data-value'));
    this.close();
    this.input.focus();
  }

  /**
   * Disable a select box
   * @param {string|number|Item|ItemGroup} value - if string, find an Item by its value. if number, find an Item by its index.
   */
  disable(value) {
    if (!isExisty(value)) {
      this.disabled = true;
      this.input.disable();
      this.dropdown.disable();

      this.fire('disable', { target: this });
    } else if (value instanceof Item || value instanceof ItemGroup) {
      value.disable();
      this.fire('disable', { target: value });
    } else {
      const disabledItem = this.dropdown.getItem(value);
      if (disabledItem) {
        disabledItem.disable();
        this.fire('disable', { target: disabledItem });
      }
    }
  }

  /**
   * Enable a select box
   * @param {string|number|Item|ItemGroup} value - if string, find an Item by its value. if number, find an Item by its index.
   */
  enable(value) {
    if (!isExisty(value)) {
      this.disabled = false;
      this.input.enable();
      this.dropdown.enable();

      this.fire('enable', { target: this });
    } else if (value instanceof Item || value instanceof ItemGroup) {
      value.enable();
      this.fire('enable', { target: value });
    } else {
      const disabledItem = this.dropdown.getItem(value);
      if (disabledItem) {
        disabledItem.enable();
        this.fire('enable', { target: disabledItem });
      }
    }
  }

  /**
   * Open a dropdown list
   */
  open() {
    if (!this.disabled) {
      this.opened = true;
      this.dropdown.open();
      this.input.open();

      this.fire('open');
    }
  }

  /**
   * Close a dropdown list
   */
  close() {
    this.opened = false;
    this.dropdown.close();
    this.input.close();

    this.fire('close');
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
    const prevSelectedItem = this.getSelectedItem();

    if (!this.disabled) {
      selectedItem = this.dropdown.select(value);

      if (selectedItem) {
        this.input.changeText(selectedItem);
        if (this.autoclose) {
          this.close();
        }

        this.fire('select', {
          target: selectedItem
        });
        if (prevSelectedItem !== selectedItem) {
          this.fire('change', {
            prev: prevSelectedItem,
            curr: selectedItem
          });
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
   * Get all Items that pass the test implemented by the provided function
   * If filter function is not passed, it returns all Items
   * @param {function} fn - filter function
   * @return {array<Item>}
   */
  getItems(fn) {
    return this.dropdown.getItems(fn);
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
   * Get all ItemGroups that pass the test implemented by the provided function
   * If filter function is not passed, it returns all ItemGroups
   * @param {function} fn - filter function
   * @return {array<ItemGroup>}
   */
  getItemGroups(fn) {
    return this.dropdown.getItemGroups(fn);
  }

  /**
   * Get an ItemGroup by its index
   * @param {number} index - groupIndex of the ItemGroup
   * @return {array<ItemGroup>}
   */
  getItemGroup(index) {
    return this.dropdown.getItemGroup(index);
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

CustomEvents.mixin(SelectBox);

export default SelectBox;
