import '@testing-library/jest-dom';

global.setFixtures = function(fixture) {
  document.body.innerHTML = fixture;
};

expect.extend({
  toBeSelected(actual) {
    const result = actual.selected === true;

    return {
      pass: result,
      message() {
        return `recived value is ${result ? '' : 'not '}selected.`;
      }
    };
  }
});
