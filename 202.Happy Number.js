/**
 * @param {number} n
 * @return {boolean}
 *
 * Your runtime beats 90.58% of javascriptsubmissions.
 */
var isHappy = function (n) {
  if (n === null) {
    return false;
  }

  var val = n;
  var hash = {};

  // Check to make sure the total hasn't been visited yet.
  // Or else it will cause and infinite loop.
  while (!hash[val]) {
    if (val === 1) {
      return true;
    }

    hash[val] = true;
    var sarr = val.toString().split('');

    val = sarr.reduce(function (sum, digit) {
      sum += Math.pow(parseInt(digit, 10), 2);
      return sum;
    }, 0);
  }

  return false;
};