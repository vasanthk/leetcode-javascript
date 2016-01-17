/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 *
 * Runtime beats 60.00% of javascript submissions.
 */
var wordPattern = function (pattern, str) {
  var patternBlocks = pattern.split('');
  var strBlocks = str.split(' ');

  if (patternBlocks.length !== strBlocks.length) {
    return false;
  }

  var cache1 = {};
  var cache2 = {};
  var patternChunk;
  var strChunk;

  for (var i = 0; i < pattern.length; i++) {
    patternChunk = patternBlocks[i];
    strChunk = strBlocks[i];

    if (cache1[patternChunk] === undefined) {
      cache1[patternChunk] = strChunk;

      if (cache2[strChunk] === undefined) {
        cache2[strChunk] = patternChunk;
      } else {
        if (cache2[strChunk] !== patternChunk) {
          return false;
        }
      }
    } else {
      if (cache1[patternChunk] !== strChunk) {
        return false;
      }
    }
  }
  return true;
};