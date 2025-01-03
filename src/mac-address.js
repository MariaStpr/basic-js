const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // 17 длина строки, разделители - каждый третий элемент, элемент = 0-9 A-F
  let res = true;
  let strInput = String(n);
  let strInputArray = strInput.split('-');
  if (strInput.length === 17 && strInputArray.join('-') === strInput) {
    let arrInput = strInputArray.join('').split('');
    for (let i = 0; i < arrInput.length; i++) {
      if (!((+arrInput[i] <= 9 && +arrInput[i] >= 0) || (arrInput[i] >= 'A' && arrInput[i] <= 'F'))) res = false;
    }
  } else res = false;
  return res;
}
module.exports = {
  isMAC48Address
};