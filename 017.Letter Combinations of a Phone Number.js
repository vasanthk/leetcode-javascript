/**
 * @param {string} digits
 * @return {string[]}
 *
 * Your runtime beats 93.33% of javascriptsubmissions.
 */
var letterCombinations = function (digits) {
  var result = [];

  if (digits === null || digits.length === 0) {
    return result;
  }

  var str = [];

  generate(digits, 0, str, result);
  return result;
};

var generate = function (digits, depth, str, result) {
  if (digits.length === depth) {
    result.push(str.join(''));
    return;
  }

  var letters = convertDigitToLetters(digits[depth]);

  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    str.push(letter);
    generate(digits, depth + 1, str, result);
    str.pop();
  }
};

var convertDigitToLetters = function (digit) {
  switch (digit) {
    case '1':
      return '';
    case '2':
      return 'abc';
    case '3':
      return 'def';
    case '4':
      return 'ghi';
    case '5':
      return 'jkl';
    case '6':
      return 'mno';
    case '7':
      return 'pqrs';
    case '8':
      return 'tuv';
    case '9':
      return 'wxyz';
    case '0':
      return ' ';
  }
};