/**
 * @param {string} s
 * @return {number}
 *
 * Your runtime beats 91.49% of javascriptsubmissions.
 */
var titleToNumber = function(s) {
  var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var colNum = 0;
  var tempCol;

  var sArr = s.split('');
  var totalChars = s.length;

  while(sArr.length > 0) {
    tempCol = alphabets.indexOf(sArr[sArr.length - 1]) + 1;
    colNum += tempCol * Math.pow(26, totalChars - sArr.length);
    sArr.pop();
  }

  return colNum;
};