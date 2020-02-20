module.exports = class DepthCalculator {
  calculateDepth(arr, num = 1, res = 0) {
    for (let i = 0; i <= arr.length; i++) {
      if (Array.isArray(arr[i])) {
        num = this.calculateDepth(arr[i]);
        res = (res < num) ? num : res;
      }
    }
    return ++res;
  }
};