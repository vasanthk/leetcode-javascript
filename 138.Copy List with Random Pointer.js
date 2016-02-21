/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 *
 * @TODO: Check for a simpler solution
 */
var copyRandomList = function (head) {
  if (!head) return null;

  var result = buildHash(head);

  var p = head,
    count = 0,
    key;


  while (p) {
    result.list[count].next = result.list[count + 1] === undefined ? null : result.list[count + 1];

    if (p.random) {

      key = p.random.label + '-' + (p.random.next ? p.random.next.label : 'null') + '-' + (p.random.random ? p.random.random.label : 'null');

      result.list[count].random = result.list[result.hash[key]];

    }

    p = p.next;
    count++;
  }

  return result.list[0];
};

function buildHash(head) {
  var hash = {},
    list = [],
    prev,
    key;

  var p = head,
    count = 0;

  while (p) {
    key = p.label + '-' + (p.next ? p.next.label : 'null') + '-' + (p.random ? p.random.label : 'null');
    hash[key] = count;

    list[count] = new RandomListNode(p.label);

    count++;
    p = p.next;
  }

  return {
    hash: hash,
    list: list
  };
}