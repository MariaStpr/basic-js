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
 * repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.separator =  options.separator ?? '+';
  options.additionSeparator = options.additionSeparator ?? '|';
  str = String(str);
  if (typeof options['addition'] === "undefined") options.addition = '';
  options.addition = String(options.addition);
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.repeatTimes) options.repeatTimes = 1;
  let additionArr = [];
  let res = [];
  for (let i = 0; i < options.additionRepeatTimes; i += 1) {
    additionArr.push(options.addition);
  }
  str += additionArr.join(options.additionSeparator);
  for (let i = 0; i < options.repeatTimes; i += 1) {
    res.push(str);
  }
  return res.join(options.separator);
}

module.exports = {
  repeater
};