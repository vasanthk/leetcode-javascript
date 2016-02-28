/**
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be: bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function (s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }

  // p's length 1 is special case
  if (p.length === 1 || p[1] !== '*') {
    if (s.length < 1 || (p[0] !== '.' && s[0] !== p[0])) {
      return false;
    }
    return isMatch(s.slice(1), p.slice(1));
  } else {
    var len = s.length;
    var i = -1;
    while (i < len && (i < 0 || p[0] === '.' || p[0] === s[i])) {
      if (isMatch(s.slice(i + 1), p.slice(2))) {
        return true;
      }
      i++;
    }
    return false;
  }
};