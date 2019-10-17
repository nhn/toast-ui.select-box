/**
 * @fileoverview Utility functions
 * @author NHN. FE dev team.<dl_javascript@nhn.com>
 */

import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';

const keyCodeMap = {
  38: 'ArrowUp',
  40: 'ArrowDown',
  32: ' ',
  13: 'Enter',
  27: 'Escape',
  61: 'Tab'
};

const keyMap = {
  Up: 'ArrowUp',
  Down: 'ArrowDown',
  Spacebar: ' ',
  Esc: 'Escape'
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
