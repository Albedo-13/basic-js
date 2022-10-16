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

function repeater(str, options) {
  let result = "";

  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (typeof options.addition == "undefined") {
    options.addition = "";
  }

  for (let rep = 0; rep < options.repeatTimes; rep++) {
    result += str;
    for (let add = 0; add < options.additionRepeatTimes; add++) {
      result += options.addition;
      result += options.additionSeparator;
    }
    if (options.additionSeparator) {
      result = result.slice(0, result.length - options.additionSeparator.length);
    }
    result += options.separator;
  }

  result = result.slice(0, result.length - options.separator.length);
  return result;
}

module.exports = {
  repeater
};
