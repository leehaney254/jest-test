const capitalize = require('./capitalize');

test('Check if string is capitalized:', () => {
  expect(capitalize('see')).toStrictEqual('See');
});

test('Check if string is capitalized:', () => {
  expect(capitalize('hello')).toStrictEqual('Hello');
});