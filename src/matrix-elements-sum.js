const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
])
function getMatrixElementsSum(matrix) {
  let width = matrix[0].length
  let height = matrix.length
  let sum = 0;
  for (let i = 1; i < height; i++) {
    for (let k = 0; k < width; k++) {
      if (matrix[i - 1][k] !== 0) {
        sum += matrix[i][k]
      }
    }
  }
  matrix[0].forEach((item) => {
    sum += item
  })
  return sum
}

module.exports = {
  getMatrixElementsSum
};
