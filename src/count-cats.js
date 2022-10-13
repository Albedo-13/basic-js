const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let earsCount = 0;

  matrix.forEach(nestedArray => {
    nestedArray.forEach((item) => {
      if (item === "^^") {
        ++earsCount;
      }
    });
  });

  return earsCount;
}

module.exports = {
  countCats
};
