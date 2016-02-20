/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 *
 * Your runtime beats 88.57% of javascriptsubmissions.
 */
var levelOrder = function (root) {
  var result = [];

  if (root === null) {
    return result;
  }

  var queue = [];
  var temp = [];
  var currLevelCount = 1; // Since there is only one node in the root level.
  var nextLevelCount = 0;

  queue.push(root);

  while (queue.length !== 0) {
    var p = queue.shift();
    temp.push(p.val);
    currLevelCount--;   // decrease count after pushing to temp.

    if (p.left) {
      queue.push(p.left);
      nextLevelCount++;   // increase count for every new node.
    }

    if (p.right) {
      queue.push(p.right);
      nextLevelCount++;   // increase count for every new node.
    }

    if (currLevelCount === 0) {
      // All nodes in current level have been visited
      result.push(temp);
      currLevelCount = nextLevelCount;
      nextLevelCount = 0;
      temp = [];  // reset temp.
    }
  }
  return result;
};