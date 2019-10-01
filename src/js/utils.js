/**
 * @fileoverview Utility functions
 * @author NHN. FE dev team.<dl_javascript@nhn.com>
 */

/**
 * Identify the key (polyfill for IE)
 * @param {string} key - key pressed by the user
 */
export const identifyKey = key => {
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
};
