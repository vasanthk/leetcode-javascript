/**
 * @constructor
 * Initialize your data structure here.
 *
 * Your runtime beats 100.00% of javascriptsubmissions.
 */
var TrieNode = function (val) {
  this.isLast = false;
  this.children = [];
  this.val = val;
};

var Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function (word) {
  var i = 0,
    j = 0,
    l,
    temp,
    children,
    current = this.root;

  var letters = word.split('');

  for (j = 0; j < letters.length; j++) {
    l = letters[j];
    children = current.children;
    for (i = 0; i < children.length; i++) {
      if (children[i].val === l) {
        current = current.children[i];
        break;
      }
    }
    if (i === children.length) {
      temp = new TrieNode(l);
      children.push(temp);
      current = temp;
    }
    if (j === letters.length - 1) {
      current.isLast = true;
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function (word) {
  var current = this.root,
    i,
    j,
    l,
    children;

  var letters = word.split('');

  for (j = 0; j < letters.length; j++) {
    l = letters[j];
    children = current.children;
    for (i = 0; i < children.length; i++) {
      if (children[i].val === l) {
        current = children[i];
        break;
      }
    }
    if (i === children.length) return false;
  }

  if (j === letters.length && current.isLast) return true;

  return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function (prefix) {
  var current = this.root,
    i,
    j,
    l,
    children;

  var letters = prefix.split('');

  for (j = 0; j < letters.length; j++) {
    l = letters[j];
    children = current.children;
    for (i = 0; i < children.length; i++) {
      if (children[i].val === l) {
        current = children[i];
        break;
      }
    }
    if (i === children.length) return false;
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var trie = new Trie();
 * trie.insert("somestring");
 * trie.search("key");
 */