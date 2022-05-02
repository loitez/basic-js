const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])

function createDreamTeam(members) {
  let letter;
  let finalArray = []
  let result;
  if (!Array.isArray(members)) {
    return false
  } else {
    members.forEach((element) => {
      if (typeof element === 'string') {
        letter = element.substr(0, 1)
        if (letter !== ' ') {
          finalArray.push(letter.toUpperCase())
        } else {
          element.split('')
          for (let k = 1; k < element.length; k++) {
            if (element[k] !==' ') {
              letter = element[k]
              finalArray.push(letter.toUpperCase())
              return
            }
          }
        }

      }
    })
    finalArray.sort()
    result = finalArray.join('')
    if (result !== '') {
      return result
    } else {
      return false
    }
  }
}

module.exports = {
  createDreamTeam
};
