const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])

function sortByHeight(arr) {
  let arr2 = []
  let indexes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr2.push(arr[i])
      indexes.push(i)
    }
  }
  arr2 = arr2.sort(numSort)
  for (let k = 0; k < arr2.length; k++) {
    arr[indexes[k]] = arr2[k]
  }
  return arr
}

function numSort(a,b){
  return a - b;
}

module.exports = {
  sortByHeight
};
