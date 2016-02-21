/**
 * @constructor
 *
 * Your runtime beats 91.18% of javascriptsubmissions.
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.currentCapacity = 0;
  this.queue = [];
  this.cache = {};
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] !== undefined) {
    this.queue.splice(this.queue.indexOf(key), 1);
    this.queue.push(key);
    return this.cache[key];
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
  if (key === undefined || value === undefined) return;

  if (this.cache[key] !== undefined) {
    this.queue.splice(this.queue.indexOf(key), 1);
    this.currentCapacity--;
  } else if (this.capacity === this.currentCapacity) {
    this.currentCapacity--;
    this.cache[this.queue.shift()] = undefined;
  }

  this.currentCapacity++;
  this.queue.push(key);
  this.cache[key] = value;
};
