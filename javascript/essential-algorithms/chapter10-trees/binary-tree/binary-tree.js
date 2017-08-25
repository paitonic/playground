function BinaryNode(data, leftChild, rightChild) {
  this.data = data;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

var root = new BinaryNode(0, null, null);
var node1 = new BinaryNode(1, null, null);
var node2 = new BinaryNode(2, null, null);
var node3 = new BinaryNode(3, null, null);
var node4 = new BinaryNode(4, null, null);
var node5 = new BinaryNode(5, null, null);
var node6 = new BinaryNode(6, null, null);

root.leftChild = node1;
root.rightChild = node2;

node1.leftChild = node3;
node1.rightChild = node4;

node2.leftChild = node5;
node2.rightChild = node6;
