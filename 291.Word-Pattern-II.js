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
  var patternStrMap = {};
  var strChunkSet = [];

  return isMatch(str, 0, pattern, 0, patternStrMap, strChunkSet);
};

var isMatch = function (str, currStrIndex, pattern, currPatternIndex, patternStrMap, strChunkSet) {
  // When both the string and the pattern have been checked completely and match
  if (currStrIndex === str.length && currPatternIndex === pattern.length) {
    return true;
  }

  // When one of either str or pattern has been checked completely, but the other isn't.
  if (currStrIndex === str.length || currPatternIndex === pattern.length) {
    return false;
  }

  // Get the current pattern character
  var currentPatternChar = pattern[currPatternIndex];

  // if the pattern character exists in patternStrMap
  if (currentPatternChar in patternStrMap) {
    var currentMappedStr = patternStrMap[currentPatternChar];

    // then check if we can use it to match str[currStrIndex... currStrIndex+s.length]
    if (str.substr(currStrIndex, currentMappedStr.length) !== currentMappedStr) {
      return false;
    }

    // If it can match, great, continue to match the rest.
    return isMatch(str, currStrIndex + currentMappedStr.length, pattern, currPatternIndex + 1, patternStrMap, strChunkSet);
  }

  // pattern character does not exist in the patternStrMap
  for (var k = currStrIndex; k < str.length; k++) {
    var strChunk = str.substring(currStrIndex, k + 1);
    if (strChunkSet.indexOf(strChunk) !== -1) {
      continue;
    }

    // Create or update it.
    patternStrMap[currentPatternChar] = strChunk;

    if (strChunkSet.indexOf(strChunk) == -1) {
      strChunkSet.push(strChunk);
    }
    // Continue to match the rest
    if (isMatch(str, k + 1, pattern, currPatternIndex + 1, patternStrMap, strChunkSet)) {
      return true;
    }

    // backtracking
    if (currentPatternChar in patternStrMap) {
      delete patternStrMap[currentPatternChar];
    }

    var pIndex = strChunkSet.indexOf(strChunk);
    if (pIndex > -1) {
      strChunkSet.splice(pIndex, 1);
    }
  }

  // No luck
  return false;
};