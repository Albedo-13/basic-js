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
  const field = JSON.parse(JSON.stringify(matrix));
  // zero'ing field array
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          field[i][j] = 0;
      }
  }

  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j]) {
              increaseAround(i, j);
          }
      }
  }
  return field;

  function increaseAround(row, column) {
      for (let i = row - 1; i < row + 2; i++) {
          for (let j = column - 1; j < column + 2; j++) {
              if (i == row && j == column) {
                  continue;
              }
              else if (i < 0 || i > matrix.length) {
                  continue;
              }
              else if (j < 0 || j > matrix[0].length) {
                  continue;
              }
              ++field[i][j];
          }
      }
  }
}

module.exports = {
  minesweeper
};
