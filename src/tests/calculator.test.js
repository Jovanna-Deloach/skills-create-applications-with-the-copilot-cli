/**
 * calculator.test.js
 * Comprehensive unit tests for all calculator arithmetic operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (x)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Exponentiation (**)
 *   - Square Root (√)
 */

const { add, subtract, multiply, divide, modulo, exponentiate, sqrt } = require('../calculator');

// ─── Addition ────────────────────────────────────────────────────────────────
describe('add', () => {
  test('adds two positive integers (2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number (5 + -3 = 2)', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers (-4 + -6 = -10)', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds with zero (7 + 0 = 7)', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers (1.5 + 2.5 = 4)', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  test('adds two zeros (0 + 0 = 0)', () => {
    expect(add(0, 0)).toBe(0);
  });
});

// ─── Subtraction ─────────────────────────────────────────────────────────────
describe('subtract', () => {
  test('subtracts two positive integers (10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts resulting in a negative number (3 - 8 = -5)', () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test('subtracts a negative number (5 - -3 = 8)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero (9 - 0 = 9)', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts same numbers resulting in zero (6 - 6 = 0)', () => {
    expect(subtract(6, 6)).toBe(0);
  });

  test('subtracts decimal numbers (5.5 - 2.5 = 3)', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
  });
});

// ─── Multiplication ───────────────────────────────────────────────────────────
describe('multiply', () => {
  test('multiplies two positive integers (45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies a positive and a negative number (6 * -3 = -18)', () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test('multiplies two negative numbers (-4 * -5 = 20)', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies by zero (99 * 0 = 0)', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplies by one (7 * 1 = 7)', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  test('multiplies decimal numbers (2.5 * 4 = 10)', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// ─── Division ─────────────────────────────────────────────────────────────────
describe('divide', () => {
  test('divides two positive integers (20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides resulting in a decimal (7 / 2 = 3.5)', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test('divides a negative by a positive (-12 / 3 = -4)', () => {
    expect(divide(-12, 3)).toBe(-4);
  });

  test('divides two negative numbers (-15 / -3 = 5)', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  test('divides zero by a number (0 / 5 = 0)', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('divides by one returns the same number (8 / 1 = 8)', () => {
    expect(divide(8, 1)).toBe(8);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Modulo ───────────────────────────────────────────────────────────────────
describe('modulo', () => {
  test('returns the remainder of two positive integers (10 % 3 = 1)', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('returns zero when divisible evenly (9 % 3 = 0)', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test('returns the number itself when divisor is larger (5 % 7 = 5)', () => {
    expect(modulo(5, 7)).toBe(5);
  });

  test('handles negative dividend (-10 % 3 = -1)', () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test('handles negative divisor (10 % -3 = 1)', () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test('returns zero when dividend is zero (0 % 5 = 0)', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  // Edge case: modulo by zero
  test('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });
});

// ─── Exponentiation ───────────────────────────────────────────────────────────
describe('exponentiate', () => {
  test('raises a positive number to a positive power (2 ** 3 = 8)', () => {
    expect(exponentiate(2, 3)).toBe(8);
  });

  test('raises a number to the power of zero (5 ** 0 = 1)', () => {
    expect(exponentiate(5, 0)).toBe(1);
  });

  test('raises a number to the power of one (4 ** 1 = 4)', () => {
    expect(exponentiate(4, 1)).toBe(4);
  });

  test('raises a number to a negative power (2 ** -2 = 0.25)', () => {
    expect(exponentiate(2, -2)).toBe(0.25);
  });

  test('raises a negative base to an even power (-3 ** 2 = 9)', () => {
    expect(exponentiate(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd power (-2 ** 3 = -8)', () => {
    expect(exponentiate(-2, 3)).toBe(-8);
  });

  test('raises zero to a positive power (0 ** 5 = 0)', () => {
    expect(exponentiate(0, 5)).toBe(0);
  });

  test('raises zero to the power of zero (0 ** 0 = 1)', () => {
    expect(exponentiate(0, 0)).toBe(1);
  });
});

// ─── Square Root ──────────────────────────────────────────────────────────────
describe('sqrt', () => {
  test('returns the square root of a perfect square (√9 = 3)', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('returns the square root of 4 (√4 = 2)', () => {
    expect(sqrt(4)).toBe(2);
  });

  test('returns the square root of 2 (√2 ≈ 1.414)', () => {
    expect(sqrt(2)).toBeCloseTo(1.414, 3);
  });

  test('returns zero for sqrt of zero (√0 = 0)', () => {
    expect(sqrt(0)).toBe(0);
  });

  test('returns the square root of a decimal (√0.25 = 0.5)', () => {
    expect(sqrt(0.25)).toBe(0.5);
  });

  // Edge case: square root of negative number
  test('throws an error when taking square root of a negative number', () => {
    expect(() => sqrt(-1)).toThrow('Square root of a negative number is not allowed');
  });

  test('throws an error when taking square root of -9', () => {
    expect(() => sqrt(-9)).toThrow('Square root of a negative number is not allowed');
  });
});
