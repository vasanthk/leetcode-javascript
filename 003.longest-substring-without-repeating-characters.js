/**
 * @param {string} s
 * @return {number}
 *
 * Runtime beats 72.93% of javascript submissions.
 */
var lengthOfLongestSubstring = function (s) {
  if (!s) { return 0; }
  var map = [];
  var len = 0;
  var start = 0;
  var maxlen = len;

  for (var i = 0; i < s.length; i++) {
    var currChar = s[i];
    if (map[currChar] !== undefined && map[currChar] >= start) {
      start = map[currChar] + 1;
      len = i - start;
    }

    len++;

    if (len > maxlen) {
      maxlen = len;
    }

    map[currChar] = i;
  }
  return maxlen;
};