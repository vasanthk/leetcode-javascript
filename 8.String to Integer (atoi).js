/**
 * @param {string} str
 * @return {number}
 *
 * Your runtime beats 100.00% of javascriptsubmissions.
 */

var myAtoi = function(str) {

  var val = parseInt(str);
  if(str === null || str.length === 0 || isNaN(val)){
    return 0;
  }

  var maxNegInt = -Math.pow(2,31);  // Maybe use Number.MAX_SAFE_INTEGER ?
  var maxInt = Math.pow(2,31) - 1; // Maybe use Number.MIN_SAFE_INTEGER ?

  if(val > 0 && val > maxInt){
    return maxInt;
  }

  if(val < 0 && val < maxNegInt){
    return maxNegInt;
  }

  return val;
};