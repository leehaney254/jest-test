const stringReverse = require('./stringReverse');

test('Check the length of String:', () => {
  expect(stringReverse('Hello')).toStrictEqual('olleH');
});

test('Check the length of String:', () => {
  expect(stringReverse('')).toStrictEqual('');
});