function TreeNode(val) {
  this.children = [];
  this.val = val;
  this.LEFT = 0;
  this.RIGHT = 1;
}

TreeNode.prototype.addChild = function(child) {
  this.children.push(child);
}

/*
    D
   / \
  B   E
 / \
A   C
*/

var root = new TreeNode('D');
var node1 = new TreeNode('A');
var node2 = new TreeNode('B');
var node3 = new TreeNode('C');
var node4 = new TreeNode('D');
var node5 = new TreeNode('E');

root.addChild(node2);
root.addChild(node5);
node2.addChild(node1);
node2.addChild(node3);

TreeNode.prototype.traversePreorder = function(node) {
  // process node
  console.log(node.val);

  // process left child
  if (node.children[node.LEFT]) {
    this.traversePreorder(node.children[node.LEFT]);
  }

  //  and the right child
  if (node.children[node.RIGHT]) {
    this.traversePreorder(node.children[node.RIGHT]);
  }
}

TreeNode.prototype.traverseInorder = function(node) {
  // process left child
  if (node.children[node.LEFT]) {
    this.traverseInorder(node.children[node.LEFT]);
  }

  // process node
  console.log(node.val);

  // process right child
  if (node.children[node.RIGHT]) {
    this.traverseInorder(node.children[node.RIGHT]);
  }
}

TreeNode.prototype.traversePostorder = function(node) {
  // process left child
  if (node.children[node.LEFT]) {
    this.traversePostorder(node[children[node.LEFT]]);
  }

  // process right child
  if (node.children[node.RIGHT]) {
    this.traversePostorder(node[children[node.RIGHT]]);
  }

  // process node
  console.log(node.val);
}

TreeNode.prototype.traverseBreadthFirst = function(node) {
  var children = [node];
  var current;

  while (true) {
    current = children.shift();

    if (!current) {
      break;
    }

    console.log(current.val);

    if (current.children[current.LEFT]) {
      children.push(current.children[current.LEFT]);
    }

    if (current.children[current.RIGHT]) {
      children.push(current.children[current.RIGHT]);
    }

  }
}
