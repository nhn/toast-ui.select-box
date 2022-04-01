/**
 * @fileoverview Utility functions related to key events
 */

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
