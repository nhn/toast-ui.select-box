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
import sendHostname from 'tui-code-snippet/request/sendHostname';
import { createElement } from './utils';
import { identifyKey } from './keyEventUtils';
import { cls } from './constants';
import Input from './input';
import Dropdown from './dropdown';
import ItemGroup from './itemGroup';
import Item from './item';
import Theme from './theme';

/**
 * @class
 * @param {HTMLElement|string} container - container element or selector
 * @mixes CustomEvents
 * @param {object} options
 *   @param {array<itemData|itemGroupData>} options.data - array of {@link itemData} and {@link itemGroupData}
 *   @param {string} [options.placeholder] - placeholder for an input
 *   @param {boolean} [options.disabled] - whether an Item should be disabled or not
 *   @param {boolean} [options.autofocus] - whether a selectbox should get focus when the select box appends to the container
 *   @param {boolean} [options.autoclose] - whether a selectbox should close after selection
 *   @param {boolean} [options.showIcon] - whether an arrow icon in the input should be shown
 *   @param {object} [options.theme] - {@link themeConfig} for custom style
 *   @param {boolean} [options.usageStatistics] - whether send hostname to google analytics. If you don't want to send the hostname, please set to false.
 * @example
 * import SelectBox from '@toast-ui/select-box';
 * // or const SelectBox = require('@toast-ui/select-box');
 * // or const SelectBox = tui.SelectBox;
 *
 * const selectBox = new SelectBox('#select-box', {
 *   placeholder: 'Please select an option.',
 *   data: [
 *     {
 *       label: 'Fruits',
 *       data: [ { label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' } ]
 *     },
 *     { label: 'The quick brown fox jumps over the lazy dog.', value: 'none' },
 *     {
 *       label: 'Colors',
 *       data: [
 *         { label: 'Red', value: 'red' },
 *         { label: 'Yellow', value: 'yellow' },
 *         { label: 'Green', value: 'green', disabled: true },
 *         { label: 'Blue', value: 'blue', disabled: true },
 *         { label: 'Purple', value: 'purple' }
 *       ]
 *     }
 *   ],
 *   autofocus: true,
 *   showIcon: false,
 *   theme: {
 *     'common.border': '1px solid black',
 *     'common.color': 'black',
 *     'item.highlighted.background': 'yellow'
 *   }
 * });
 */

/**
 * SelectBox provides some custom events: ({@link SelectBox#event-open open}, {@link SelectBox#event-close close}, {@link SelectBox#event-disable disable}, {@link SelectBox#event-enable enable}, {@link SelectBox#event-change change}).
 * You can bind event handlers by {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#on selectBox.on(eventName, handler)} and unbind by {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents#off selectBox.off(eventName, handler)}.
 * Refer to the {@link https://nhn.github.io/tui.code-snippet/latest/CustomEvents CustomEvents} document at {@link https://github.com/nhn/tui.code-snippet tui-code-snippet} to know how to bind, and unbind custom events.
 * The example using custom events can be found {@link tutorial-example03-custom-events here}.
 * @typedef {class} CustomEvents
 * @example
 * // bind 'change' event
 * selectBox.on('change', ev => {
 *   console.log(`selected item is changed from ${ev.prev.getLabel()} to ${ev.curr.getLabel()}.`);
 * });
 *
 * // bind 'disable' and enable event
 * const print = ev => {
 *   let target = '';
 *   if (ev.target instanceof SelectBox) {
 *     target = 'Select box';
 *   } else {
 *     target = ev.target.getLabel();
 *   }
 *   console.log(`${target} is ${ev.type}.`);
 * }
 * selectBox.on({
 *   disable: print,
 *   enable: print
 * });
 *
 * // unbind change event
 * selectBox.off('change');
 *
 * // unbind disable event
 * selectBox.off(disable, print);
 *
 * // unbind all events
 * selectBox.off();
 */

/**
 * Data of an {@link Item item}.
 * It is used for creating a {@link SelectBox}.
 * @typedef {object} itemData - data for {@link Item item}
 * @property {string} label - label to be displayed
 * @property {string} value - value of an item
 * @property {boolean} [disabled=false] - whether an item should be disabled or not
 * @property {boolean} [selected=false] - whether an item should be pre-selected or not
 * @example
 * const itemData = {
 *   label: 'disabled item',
 *   value: '0',
 *   disabled: true,
 *   selected: false
 * };
 */

