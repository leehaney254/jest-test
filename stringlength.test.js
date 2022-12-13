const stringLength = require("./stringlenth");

test('Check the length of String:', () => {
  expect(stringLength('Hello world!')).toBe(false);
});

test('Check the length of String:', () => {
  expect(stringLength('Hello')).toBe(5);
});