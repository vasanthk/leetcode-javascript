/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var lt = 1;
    var rt = n;
    var m, bad;
    while (lt <= rt) {
      m = parseInt((lt + rt) / 2, 10);
      //console.log(m);
      if (isBadVersion(m)) {
        bad = m;
        rt = m - 1;
      } else {
        lt = m + 1;
      }
    }
    return bad;
  };
};