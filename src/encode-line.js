const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
encodeLine('aabbccc')

function encodeLine(str) {
  let counter = 0;
  let result = [];
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++
    } else if (str[i] !== str[i + 1]) {
      if (counter !== 0) {
        counter++
        result.push(counter)
      }
      result.push(str[i])
      counter = 0;
    }
  }
  result = String(result.join(''))
  return result
}

module.exports = {
  encodeLine
};
