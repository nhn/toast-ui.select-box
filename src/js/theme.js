/**
 * @fileoverview Theme
 */

import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';
import removeElement from 'tui-code-snippet/domUtil/removeElement';
import isArray from 'tui-code-snippet/type/isArray';
import isBoolean from 'tui-code-snippet/type/isBoolean';
import isString from 'tui-code-snippet/type/isString';
import { transform, getSelector } from './utils';
import { cls } from './constants';
import baseTheme from './themeConfig';

/**
 * @class
 * @ignore
 * @param {object} customTheme - theme object for custom style
 * @param {HTMLElement|string} container - container element or selector
 */
export default class Theme {
  constructor(customTheme, container) {
    this.containerSelector = getSelector(container);
    this.cssString = this.buildAll(transform(customTheme));
    this.styleEl = this.createStyleElement();

    document.getElementsByTagName('head')[0].appendChild(this.styleEl);
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
   * Build css strings for Input
   * @param {object} theme - theme object
   * @return {string}
   * @private
   */
  buildInput(theme) {
    theme.placeholder = {};
    if (theme.height) {
      theme.placeholder.lineHeight = theme.height;
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
      theme.lineHeight = theme.height;
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
      theme.lineHeight = theme.height;
    }
    if (theme.selected) {
      const base = transform(baseTheme);

      theme.selected = { ...base.item.selected, ...theme.selected };
      theme.disabled = { ...base.item.disabled, ...theme.disabled };
      theme.highlighted = { ...base.item.highlighted, ...theme.highlighted };
    }

    return (
      this.buildCssString(cls.ITEM, theme) +
      this.buildCssString([cls.ITEM, cls.SELECTED], theme.selected) +
      this.buildCssString([cls.ITEM, cls.DISABLED], theme.disabled) +
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