/**
 * Data of an {@link ItemGroup item group}.
 * It is used for creating a {@link SelectBox}.
 * ItemGroup supports only 1 level choices, so it does not work to add item groups in the item group.
 * The example using item groups can be found {@link tutorial-example01-basic here}.
 * @typedef {object} itemGroupData - data for {@link ItemGroup item group}
 * @property {string} label - label to be displayed
 * @property {array} data - {@link itemData data for item}
 * @property {boolean} [disabled=false] - whether an item group should be disabled or not
 * @example
 * const itemGroupData = {
 *   label: 'disabled items',
 *   data: [
 *     { label: 'disable', value: 'disable' },
 *     { label: 'none', value: '0' }
 *   ],
 *   disabled: true
 * };
 */
class SelectBox {
  constructor(
    container,
    {
      data,
      placeholder = '',
      disabled = false,
      autofocus = false,
      autoclose = true,
      showIcon = true,
      theme,
      usageStatistics = true
    }
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
    this.input = new Input({ placeholder, disabled, showIcon });

    /**
     * @type {Dropdown}
     * @private
     */
    this.dropdown = new Dropdown({ placeholder, disabled, data });

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

    this.initialize({ placeholder, disabled });
    this.appendToContainer(container);

    if (autofocus) {
      this.focus();
    }

    if (usageStatistics) {
      sendHostname('select-box', 'UA-129987462-1');
    }
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

    this.bindEvents();

    this.input.appendToContainer(this.el);
    this.dropdown.appendToContainer(this.el);
  }

  /**
   * Bind events
   * @private
   */
  bindEvents() {
    on(
      document,
      'click',
      ev => {
        const target = getTarget(ev);
        if (!closest(target, `.${cls.SELECT_BOX}`) && this.opened) {
          this.close();
        }
      },
      this
    );
    on(this.el, 'click', ev => this.handleClick(ev, cls));
    on(this.el, 'mouseover', ev => this.handleMouseover(ev, cls));
    on(this.el, 'keydown', ev => this.handleKeydown(ev, cls));
  }

  /**
   * Unbind events
   * @private
   */
  unbindEvents() {
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
    this.focus();
  }

  /**
   * Handle mouseover events
   * @param {Event} ev - an event
   * @param {object} cls - cls
   * @private
   */
  handleMouseover(ev, { ITEM }) {
    if (this.checkMousemove(ev.clientX, ev.clientY)) {
      const target = getTarget(ev);
      const itemEl = closest(target, `.${ITEM}`);

      if (itemEl) {
        this.dropdown.highlight(itemEl.getAttribute('data-value'));
      }
    }
  }

  /**
   * Check if a pointer is moved
   * @param {number} x - mouseEvent.clientX
   * @param {number} y - mouseEvent.clientY
   * @return {boolean}
   * @private
   */
  checkMousemove(x, y) {
    if (this.prevX !== x || this.prevY !== y) {
      this.prevX = x;
      this.prevY = y;

      return true;
    }

    return false;
  }

  /**
   * Handle keydown events
   * @param {Event} ev - an event
   * @param {object} classNames - cls
   * @private
   */
  handleKeydown(ev, classNames) {
    const key = identifyKey(ev);
    const closeKeys = ['tab', 'escape'];
    const activeKeys = ['arrowUp', 'arrowDown', 'space', 'enter'];

    if (closeKeys.indexOf(key) > -1 && this.opened) {
      this.close();
      if (key === 'escape') {
        this.focus();
      }
    } else if (activeKeys.indexOf(key) > -1) {
      preventDefault(ev);
      this.activateKeydown(ev, key, classNames);
    }
  }

