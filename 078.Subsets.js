/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  if (typeof nums === undefined || nums === null) {
    return null;
  }

  var len = nums.length;
  var res = [];
  var tempList = [];
  nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i <= len; i++) {
    helper(nums, tempList, res, i, 0);
  }

  return res;
};

function helper(nums, tempList, res, targetLen, index) {
  if (tempList.length === targetLen) {
    res.push(tempList.slice());
    return;
  }

  var len = nums.length;

  for (var i = index; i < len; i++) {
    tempList.push(nums[i]);
    helper(nums, tempList, res, targetLen, i + 1);
    tempList.pop();
  }
}