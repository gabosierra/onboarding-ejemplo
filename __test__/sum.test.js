const { suma, resta, multiplicar, dividir } = require('../index.js');

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('resta 4 - 2 igual a 2', () => {
  expect(resta(4, 2)).toBe(2);
});

test('multiplicacion 3 * 4 igual a 12', () => {
  expect(multiplicar(3, 4)).toBe(12);
});

test('division 10 / 2 igual a 5', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('division por cero arroja un error', () => {
  expect(() => {
    divide(10, 0);
  }).toThrow();
});