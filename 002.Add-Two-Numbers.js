/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * Runtime beats 75.81% of javascript submissions.
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null || l2 === null) {
    return l1 || l2;
  }

  //Instantiate a ListNode here, with head.next as header, pos as a pointer points to current position
  var head = new ListNode(0);
  var pos = head;
  var temp = 0;
  while (l2 !== null || l1 !== null || temp > 0) {

    //(l2!==null || l1!==null || temp>0) indicates that next digit is not null, so instantiate a Node and move to it
    pos.next = new ListNode(0);
    pos = pos.next;

    if (l1 !== null) {
      temp += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      temp += l2.val;
      l2 = l2.next;
    }

    pos.val = temp % 10;
    temp = parseInt(temp / 10, 10);
  }
  return head.next;
};