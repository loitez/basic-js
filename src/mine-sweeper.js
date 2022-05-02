const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
/* * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])

function minesweeper(matrix) {
  let indexesI = []
  let indexesK = []
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] == true) {
        /*matrix[i][k] = 1*/
        indexesI.push(i)
        indexesK.push(k)
      } else {
        matrix[i][k] = 0
      }
      /*if (matrix[i][k] == false) {
          matrix[i][k] = 0
      } else if (matrix[i][k] == true) {
          indexesI.push(i)
          indexesK.push(k)
          matrix[i][k] = 'true'
      }*/

    }
  }
  console.log('before', matrix)
  for (let m = 0; m < matrix.length; m++) {
    for (let p = 0; p < matrix[m].length; p++) {
      if (matrix[m][p] === true) {
        console.log(m, p)
        // first column
        if (p == 0) {
          //first row
          if (m == 0) {
            matrix[m +1][p]++
            // matrix[m + 1][p + 1]++
            matrix[m][p + 1]++
            //last row
          }
          if (m == matrix.length - 1) {
            matrix[m - 1][p]++
            matrix[m - 1][p + 1]++
            matrix[m][p + 1]++
            // not first and not last row
          }
          if (m > 0 && m < matrix.length - 1) {
            matrix[m +1][p]++
            matrix[m + 1][p + 1]++
            matrix[m][p + 1]++
            matrix[m - 1][p]++
            matrix[m - 1][p + 1]++
          }
        }
        // last column
        if (p == matrix[0].length - 1) {
          //first row
          if (m == 0) {
            matrix[m +1][p]++
            matrix[m + 1][p - 1]++
            matrix[m][p - 1]++
            //last row
          }
          if (m == matrix.length - 1) {
            matrix[m - 1][p]++
            matrix[m - 1][p - 1]++
            matrix[m][p - 1]++
            // not first and not last row
          }
          if (m > 0 && m < matrix.length - 1) {
            matrix[m +1][p]++
            matrix[m + 1][p - 1]++
            matrix[m][p - 1]++
            matrix[m - 1][p]++
            matrix[m - 1][p - 1]++
          }
        }
        // not first and not last column
        if (p > 0 && p < matrix[0].length - 1) {
          //first row
          if (m == 0) {
            matrix[m +1][p]++
            matrix[m + 1][p + 1]++
            matrix[m + 1][p - 1]++
            matrix[m][p + 1]++
            matrix[m][p - 1]++
            //last row
          }
          if (m == matrix.length - 1) {
            matrix[m - 1][p]++
            matrix[m - 1][p + 1]++
            matrix[m - 1][p - 1]++
            matrix[m][p + 1]++
            matrix[m][p - 1]++
            // not first and not last row
          }
          if (m > 0 && m < matrix.length - 1) {
            console.log('here')
            matrix[m - 1][p]++
            matrix[m - 1][p + 1]++
            matrix[m - 1][p - 1]++
            matrix[m +1][p]++
            matrix[m + 1][p + 1]++
            matrix[m + 1][p - 1]++
            matrix[m][p + 1]++
            matrix[m][p - 1]++
          }
        }


      }
    }
  }
  for (let s = 0; s < indexesI.length; s++) {
    matrix[indexesI[s]][indexesK[s]] = 1
  }
  console.log(matrix)
  return matrix
}

module.exports = {
  minesweeper
};
