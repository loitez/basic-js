const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
getSumOfDigits(190)

function getSumOfDigits(n) {
  let result = []
  let sum = 0;
  n = String(n).split('')
  n.forEach((item) => {
    result.push(item)
  })
  while (result.length > 1) {
    result.forEach((element) => {
      sum += Number(element)
    })
    result = sum;
    result = String(result).split('')
    sum = 0
  }
  return Number(result[0])
}

module.exports = {
  getSumOfDigits
};
