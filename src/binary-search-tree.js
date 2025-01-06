const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    const node = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = node;
      return;
    } else {
      let curNode = this.rootNode;
      while (curNode) {
        if (data < curNode.data) {
          if (curNode.left === null) {
            curNode.left = node;
            return;
          } else {
            curNode = curNode.left;
          }
        } else if (data > curNode.data) {
          if (curNode.right === null) {
            curNode.right = node;
            return;
          } else {
            curNode = curNode.right;
          }
        }
      }
    }
  }

  has(data) {
    if (data === this.rootNode) {
      return true;
    } else {
      let curNode = this.rootNode;
      while (curNode) {
        if (data < curNode.data) {
          curNode = curNode.left;
        } else if (data > curNode.data) {
          curNode = curNode.right;
        } else if (data === curNode.data) {
          return true;
        }
      }
      return false
    }
  }

  find(data) {
    let curNode = this.rootNode;
    while (curNode) {
      if (data === curNode.data) {
        return curNode;
      } else if (data < curNode.data) {
        curNode = curNode.left;
      } else if (data > curNode.data) {
        curNode = curNode.right;
      }
    }
    return null;
  }

  remove(data) {
    
  }

  min() {
    let curNode = this.rootNode;

    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    let curNode = this.rootNode;

    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree
};