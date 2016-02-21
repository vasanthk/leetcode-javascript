/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 *
 * Your runtime beats 100.00% of javascriptsubmissions.
 */

var wordBreak = function (s, wordDict, store) {
  if (!s) {
    return [''];
  }

  if (s.length === 1 && wordDict.has(s)) {
    return [s];
  }

  if (!wordDict || wordDict.length === 0) {
    return [''];
  }

  store = store || {};
  if (store[s] !== undefined) {
    return store[s];
  }

  var solutions = [];

  for (var i = 1; i <= s.length; i++) {
    if (wordDict.has(s.slice(0, i))) {
      // Recursion (Sub problem - Dynamic Programming)
      wordBreak(s.slice(i), wordDict, store).forEach(function (w) {
        solutions.push(s.slice(0, i) + (w ? (' ' + w) : ''));
      });
    }
  }

  store[s] = solutions;

  return solutions;
};

console.log(wordBreak("catsanddog", new Set(["cat", "cats", "and", "sand", "dog"])));
// ["cat sand dog", "cats and dog"]