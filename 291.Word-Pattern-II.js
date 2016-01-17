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
  var patternStrMap = {}; // A map of key-value pairs where key -> pattern letter and value -> corresponding string chunk from str.
  var strChunkSet = [];   // Set containing unique string chunks which are being matched with the pattern letters

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
  } else {
    // pattern character does not exist in the patternStrMap
    for (var i = currStrIndex; i < str.length; i++) {
      var strChunk = str.substring(currStrIndex, i + 1);
      if (strChunkSet.indexOf(strChunk) !== -1) {
        continue;
      }

      // Create or update it.
      patternStrMap[currentPatternChar] = strChunk;

      if (strChunkSet.indexOf(strChunk) === -1) {
        strChunkSet.push(strChunk);
      }
      // Continue to match the rest
      if (isMatch(str, i + 1, pattern, currPatternIndex + 1, patternStrMap, strChunkSet)) {
        return true;
      }

      // backtracking
      if (currentPatternChar in patternStrMap) {
        delete patternStrMap[currentPatternChar];
      }

      var strChunkIndex = strChunkSet.indexOf(strChunk);
      if (strChunkIndex > -1) {
        strChunkSet.splice(strChunkIndex, 1);
      }
    }
  }
  // No luck
  return false;
};