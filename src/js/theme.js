/**
 * @fileoverview Theme
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */

import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import isArray from 'tui-code-snippet/type/isArray';
import isBoolean from 'tui-code-snippet/type/isBoolean';
import isString from 'tui-code-snippet/type/isString';
import { transform } from './utils';
import { cls } from './constants';

/**
 * @class
 * @ignore
 * @param {object} customTheme - theme object for custom style
 * @param {HTMLElement|string} container - container element or selector
 */
export default class Theme {
  constructor(customTheme, container) {
    this.containerSelector = this.getSelector(container);
    this.cssString = this.buildAll(transform(customTheme));
    this.styleEl = this.createStyleElement();

    document.getElementsByTagName('head')[0].appendChild(this.styleEl);
  }

  /**
   * Get selectors for an element
   * @param {HTMLElement} el - element
   * @return {string}
   * @private
   */
  getSelector(el) {
    if (isString(el)) {
      return el;
    }

    if (el.id) {
      return `#${el.id}`;
    }

    const className = `.${el.className.replace(/ /g, '.')}`;
    if (className) {
      const elems = document.querySelectorAll(className);

      if (elems.length === 1) {
        return className;
      }
    }

    const tagName = el.tagName.toLowerCase();

    return `${tagName}${className}`;
  }

  /**
   * Create a style element
   * @return {HTMLElement}
   * @private
   */
  createStyleElement() {
    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';

    if (styleEl.styleSheet) {
      styleEl.styleSheet.cssText = this.cssString;
    } else {
      styleEl.appendChild(document.createTextNode(this.cssString));
    }

    return styleEl;
  }

  /**
   * Build css strings for Input, Dropdown, ItemGroup, and Item.
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildAll(theme) {
    const exclude = { border: '', background: '' };

    return (
      this.buildInput({ ...theme.common, ...theme.input }) +
      this.buildDropdown({ ...theme.common, borderTop: '0', ...theme.dropdown, height: '' }) +
      this.buildItemGroup(
        theme.itemGroup
          ? { ...theme.common, ...exclude, ...theme.itemGroup.label }
          : { ...theme.common, ...exclude }
      ) +
      this.buildItem(
        theme.itemGroup
          ? { ...theme.common, ...exclude, ...theme.item, inItemGroup: theme.itemGroup.items }
          : { ...theme.common, ...exclude, ...theme.item }
      )
    );
  }

  /**
   * Calculate a line height to align vertically
   * @param {string} height - height value with an unit (ex. '29px')
   * @return {string}
   * @private
   */
  getLineHeight(height) {
    let result;

    if (height) {
      const lineHeight = parseFloat(height);
      const unit = height.replace(lineHeight, '');
      result = lineHeight + unit;
    }

    return result;
  }

  /**
   * Build css strings for Input
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildInput(theme) {
    theme.placeholder = {};
    if (theme.height) {
      theme.placeholder.lineHeight = this.getLineHeight(theme.height);
    }
    if (isBoolean(theme.showIcon) && !theme.showIcon) {
      theme.icon = { display: 'none' };
      theme.placeholder.width = '100%';
    }

    return (
      this.buildCssString(cls.INPUT, theme) +
      this.buildCssString([cls.INPUT, cls.OPEN], theme.open) +
      this.buildCssString([cls.INPUT, cls.DISABLED], theme.disabled) +
      this.buildCssString(cls.PLACEHOLDER, theme.placeholder) +
      this.buildCssString(cls.ICON, theme.icon)
    );
  }

  /**
   * Build css strings for Dropdown
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildDropdown(theme) {
    return this.buildCssString(cls.DROPDOWN, theme);
  }

  /**
   * Build css strings for ItemGroup
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildItemGroup(theme) {
    if (theme.height) {
      theme.lineHeight = this.getLineHeight(theme.height);
    }

    return (
      this.buildCssString(cls.ITEM_GROUP_LABEL, theme) +
      this.buildCssString([cls.ITEM_GROUP_LABEL, cls.DISABLED], theme.disabled)
    );
  }

  /**
   * Build css strings for Item
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildItem(theme) {
    if (theme.height) {
      theme.lineHeight = this.getLineHeight(theme.height);
    }
    if (theme.inItemGroup && !theme.inItemGroup.paddingLeft) {
      theme.inItemGroup.paddingLeft = '8px';
    }

    return (
      this.buildCssString(cls.ITEM, theme) +
      this.buildCssString([cls.ITEM, cls.DISABLED], theme.disabled) +
      this.buildCssString([cls.ITEM, cls.SELECTED], theme.selected) +
      this.buildCssString([cls.ITEM, cls.HIGHLIGHT], theme.highlighted) +
      this.buildCssString(`${cls.ITEM_GROUP}>.${cls.ITEM}`, theme.inItemGroup)
    );
  }

  /**
   * Build css strings
   * @param {string} className - className
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildCssString(className, theme) {
    if (isArray(className)) {
      className = className.join('.');
    }
    className = `.${className}`;

    let cssString = '';
    forEachOwnProperties(theme, (value, key) => {
      if (isString(value) && value) {
        key = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        cssString += `${key}:${value};`;
      }
    });

    return cssString ? `${this.containerSelector} ${className}{${cssString}}` : '';
  }

  /**
   * Destory a theme
   */
  destroy() {
    removeElement(this.styleEl);
    this.styleEl = null;
  }
}
