const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = String(n).split('').map(Number);
  let res = num.map((el,i) => {
    let newArr = num.slice();
    newArr.splice(i,1);
    return Number(newArr.join(''))})
  return Math.max(...res);
}

module.exports = {
  deleteDigit
};