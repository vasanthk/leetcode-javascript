/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * @Reference:
 * http://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
 *
 * Your runtime beats 92.16% of javascriptsubmissions.
 */
// Hacky solution
var search = function(nums, target) {
  var i;
  for(i = 0; i < nums.length; i++) {
    if(nums[i] === target) {
      return i;
    }
  }
  return -1;
};

// Expected solution
var search = function (nums, target) {
  var i;
  var prev = -Infinity;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }

    if (nums[i] < prev) {
      // Pivot found out.
      break;
    }
    prev = nums[i];
  }

  // Now do binary search on the new sorted array (newArr)
  var foundIndex = binarySearch(nums.slice(i), target);
  return (foundIndex === -1) ? -1 : i + foundIndex;
};

var binarySearch = function (items, value) {
  var startIndex = 0,
    stopIndex = items.length - 1,
    middle = Math.floor((startIndex + stopIndex) / 2);
  // Alternative to Math.floor((a + b) / 2);
  // Right shift bitwise operator
  // middle = ((startIndex + stopIndex) >> 1);
  // or
  // middle = ~~((startIndex + stopIndex) / 2);

  while (items[middle] != value && startIndex < stopIndex) {

    //adjust search area
    if (value < items[middle]) {
      stopIndex = middle - 1;
    } else if (value > items[middle]) {
      startIndex = middle + 1;
    }

    //recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }

  //make sure it's the right value
  return (items[middle] != value) ? -1 : middle;
};