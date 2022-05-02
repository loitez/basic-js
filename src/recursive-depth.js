const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
/*let counter = 0;
let maximum = 0;
let depth = []*/

class DepthCalculator {
  calculateDepth(arr) {

  }
}

/*class DepthCalculator {
  calculateDepth(arr) {
    counter = 0;
    check(arr)
    console.log('finish - ', maximum)
    return maximum;
  }
}*/
/*

function check(a) {
  console.log(a)
  for (let i = 0; i < a.length; i++) {
    counter = 1;
    if (Array.isArray(a[i])) {
      counter++;
      check(a[i])
    }
    /!*if (counter != 1) {

    }*!/
    depth.push(counter)
  }
  maximum = depth[0]
  for (let h = 0; h < depth.length; h++) {
    if (depth[h] > maximum) {
      maximum = depth[h]
    }
  }
  return maximum
}
*/

module.exports = {
  DepthCalculator
};
