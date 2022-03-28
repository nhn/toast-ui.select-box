/**
 * @fileoverview Theme configuration
 */

/**
 * Theme configuration.
 * "common" prefix is for the entire select box. Its properties are overriden by "input", "dropdown", "itemGroup", and "item".
 * The example using theme can be found {@link tutorial-example02-theme here}.
 * @typedef {object} themeConfig
 * @example
 * const themeConfig = {
 *   'common.border': '1px solid #ddd', // border for input and dropdown (not itemGroup and item)
 *   'common.background': '#fff',
 *   'common.color': '#333',
 *   'common.width': '100%',
 *   'common.height': '29px', // height for item and itemGroup label (not entire select box)
 *
 *   'common.disabled.background': '#f9f9f9',
 *   'common.disabled.color': 'c8c8c8',
 *
 *   // Input
 *   'input.border': '1px solid #ddd',
 *   'input.borderBottom': '',
 *   'input.background': 'inherit',
 *   'input.color': '#333',
 *   'input.width': '100%',
 *   'input.height': '29px',
 *
 *   // Input when dropdown is open
 *   'input.open.border': '1px solid #aaa',
 *   'input.open.background': 'inherit',
 *   'input.open.color': '#333',
 *
 *   // Input when selectbox is disabled
 *   'input.disabled.border': '1px solid #aaa',
 *   'input.disabled.background': '#f9f9f9',
 *   'input.disabled.color': '#c8c8c8',
 *
 *   // Dropdown
 *   'dropdown.border': '1px solid #aaa',
 *   'dropdown.borderTop': '0',
 *   'dropdown.background': 'inherit',
 *   'dropdown.width': '100%',
 *   'dropdown.maxHeight': '',
 *
 *   // ItemGroup's items
 *   // if you want to set the same padding value as the itemGroup.label, set to '8px'.
 *   'itemGroup.items.paddingLeft': '20px',
 *
 *   // ItemGroup's label
 *   'itemGroup.label.border': '0',
 *   'itemGroup.label.background': 'inherit',
 *   'itemGroup.label.color': '#333',
 *   'itemGroup.label.fontWeight': 'bold',
 *   'itemGroup.label.height': '29px',
 *
 *   // disabled ItemGroup's label
 *   'itemGroup.label.disabled.border': '0',
 *   'itemGroup.label.disabled.background': 'inherit',
 *   'itemGroup.label.disabled.color': '#333',
 *
 *   // Item
 *   'item.border': '0',
 *   'item.background': 'inherit',
 *   'item.color': '#333',
 *   'item.height': '29px',
 *
 *   // selected Item
 *   'item.selected.border': '0',
 *   'item.selected.background': '#f4f4f4',
 *   'item.selected.color': '#333',
 *
 *   // disabled Item
 *   'item.disabled.border': '0',
 *   'item.disabled.background': '#f9f9f9',
 *   'item.disabled.color': '#c8c8c8',
 *
 *   // highlighted Item
 *   'item.highlighted.border': '0',
 *   'item.highlighted.background': '#e5f6ff',
 *   'item.highlighted.color': '#333'
 * };
 */
export default {
  'common.border': '1px solid #ddd', // border for input and dropdown (not itemGroup and item)
  'common.background': '#fff',
  'common.color': '#333',
  'common.width': '100%',
  'common.height': '29px', // height for item and itemGroup label (not entire select box)

  'common.disabled.background': '#f9f9f9',
  'common.disabled.color': 'c8c8c8',

  // Input
  'input.border': '1px solid #ddd',
  'input.borderBottom': '',
  'input.background': 'inherit',
  'input.color': '#333',
  'input.width': '100%',
  'input.height': '29px',

  // Input when dropdown is open
  'input.open.border': '1px solid #aaa',
  'input.open.background': 'inherit',
  'input.open.color': '#333',

  // Input when selectbox is disabled
  'input.disabled.border': '1px solid #aaa',
  'input.disabled.background': '#f9f9f9',
  'input.disabled.color': '#c8c8c8',

  // Dropdown
  'dropdown.border': '1px solid #aaa',
  'dropdown.borderTop': '0',
  'dropdown.background': 'inherit',
  'dropdown.width': '100%',
  'dropdown.maxHeight': '',

  // ItemGroup's items
  'itemGroup.items.paddingLeft': '20px',

  // ItemGroup's label
  'itemGroup.label.border': '0',
  'itemGroup.label.background': 'inherit',
  'itemGroup.label.color': '#333',
  'itemGroup.label.fontWeight': 'bold',
  'itemGroup.label.height': '29px',

  // disabled ItemGroup's label
  'itemGroup.label.disabled.border': '0',
  'itemGroup.label.disabled.background': 'inherit',
  'itemGroup.label.disabled.color': '#333',

  // Item
  'item.border': '0',
  'item.background': 'inherit',
  'item.color': '#333',
  'item.height': '29px',

  // selected Item
  'item.selected.border': '0',
  'item.selected.background': '#f4f4f4',
  'item.selected.color': '#333',

  // disabled Item
  'item.disabled.border': '0',
  'item.disabled.background': '#f9f9f9',
  'item.disabled.color': '#c8c8c8',

  // highlighted Item
  'item.highlighted.border': '0',
  'item.highlighted.background': '#e5f6ff',
  'item.highlighted.color': '#333'
};
