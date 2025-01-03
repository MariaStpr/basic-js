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
function minesweeper(matrix) {
  let res = matrix.map((el) => el.map((item) => 0));
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        res[i][j] = 1;
        if (j + 1 <= matrix[0].length && matrix[i][j + 1] === false) res[i][j+1] += 1;
        if (i + 1 <= matrix.length && j - 1 >= 0 && matrix[i + 1][j - 1] === false) res[i + 1][j - 1] += 1;
        if (i + 1 <= matrix.length &&  matrix[i + 1][j] === false) res[i + 1][j] += 1;
        if (i + 1 <= matrix.length && j + 1 <= matrix[0].length && matrix[i + 1][j + 1] === false) res[i + 1][j + 1] += 1;
        if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === false) res[i - 1][j - 1] += 1;
        if (i - 1 >= 0 && matrix[i - 1][j] === false) res[i - 1][j] += 1;
        if (i - 1 >= 0 && j + 1 <= matrix[0].length && matrix[i - 1][j + 1] === false) res[i - 1][j + 1] += 1;
        if (j - 1 >= 0 && matrix[i][j - 1] === false) res[i][j - 1] += 1;
      }
    }
  }
  return res;
}

module.exports = {
  minesweeper
};

matrix = [[true, false, false],[false, true, false],[false, false, false]];

console.log(minesweeper(matrix));