/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Runtime beats 84.88% of javascript submissions
 */
var twoSum = function (nums, target) {
  var val,
    neededVal,
    len = nums.length,
    mappings = {},
    result = [];

  for (var i = 0; i < len; i++) {
    val = nums[i];
    neededVal = target - val;
    if (neededVal in mappings) {
      result.push(mappings[neededVal] + 1);
      result.push(i + 1);
      break;
    } else {
      mappings[val] = i;
    }
  }

  return result;
};