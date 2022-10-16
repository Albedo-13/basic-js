const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, currentDepth = 1, maxResult = 1) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'object') {
        maxResult = Math.max(maxResult, this.calculateDepth(arr[i], ++currentDepth));
        --currentDepth;
      }
    }
    maxResult = Math.max(maxResult, currentDepth);
    return maxResult;
  }
}

module.exports = {
  DepthCalculator
};
