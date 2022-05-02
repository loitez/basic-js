const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5])

function transform(arr) {
  console.log('arr', arr)
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let arr2 = []
  arr.forEach((item) => {
    arr2.push(item)
  })
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '--discard-prev') {
      if (arr2[i- 1]) {
        arr2.splice(i, 1)
        arr2.splice(i - 1, 1)
      } else {
        arr2.splice(i, 1)
      }
    }
    if (arr2[i] === '--discard-next') {
      if (arr2[i + 1]) {
        arr2.splice(i, 1)
        arr2.splice(i, 1)
        for (let m = i; m < arr2.length; m++) {
          if (typeof m != 'Number') {
            arr2.splice(m, 1)
          }
          console.log(arr2)
          return arr2
        }
      } else {
        arr2.splice(i, 1)
      }

    }
    if (arr2[i] === '--double-prev') {
      if (arr2[i - 1]) {
        arr2[i] = arr2[i - 1]
      } else {
        arr2.splice(i, 1)
      }
    }
    if (arr2[i] === '--double-next') {
      if (arr2[i + 1]) {
        arr2[i] = arr2[i + 1]
      } else {
        arr2.splice(i, 1)
      }
    }
  }
  console.log(arr2)
  return arr2
}

module.exports = {
  transform
};
