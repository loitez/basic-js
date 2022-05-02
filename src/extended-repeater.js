const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
/* * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'


 *	`options` это **объект** опций, который содержит следующие свойства:
  -	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`

 *
 */

/* * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'


 *	`options` это **объект** опций, который содержит следующие свойства:
  -	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`

 *
 */

repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' })

/*'my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS');
    })
 */

function repeater(str, options) {
  str = String(str)
  let message = ''
  let messageAdd = ''
  if (!options.repeatTimes) {
    options.repeatTimes = 1
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator && options.separator) {
    if (options.repeatTimes == 1) {
      options.additionSeparator = ''
    } else {
      options.additionSeparator = '|'
    }
  }
  if (!options.separator && options.additionSeparator) {
    if (options.additionRepeatTimes == 1) {
      options.separator = ''
    } else {
      options.separator = '+'
    }
  }
  if (!options.separator && !options.additionSeparator) {
    options.separator = '+'
    options.additionSeparator = '|'
  }
  options.addition = String(options.addition)
  if (options) {
    if (options.addition != 'undefined') {
      if (options.additionRepeatTimes == 1) {
        messageAdd = `${options.addition}`
      } else {
        for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
          messageAdd += `${options.addition}${options.additionSeparator}`
        }
        messageAdd += `${options.addition}`
        console.log(messageAdd, 'add')

      }
      if (options.repeatTimes == 1) {
        message += `${str}${messageAdd}`
      } else {
        for (let k = 0; k < options.repeatTimes - 1; k++) {
          message += `${str}${messageAdd}${options.separator}`
        }
        message += `${str}${messageAdd}`
      }

    }

    else {
      if (options.repeatTimes == 1) {
        message += `${str}`
      } else {
        for (let m = 0; m < options.repeatTimes - 1; m++) {
          message += `${str}${options.separator}`
        }
        message += `${str}`
      }

    }


    console.log(message)
    return message
  } else {
    console.log(str)
    return str
  }

}

module.exports = {
  repeater
};
