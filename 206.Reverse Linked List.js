/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 * Your runtime beats 94.95% of javascriptsubmissions.
 */
var reverseList = function (head) {
  if (head === null) return null;

  var node = head;
  while (node.next !== null) {
    var newHead = node.next;
    node.next = newHead.next;

    newHead.next = head;
    head = newHead;
  }

  return head;
};