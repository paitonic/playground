function EmptyNode() {
  this.nodeHeight = -1;
}

function TreeNode(val) {
    this.val = val;
    this.leftChild = new EmptyNode();
    this.rightChild = new EmptyNode();
    this.numOfChildren = 0;
    this.nodeHeight = 0;
}

TreeNode.prototype.copy = function(source) {
  this.val = source.val;
  this.leftChild = source.leftChild;
  this.rightChild = source.rightChild;
  this.numOfChildren = source.numOfChildren;
  this.nodeHeight = source.nodeHeight;
}

/* UNFINISHED
  TODO: node rotation.
*/
TreeNode.prototype.insert = function(newNode) {
  if (newNode.val < this.val) {
    if (this.leftChild instanceof EmptyNode) {
      this.leftChild = newNode;
    } else {
      this.leftChild.insert(newNode);
    }
  } else {
    if (this.rightChild instanceof EmptyNode) {
      this.rightChild = newNode;
    } else {
      this.rightChild.insert(newNode);
    }
  }

  this.numOfChildren += 1;

  // calculate node's height, max(left, right) + 1;
  this.nodeHeight = Math.max(this.leftChild.nodeHeight, this.rightChild.nodeHeight) + 1;

  if (this.isRightHeavy()) {
    if (this.rightChild.isLeftHeavy()) {
      // double left rotation
      var leftChild = this.rightChild;
      var rightChild = this.rightChild.rightChild;
      var subroot = this.rightChild.rightChild.leftChild;

      leftChild.rightChild = new EmptyNode();
      rightChild.leftChild = new EmptyNode();

      subroot.leftChild = leftChild;
      subroot.rightChild = rightChild;

      this.rightChild = subroot;
    } else {
      // single left rotation
      // var leftChild = this;
      var leftChild = new TreeNode(this.val);
      var rightChild = this.rightChild.rightChild;
      var subroot = this.rightChild;

      leftChild.rightChild = new EmptyNode();

      subroot.leftChild = leftChild;
      subroot.rightChild = rightChild;

      this.copy(subroot);
    }
  } else if (this.isLeftHeavy()) {
    if (this.leftChild.isRightHeavy()) {
      // double right rotation
      var rightChild = this.leftChild;
      var leftChild = this.leftChild.leftChild;
      var subroot = this.leftChild.leftChild.rightChild;

      rightChild.leftChild = new EmptyNode();
      leftChild.rightChild = new EmptyNode();

      subroot.leftChild = leftChild;
      subroot.rightChild = rightChild;

      this.leftChild = subroot;
    } else {
      // single right rotation
      var rightChild = new TreeNode(this.val);
      // var rightChild = this;
      var leftChild = this.leftChild.leftChild;
      var subroot = this.leftChild;

      rightChild.leftChild = new EmptyNode();

      subroot.leftChild = leftChild;
      subroot.rightChild = rightChild;

      // set the new subroot
      this.copy(subroot);
    }
  }
}

TreeNode.prototype.traversePreorder = function(node) {
  console.log(node.val);

  if (node.leftChild && !(node.leftChild instanceof EmptyNode)) {
    this.traversePreorder(node.leftChild);
  }

  if (node.rightChild && !(node.rightChild instanceof EmptyNode)) {
    this.traversePreorder(node.rightChild);
  }
}

TreeNode.prototype.heaviness = function() {
  return this.leftChild.nodeHeight - this.rightChild.nodeHeight;
}

TreeNode.prototype.isRightHeavy = function() {
  return this.heaviness() < -1;
}

TreeNode.prototype.isLeftHeavy = function() {
  return this.heaviness() > 1;
}

// var root = new TreeNode(null);
var root = new TreeNode(41);
var node2 = new TreeNode(20);
var node3 = new TreeNode(11);
var node4 = new TreeNode(29);
var node5 = new TreeNode(26);
var node6 = new TreeNode(65);
var node7 = new TreeNode(50);
var node8 = new TreeNode(23);
var node9 = new TreeNode(30);
var node10 = new TreeNode(31);
var node11 = new TreeNode(32);

root.insert(node2);
root.insert(node3);
root.insert(node4);
root.insert(node5);
root.insert(node6);
root.insert(node7);
root.insert(node8);
root.insert(node9);
root.insert(node10);
root.insert(node11);
