/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
  k = k % nums.length;

  nums.reverse();
  nums.reverseFromLToR(0, k - 1);
  nums.reverseFromLToR(k, nums.length - 1);
};

Array.prototype.reverseFromLToR = function (left, right) {
  if (right >= this.length) {
    return;
  }

  while (left < right) {
    var temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }
};
