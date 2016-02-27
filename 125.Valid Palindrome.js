/**
 * @param {string} s
 * @return {boolean}
 *
 * Your runtime beats 94.49% of javascriptsubmissions.
 */
var isPalindrome = function (s) {
  // Removes non alphanumeric characters from the string.
  s = s.replace(/\W/g, '');
  if (s === '') {
    return true;
  }

  s = s.toLowerCase();
  for (var i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
  }
  return true;
};