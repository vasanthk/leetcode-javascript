/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 *
 * Your runtime beats 96.43% of javascriptsubmissions.
 */
var MinStack = function () {
  this.min = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MinStack.prototype.push = function (x) {
  var min = this.getMin();

  this.stack.push(x);

  if (min === undefined || min >= x) {
    this.min.push(x);
  }
};

/**
 * @returns {void}
 */
MinStack.prototype.pop = function () {
  var val = this.stack.pop();
  var min = this.getMin();

  if (val === min) {
    this.min.pop();
  }
};

/**
 * @returns {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @returns {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
  // Caveat: If the first element was the min and it was popped, the array would be empty.
  // But the question doesn't mention that scenario, so we are good for now.
};