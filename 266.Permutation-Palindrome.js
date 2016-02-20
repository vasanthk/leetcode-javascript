/**
 * @param {string} s
 * @return {boolean}
 *
 * Your runtime beats 84.21% of javascriptsubmissions.
 */
var canPermutePalindrome = function (word) {
  var charCounts = mapCharCounts(word);
  var numOfOddCharCounts = 0;

  for (var currChar in charCounts) {
    if (charCounts.hasOwnProperty(currChar)) {
      if (charCounts[currChar] % 2 !== 0) {
        numOfOddCharCounts++;
        if (numOfOddCharCounts > 1) {
          return false;
        }
      }
    }
  }

  function mapCharCounts(str) {
    var charCounts = {};
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      charCounts[char] = charCounts[char] + 1 || 1;
    }
    return charCounts;
  }

  return true;
};