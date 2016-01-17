/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 *
 * Your runtime beats 100% of javascript submissions.
 *
 * @Reference:
 * Java version: https://leetcode.com/discuss/63252/share-my-java-backtracking-solution
 */

var wordPatternMatch = function (pattern, str) {
  var map = {};
  var set = [];

  return isMatch(str, 0, pattern, 0, map, set);
};

var isMatch = function (str, i, pat, j, map, set) {
  // When both the string and the pattern have been checked completely and match
  if (i === str.length && j === pat.length) {
    return true;
  }

  // When one of either str or pat has been checked completely, but the other isn't.
  if (i === str.length || j === pat.length) {
    return false;
  }

  // Get the current pattern character
  var c = pat[j];

  // if the pattern character exists in map
  if (c in map) {
    var s = map[c];

    // then check if we can use it to match str[i... i+s.length]
    if (str.substr(i, s.length) !== s) {
      return false;
    }

    // If it can match, great, continue to match the rest.
    return isMatch(str, i + s.length, pat, j + 1, map, set);
  }

  // pattern character does not exist in the map
  for (var k = i; k < str.length; k++) {
    var p = str.substring(i, k + 1);
    if (set.indexOf(p) !== -1) {
      continue;
    }

    // Create or update it.
    map[c] = p;

    if (set.indexOf(p) == -1) {
      set.push(p);
    }
    // Continue to match the rest
    if (isMatch(str, k + 1, pat, j + 1, map, set)) {
      return true;
    }

    // backtracking
    if (c in map) {
      delete map[c];
    }

    var pIndex = set.indexOf(p);
    if (pIndex > -1) {
      set.splice(pIndex, 1);
    }
  }

  // No luck
  return false;
};