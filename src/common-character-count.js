const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
getCommonCharacterCount('aabcc', 'adcaa')
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('')
  s2 = s2.split('')
  let array = []
  for (let s = 0; s < s1.length; s++) {
    for (let k = 0; k < s2.length; k++) {
      if (s1[s] === s2[k]) {
        s1.splice(s, 1)
        s2.splice(k, 1)
        array.push(s1[s])
        s = s - 1
      }
    }
  }

  let result = array.length;
  console.log(result)
  return result
}

module.exports = {
  getCommonCharacterCount
};
