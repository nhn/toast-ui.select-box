/**
 * @fileoverview Utility functions
 * @author NHN. FE dev team.<dl_javascript@nhn.com>
 */

/**
 * Identify the key (polyfill for IE8)
 * @param {number} keyCode - keyCode
 * @return {string} - key
 */
const identifyKeyCode = keyCode => {
  switch (keyCode) {
    case 38:
      return 'ArrowUp';
    case 40:
      return 'ArrowDown';
    case 32:
      return ' ';
    case 13:
      return 'Enter';
    case 27:
      return 'Escape';
    default:
      return keyCode;
  }
};

/**
 * Identify the key (polyfill for IE)
 * @param {string} ev - keyboard event
 * @return {string} - key
 */
export const identifyKey = ev => {
  const { key, keyCode } = ev;

  if (key) {
    switch (key) {
      case 'Up':
        return 'ArrowUp';
      case 'Down':
        return 'ArrowDown';
      case 'Spacebar':
        return ' ';
      case 'Esc':
        return 'Escape';
      default:
        return key;
    }
  } else {
    return identifyKeyCode(keyCode);
  }
};
