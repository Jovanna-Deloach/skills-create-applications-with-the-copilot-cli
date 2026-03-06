/**
 * calculator.js
 * A simple Node.js CLI calculator supporting arithmetic operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (x)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Exponentiation (**)
 *   - Square Root (√)
 *
 * Usage: node src/calculator.js <operation> <num1> [num2]
 * Example: node src/calculator.js add 5 3
 *          node src/calculator.js sqrt 9
 */

/**
 * Addition: returns the sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction: returns the difference of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication: returns the product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division: returns the quotient of a divided by b.
 * Throws an error if b is zero to prevent division by zero.
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

/**
 * Modulo: returns the remainder of a divided by b.
 * Throws an error if b is zero to prevent modulo by zero.
 */
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed');
  return a % b;
}

/**
 * Exponentiation: returns a raised to the power of b.
 */
function exponentiate(a, b) {
  return Math.pow(a, b);
}

/**
 * Square Root: returns the square root of a.
 * Throws an error if a is negative, as square roots of negative numbers are not real.
 */
function sqrt(a) {
  if (a < 0) throw new Error('Square root of a negative number is not allowed');
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, sqrt };

// CLI entry point
if (require.main === module) {
  const [, , operation, num1, num2] = process.argv;
  const a = parseFloat(num1);

  if (!operation) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|exponentiate|sqrt> <num1> [num2]');
    process.exit(1);
  }

  try {
    let result;
    if (operation === 'sqrt') {
      if (isNaN(a)) {
        console.error('Usage: node src/calculator.js sqrt <num>');
        process.exit(1);
      }
      result = sqrt(a);
    } else {
      const b = parseFloat(num2);
      if (isNaN(a) || isNaN(b)) {
        console.error(`Usage: node src/calculator.js ${operation} <num1> <num2>`);
        process.exit(1);
      }
      switch (operation) {
        case 'add':          result = add(a, b);          break;
        case 'subtract':     result = subtract(a, b);     break;
        case 'multiply':     result = multiply(a, b);     break;
        case 'divide':       result = divide(a, b);       break;
        case 'modulo':       result = modulo(a, b);       break;
        case 'exponentiate': result = exponentiate(a, b); break;
        default:
          console.error(`Unknown operation: "${operation}". Use add, subtract, multiply, divide, modulo, exponentiate, or sqrt.`);
          process.exit(1);
      }
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
