/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */

// Quick JS way
var reverseWords = function (str) {
  if (str === null || str === undefined) return null;

  return str.trim().split(/\s+/).reverse().join(' ');
};

// Algorithmic way
var reverseWords = function (str) {
  if (str === null || str === undefined) return null;

  var reversed = '',
    inWord = false,
    word = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (inWord) {
        inWord = false;

        reversed = word + (reversed === '' ? '' : ' ') + reversed;

        word = '';
      }
    } else {
      inWord = true;
      word += str[i]
    }
  }

  if (inWord) {
    inWord = false;
    reversed = word + (reversed === '' ? '' : ' ') + reversed;
  }

  return reversed;
};
