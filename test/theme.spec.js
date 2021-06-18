import Theme from '@src/theme';
import { cls } from '@src/constants';

describe('Theme', () => {
  let theme;

  beforeEach(() => {
    setFixtures('<div id="container"></div>');
    theme = new Theme(
      {
        'common.border': '1px solid black',
        'common.color': 'black',
        'common.width': '200px',
        'common.height': '50px',

        'common.disabled.background': 'gray',
        'common.disabled.color': 'white',

        'itemGroup.items.paddingLeft': '8px',

        'item.highlighted.background': 'skyblue',

        'item.selected.background': 'black',
        'item.selected.color': 'white'
      },
      '#container'
    );
  });

  afterEach(() => {
    theme.destroy();
  });

  it('should make a style element.', () => {
    expect(theme.styleEl).toBeInTheDocument();
  });

  it('should make css strings.', () => {
    expect(theme.cssString).toContain(`#container .${cls.ITEM_GROUP}>.${cls.ITEM}`);
    expect(theme.cssString).toContain(`background:skyblue;`);
  });
});
