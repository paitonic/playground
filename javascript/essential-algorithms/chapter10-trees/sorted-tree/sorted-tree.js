/*
    5
   / \
  2   6
 / \   \
1  4    9
  /    / \
 3    7  10
       \
        8
*/

function TreeNode(val) {
  this.val = val;
  this.leftChild = null;
  this.rightChild = null;
  this.ancestor = null;
}

TreeNode.prototype.addNode = function(val) {
  if (val < this.val) {
    if (!this.leftChild) {
      this.leftChild = new TreeNode(val);
      this.leftChild.ancestor = this;
    } else {
      this.leftChild.addNode(val);
    }
  } else {
    if (!this.rightChild) {
      this.rightChild = new TreeNode(val);
      this.rightChild.ancestor = this;
    } else {
      this.rightChild.addNode(val);
    }
  }
}

TreeNode.prototype.findNode = function(target) {
  if (this.val === target) {
    return this;
  }

  if (target < this.val) {
    if (!this.leftChild) {
      return null;
    }
    return this.leftChild.findNode(target);
  } else {
    if (!this.rightChild) {
      return null;
    }
    return this.rightChild.findNode(target);
  }
}

TreeNode.prototype.deleteNode = function(target) {
  var node = this.findNode(target);

  // if target node is leaf
  if (node.isLeafNode()) {
    if (node.ancestor.leftChild === node) {
      delete node.ancestor.leftChild;
    } else {
      delete node.ancestor.rightChild;
    }
    return;
  }

  // if target node has only one child
  if (node.leftChild && !node.rightChild) {
    node = node.leftChild;
    return;
  } else if (!node.leftChild && node.rightChild) {
    node = node.rightChild;
    return;
  }

  // if target node has two children
  if (node.leftChild && node.rightChild) {
    // find minimum
    var min = node.rightChild.findMin();

    // set ancestor's left child to null
    min.ancestor.leftChild = null;

    min.leftChild = node.leftChild;
    min.rightChild = node.rightChild;

    if (node.ancestor.rightChild === node) {
      node.ancestor.rightChild = min;
    } else {
      node.ancestor.leftChild = min;
    }
  }
}

TreeNode.prototype.isLeafNode = function() {
  return (!this.leftChild && !this.rightChild);
}

TreeNode.prototype.hasOnlyOneChild = function() {
  return (this.leftChild && !this.rightChild) || (!this.leftChild && this.rightChild)
}

// to find node with minimum value we have to look for inner most left child
TreeNode.prototype.findMin = function() {
  var minNode = this;

  while (minNode.leftChild) {
    minNode = minNode.leftChild;
  }

  return minNode;
}

// to find node with maximum value we have to look for inner most right child
TreeNode.prototype.findMax = function() {
  var maxNode = this;

  while (maxNode.rightChild) {
    maxNode = maxNode.rightChild;
  }

  return maxNode;
}

var root = new TreeNode(60);
root.addNode(35);
root.addNode(76);
root.addNode(17);
root.addNode(42);
root.addNode(11);
root.addNode(24);
root.addNode(23);
root.addNode(38);
root.addNode(45);
