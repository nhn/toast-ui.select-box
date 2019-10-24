/**
 * @fileoverview The static values
 * @author NHN. FE dev team.<dl_javascript@nhn.com>
 */

import forEachOwnProperties from 'tui-code-snippet/collection/forEachOwnProperties';

const CSS_PREFIX = 'tui-select-box';

const classNames = {
  SELECT_BOX: '',
  ITEM: 'item',
  ITEM_GROUP: 'item-group',
  ITEM_GROUP_LABEL: 'item-group-label',
  DROPDOWN: 'dropdown',
  INPUT: 'input',
  PLACEHOLDER: 'placeholder',
  ICON: 'icon',
  OPEN: 'open',
  HIDDEN: 'hidden',
  DISABLED: 'disabled',
  SELECTED: 'selected',
  HIGHLIGHT: 'highlight'
};

export const cls = (function() {
  forEachOwnProperties(classNames, (value, key) => {
    if (value) {
      classNames[key] = `${CSS_PREFIX}-${value}`;
    } else {
      classNames[key] = CSS_PREFIX;
    }
  });

  return classNames;
})();
