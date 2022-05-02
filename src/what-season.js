const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
getSeason(new Date(2020, 2, 31))

function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (isNaN(Date.parse(date)) || !(date instanceof Date) || (typeof date == 'string') || (date.hasOwnProperty('getTime'))) {
    throw new Error ('Invalid date!')
  }
  let month = date.getMonth()
  switch (month) {
    case 11:
    case 0:
    case 1:
      return 'winter'
      break
    case 2:
    case 3:
    case 4:
      return 'spring'
      break
    case 5:
    case 6:
    case 7:
      return 'summer'
      break
    case 8:
    case 9:
    case 10:
      return 'autumn'
      break

  }
}

/*
function checkDate(value)
{
  let arrD = String(value).split(".");
  arrD[1] -= 1;
  let d = new Date(arrD[2], arrD[1], arrD[0]);
  if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
    return true;
  } else {
    return false;
  }
}
*/

module.exports = {
  getSeason
};
