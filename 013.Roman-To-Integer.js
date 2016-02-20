/**
 * @param {string} s
 * @return {number}
 *
 * Your runtime beats 89.30% of javascript submissions.
 */
var romanToInt = function (s) {
  var key = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  var result = 0;
  var romanArray = s.split('');
  var prevVal = romanArray[0];

  romanArray.forEach(function (char) {
    var val = key[char];
    result += (prevVal < val) ? val - 2 * prevVal : val;
    prevVal = val;
  });
  return result;
};