/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 *
 * Your runtime beats 100.00% of javascriptsubmissions.
 */

var wordBreak = function (str, wordDict, cache) {
  if (!str) {
    return [''];
  }

  if (str.length === 1 && wordDict.indexOf(str) !== -1) {
    return [str];
  }

  if (!wordDict || wordDict.length === 0) {
    return [''];
  }

  cache = cache || {};
  if (cache[str] !== undefined) {
    return cache[str];
  }

  var solutions = [];

  for (var i = 1; i <= str.length; i++) {
    if (wordDict.indexOf(str.slice(0, i)) !== -1) {
      // Recursion (Sub problem - Dynamic Programming)
      var chunks = wordBreak(str.slice(i), wordDict, cache);

      chunks.forEach(function (chunk) {
        // Note: the `chunk` could be a single word or a space separated valid sentence.
        solutions.push(str.slice(0, i) + (chunk ? (' ' + chunk) : ''));
      });
    }
  }

  cache[str] = solutions;

  return solutions;
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
// ["cat sand dog", "cats and dog"]