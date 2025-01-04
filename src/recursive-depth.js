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
  calculateDepth(arr) {
    // return arr.reduce((counter, element) => {
    //   console.log('el', element,!Array.isArray(element), 'counter', counter);
    //   return !Array.isArray(element) ? counter : 1 + this.calculateDepth(element);
    // }, 1);
    let maxdepth = 0; 
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) { 
        let depth = this.calculateDepth(arr[i]); 
        if (depth > maxdepth) maxdepth = depth; 
      } 
      return maxdepth + 1;
    }
  }
}

module.exports = {
  DepthCalculator
};

const depthCalc = new DepthCalculator();

console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));
console.log(depthCalc.calculateDepth([1, 2, 3, [4, 5]]));
console.log(depthCalc.calculateDepth([[[]]]));
console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));
console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]));