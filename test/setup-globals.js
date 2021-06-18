import '@testing-library/jest-dom';

global.setFixtures = function(fixture) {
  document.body.innerHTML = fixture;
};
