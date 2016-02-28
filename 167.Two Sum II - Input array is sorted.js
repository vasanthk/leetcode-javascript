/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var map = {};
  var val;
  var remainder;
  var result = [];

  for (var i = 0; i < numbers.length; i++) {
    val = numbers[i];
    remainder = target - val;
    if (map[remainder] !== undefined) {
      result.push(map[remainder] + 1);
      result.push(i + 1);
      break;
    } else {
      map[val] = i;
    }
  }
  return result;
};