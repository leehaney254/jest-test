const calc = require('./calculator');

describe.each([
  [1, 1, 2],
  [2, 2, 4],
  [3, 3, 6],
])('Calculator add operations:', (a, b, expected) => {
  test('Addition is:', () => {
    expect(calc.add(a, b)).toBe(expected);
  });
});

describe.each([
  [6, 1, 5],
  [2, 2, 0],
  [3, 5, -2],
])('Calculator subtract operations:', (a, b, expected) => {
  test('Subtraction is:', () => {
    expect(calc.subtract(a, b)).toBe(expected);
  });
});

describe.each([
  [6, 1, 6],
  [2, -2, -4],
  [3, 0, 0],
])('Calculator Multiplication operations:', (a, b, expected) => {
  test('Multiplication is:', () => {
    expect(calc.multiply(a, b)).toBe(expected);
  });
})

describe.each([
  [6, 1, 6],
  [2, -2, -1],
  [3, 3, 1],
])('Calculator Division operations:', (a, b, expected) => {
  test('Division is:', () => {
    expect(calc.divide(a, b)).toBe(expected);
  });
})