  /**
   * Activate keydown events
   * @param {Event} ev - an event
   * @param {string} key - key pressed
   * @param {object} classNames - cls
   * @private
   */
  activateKeydown(ev, key, { ITEM, INPUT }) {
    const target = getTarget(ev);
    const itemEl = closest(target, `.${ITEM}`);

    if (key === 'escape' && this.opened) {
      this.close();
      this.focus();
    } else if (itemEl) {
      this.pressKeyOnItem(key, itemEl);
    } else if (closest(target, `.${INPUT}`)) {
      this.pressKeyOnInput(key);
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
    this.focus();
  }

  /**
   * Disable a select box, {@link ItemGroup item group} or {@link Item item}.
   * If it takes no arguments, a select box is disabled.
   * If it takes string, an item with the same value as the argument is disabled.
   * If it takes number, an item with the same index as the argument is disabled.
   * If it takes Item or ItemGroup, an argument itself is disabled.
   * @param {string|number|Item|ItemGroup} value - if string, find an Item by its value. if number, find an Item by its index.
   * @example
   * selectBox.disable(); // select box is disabled.
   * selectBox.disable(1); // second item is disabled.
   * selectBox.disable('value') // item which of value is 'value' is disabled.
   * selectBox.disable(selectBox.getSelectedItem()); // selected item is disabled.
   */
  disable(value) {
    if (!isExisty(value)) {
      this.disabled = true;
      this.input.disable();
      this.dropdown.disable();

      /**
       * Occurs when a select box, {@link ItemGroup item group} or {@link Item item} is disabled.
       * @event SelectBox#disable
       * @type {object} ev
       * @property {string} type - event name ('disable')
       * @property {SelectBox|ItemGroup|Item} target - disabled target
       * @example
       * selectBox.on('disable', ev => {
       *   console.log(ev.target);
       * });
       */
      this.fire('disable', { type: 'disable', target: this });
    } else if (value instanceof Item || value instanceof ItemGroup) {
      value.disable();
      this.fire('disable', { type: 'disable', target: value });
    } else {
      const disabledItem = this.dropdown.getItem(value);
      if (disabledItem) {
        disabledItem.disable();
        this.fire('disable', { type: 'disable', target: disabledItem });
      }
    }
  }

  /**
   * Enable a select box, {@link ItemGroup item group} or {@link Item item}.
   * If it takes no arguments, a select box is enabled.
   * If it takes string, an item with the same value as the argument is enabled.
   * If it takes number, an item with the same index as the argument is enabled.
   * If it takes Item or ItemGroup, an argument itself is enabled.
   * @param {string|number|Item|ItemGroup} value - if string, find an Item by its value. if number, find an Item by its index.
   * @example
   * selectBox.enable(); // select box is enabled.
   * selectBox.enable(1); // second item is enabled.
   * selectBox.enable('value') // item which of value is 'value' is enabled.
   * selectBox.enable(selectBox.getSelectedItem()); // selected item is enabled.
   */
  enable(value) {
    if (!isExisty(value)) {
      this.disabled = false;
      this.input.enable();
      this.dropdown.enable();

      /**
       * Occurs when a select box, {@link ItemGroup item group} or {@link Item item} is enabled.
       * @event SelectBox#enable
       * @type {object} ev
       * @property {string} type - event name ('enable')
       * @property {SelectBox|ItemGroup|Item} target - enable target
       * @example
       * selectBox.on('enable', ev => {
       *   console.log(ev.target);
       * });
       */
      this.fire('enable', { type: 'enable', target: this });
    } else if (value instanceof Item || value instanceof ItemGroup) {
      value.enable();
      this.fire('enable', { type: 'enable', target: value });
    } else {
      const disabledItem = this.dropdown.getItem(value);
      if (disabledItem) {
        disabledItem.enable();
        this.fire('enable', { type: 'enable', target: disabledItem });
      }
    }
  }

  /**
   * Open a dropdown list.
   * @example
   * selectBox.open();
   */
  open() {
    if (!this.disabled) {
      this.opened = true;
      this.dropdown.open();
      this.input.open();

      /**
       * Occurs when a select box opens.
       * @event SelectBox#open
       * @property {string} type - event name ('open')
       * @example
       * selectBox.on('open', ev => {
       *   console.log('open');
       * });
       */
      this.fire('open', { type: 'open' });
    }
  }

  /**
   * Close a dropdown list.
   * @example
   * selectBox.close();
   */
  close() {
    this.opened = false;
    this.dropdown.close();
    this.input.close();

    /**
     * Occurs when a select box closes.
     * @event SelectBox#close
     * @property {string} type - event name ('close')
     * @example
     * selectBox.on('close', ev => {
     *   console.log('close');
     * });
     */
    this.fire('close', { type: 'close' });
  }

  /**
   * Toggle a dropdown list.
   * @example
   * selectBox.toggle();
   */
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Focus to select box.
   * @example
   * selectBox.focus();
   */
  focus() {
    this.input.focus();
  }

  /**
   * Select an {@link Item item}.
   * If it takes string, an item with the same value as the argument is selected.
   * If it takes number, an item with the same index as the argument is selected.
   * If it takes Item, an argument itself is selected.
   * @param {string|number|Item} value - if string, find an Item by its value. if number, find an Item by its index.
   * @return {Item} - selected Item.
   * @example
   * selectBox.select(1); // second item is selected.
   * selectBox.select('value') // item which of value is 'value' is selected.
   */
  select(value) {
    let selectedItem = null;
    const prevSelectedItem = this.getSelectedItem();

    if (!this.disabled) {
      selectedItem = this.dropdown.select(value);

      if (selectedItem) {
        this.input.changeText(selectedItem);

        /**
         * Occurs when an {@link Item item} is selected.
         * @event SelectBox#select
         * @type {object} ev
         * @property {string} type - event name ('select')
         * @property {Item} target - selected item
         * @ignore
         * @example
         * selectBox.on('select', ev => {
         *   console.log(`${ev.target.getLabel()} is selected.`);
         * });
         */
        this.fire('select', { type: 'select', target: selectedItem });

        if (prevSelectedItem !== selectedItem) {
          /**
           * Occurs when a selected {@link Item item} is changed.
           * @event SelectBox#change
           * @type {object} ev
           * @property {string} type - event name ('change')
           * @property {Item} prev - previous selected item
           * @property {Item} curr - current selected item
           * @example
           * selectBox.on('change', ev => {
           *   console.log(`selected item is changed from ${ev.prev.getLabel()} to ${ev.curr.getLabel()}.`);
           * });
           */
          this.fire('change', {
            type: 'change',
            prev: prevSelectedItem,
            curr: selectedItem
          });
        }

        if (this.autoclose && this.opened) {
          this.close();
        }
      }
    }

    return selectedItem;
  }

  /**
   * Deselect an item.
   * If selectBox has a placeholder, the input's text is a placeholder.
   * If no placeholder, ths input is empty.
   * @example
   * selectBox.deselect();
   */
  deselect() {
    if (!this.disabled) {
      this.dropdown.deselect();
      this.input.changeText();
    }
  }

  /**
   * Return the selected {@link Item item}.
   * @return {Item}
   */
  getSelectedItem() {
    return this.dropdown.getSelectedItem();
  }

  /**
   * Get all {@link Item items} that pass the test implemented by the provided function.
   * If filter function is not passed, it returns all items.
   * @param {function} callback - callback function to filter items
   * @param {number} number - the number of items to find. If it is not passed, iterate all items.
   * @return {array<Item>}
   * @example
   * selectBox.getItems(); // all items
   * selectBox.getItems(item => {
   *  return !item.isDisabled();
   * }); // all enabled items
   */
  getItems(callback, number) {
    return this.dropdown.getItems(callback, number);
  }

  /**
   * Get an {@link Item item} by its index or value.
   * @param {number|string} value - if string, the Item's value. if number, the Item's index.
   * @return {Item}
   * @example
   * selectBox.getItem(0); // first item
   * selectBox.getItem('value') // item which of value is 'value'
   */
  getItem(value) {
    return this.dropdown.getItem(value);
  }

  /**
   * Get all {@link ItemGroup item groups} that pass the test implemented by the provided function.
   * If filter function is not passed, it returns all item groups.
   * @param {function} callback - callback function to filter item groups
   * @param {number} number - the number of items to find. If it is not passed, iterate all item groups.
   * @return {array<ItemGroup>}
   * @example
   * selectBox.getItemGroups(); // all item groups
   * selectBox.getItemGroups(itemGroup => {
   *  return !itemGroup.isDisabled();
   * }); // all enabled item groups
   */
  getItemGroups(callback, number) {
    return this.dropdown.getItemGroups(callback, number);
  }

  /**
   * Get an {@link ItemGroup item group} by its index.
   * @param {number} index - groupIndex of the ItemGroup
   * @return {ItemGroup}
   * @example
   * selectBox.getItemGroup(0); // first item group
   */
  getItemGroup(index) {
    return this.dropdown.getItemGroup(index);
  }

  /**
   * Destory a select box.
   * @example
   * selectBox.destroy();
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
