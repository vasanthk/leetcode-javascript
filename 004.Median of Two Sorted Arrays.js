/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * Your runtime beats 89.47% of javascriptsubmissions.
 */

var findMedianSortedArrays = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;

  if (len1 === 0 && len2 === 0) return null;

  var mid = Math.floor((len1 + len2) / 2);

  var m1 = kth(nums1, len1, nums2, len2, mid + 1);

  if ((len1 + len2) % 2 === 0) {
    return (m1 + kth(nums1, len1, nums2, len2, mid)) / 2;
  }

  return m1;
};

function kth(a, la, b, lb, k) {
  if (lb > la) return kth(b, lb, a, la, k);
  if (lb === 0) return a[k - 1];
  if (k === 1) return Math.min(a[0], b[0]);

  // divide into two parts
  var j = Math.min(lb, Math.floor(k / 2));
  // # of elements smaller than a[i-1] plus # of elements smaller than b[j-1] === k
  var i = k - j;

  // the smaller one guarantees that elements in the left of which are smaller than the kth element
  if (a[i - 1] > b[j - 1])
  // find (k-j)th smallest element in array (b+j)
    return kth(a, i, b.slice(j), lb - j, k - j);

  // find (k-i)th smallest element in array (a+i)
  return kth(a.slice(i), la - i, b, j, k - i);
}