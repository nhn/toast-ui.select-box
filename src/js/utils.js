/**
 * @fileoverview Utility functions
 * @author NHN. FE dev team.<dl_javascript@nhn.com>
 */

import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';
// import sendHostname from 'tui-code-snippet/request/sendHostname';

const keyCodeMap = {
  38: 'arrowUp',
  40: 'arrowDown',
  32: 'space',
  13: 'enter',
  27: 'escape',
  61: 'tab'
};

const keyMap = {
  ArrowUp: 'arrowUp',
  Up: 'arrowUp',
  ArrowDown: 'arrowDown',
  Down: 'arrowDown',
  ' ': 'space',
  Spacebar: 'space',
  Enter: 'enter',
  Escape: 'escape',
  Esc: 'escape',
  Tab: 'tab'
};

/**
 * Identify the key (polyfill for IE)
 * @param {string} ev - keyboard event
 * @return {string} - key
 */
export const identifyKey = ev => {
  const { key, keyCode } = ev;

  if (key) {
    return keyMap[key] || key;
  }

  return keyCodeMap[keyCode] || keyCode;
};

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
    el.innerText = content;
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
 * Send hostname for statistics
 * @ignore
 */
export const sendHostName = () => {
  // TODO: sendHostname('select-box', 'UA-129987462-1');
};
