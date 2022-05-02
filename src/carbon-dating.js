const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

dateSample('1')
function dateSample(sampleActivity) {
  let MODERN_ACTIVITY = 15;
  let HALF_LIFE_PERIOD = 5730;
  let number = 0.693;
  let k = number / HALF_LIFE_PERIOD
  if (typeof sampleActivity != 'string') {
    return false
  } else if (!Number(sampleActivity)) {
    return false
  } else if (sampleActivity <=0 || sampleActivity > 15) {
    return false
  }
  if (/[0-9]/.test(sampleActivity)) {
    let T = (Math.log(MODERN_ACTIVITY/+sampleActivity))/k;
    T = Math.ceil(T)
    console.log(T)
    return T
  } else {
    return false
  }
  return false
}
module.exports = {
  dateSample
};
