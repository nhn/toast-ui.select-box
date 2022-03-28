/**
 * @fileoverview Utility functions
 */

import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';
import isString from 'tui-code-snippet/type/isString';

/**
 * Transform an object using dot notation
 * @param {object} obj - object to transform
 * @return {object}
 */
export const transform = obj => {
  const result = {};

  forEachOwnProperties(obj, (value, prop) => {
    const keys = prop.split('.');
    let curr = result;

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        curr[key] = value;
      } else if (!curr[key]) {
        curr[key] = {};
      }
      curr = curr[key];
    });
  });

  return result;
};

/**
 * Create a HTML element
 * @param {string} tagName - tag name
 * @param {string} content - content in the element
 * @param {object} options - other properties for the element
 * @param {HTMLElement} container - parent element for the element
 * @return {HTMLElement}
 */
export const createElement = (tagName, content, options, container) => {
  const el = document.createElement(tagName);

  if (content) {
    el.textContent = content;
  }

  forEachOwnProperties(options, (value, key) => {
    if (key.indexOf('data-') > -1) {
      el.setAttribute(key, value);
    } else {
      el[key] = value;
    }
  });

  if (container) {
    container.appendChild(el);
  }

  return el;
};

/**
 * Get selectors for an element
 * @param {HTMLElement} el - element
 * @return {string}
 */
export const getSelector = el => {
  if (isString(el)) {
    return el;
  }

  if (el.id) {
    return `#${el.id}`;
  }

  const className = `.${el.className.replace(/\s+/g, '.')}`;
  if (className) {
    const elems = document.querySelectorAll(className);

    if (elems.length === 1) {
      return className;
    }
  }

  const tagName = el.tagName.toLowerCase();

  return `${tagName}${className}`;
};
