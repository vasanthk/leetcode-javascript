/**
 * @param {number[]} prices
 * @return {number}
 *
 * Your runtime beats 86.41% of javascriptsubmissions.
 */
var maxProfit = function (prices) {
  if (prices === null || prices.length === 0) {
    return 0;
  }

  var min;
  var max;
  var diff = 0;

  for (var i = 0; i < prices.length; i++) {
    var price = prices[i];
    if (price < min || min == undefined) {
      min = price;
    }

    diff = price - min;

    if (diff > max || max === undefined) {
      max = diff;
    }
  }

  return max;
};