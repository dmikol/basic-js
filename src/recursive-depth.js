module.exports = class DepthCalculator {
    calculateDepth(arr) {
    let count = 1;
    for (let n = 0; n < arr.length; n++) {
    if (Array.isArray(arr[n])) {
    let countSub = this.calculateDepth(arr[n]) + 1;
    count = Math.max(countSub, count);
    }
    }
    return count;
    }
};