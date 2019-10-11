/**
 * @fileoverview Utility functions
 * @author NHN. FE dev team.<dl_javascript@nhn.com>
 */

const keyCodeMap = {
  38: 'ArrowUp',
  40: 'ArrowDown',
  32: ' ',
  13: 'Enter',
  27: 'Escape'
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
