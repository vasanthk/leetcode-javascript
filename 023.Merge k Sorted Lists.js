/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 *
 * Your runtime beats 92.59% of javascriptsubmissions.
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) {
    return null;
  }

  var ret = mergeFrom(lists, 0, lists.length - 1);

  return ret;
};

function mergeFrom(lists, l, r) {
  if (l === r) {
    return lists[l];
  }
  if (l + 1 === r) {
    return merge(lists[l], lists[r]);
  }

  var mid = Math.floor((l + r) / 2);
  var left = mergeFrom(lists, l, mid);
  var right = mergeFrom(lists, mid + 1, r);

  return merge(left, right);
}

function merge(l, r) {
  if (!l && !r) {
    return null;
  }
  if (!l || !r) {
    return l || r;
  }

  var head,
    p,
    result;

  while (l || r) {
    if (!l) {
      result = next(r, false);
    } else if (!r) {
      result = next(l, true);
    } else if (l.val < r.val) {
      result = next(l, true);
    } else {
      result = next(r, false);
    }

    if (p) {
      p.next = result[0];
    }
    p = result[0];
    if (!head) head = result[0];

    if (result[1]) {
      l = l.next;
    } else {
      r = r.next;
    }
  }

  return head;
}

function next(node, isLeft) {
  return [new ListNode(node.val), isLeft];
}