import SelectBox from '@src/index';

describe('Test', () => {
  let selectbox;

  beforeEach(() => {
    fixture.set('<div id="container"></div>');
    selectbox = new SelectBox();
  });

  it('test', () => {
    expect(selectbox.say()).toBe('TOAST UI Select Box');
  });
});
