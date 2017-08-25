function Node(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

Node.prototype.destroy = function() {
  this.value = null;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  var sentinel = new Node(null);
  this.head = sentinel;
  this.tail = sentinel;
};

DoublyLinkedList.prototype.add = function(value) {
  var node = new Node(value);

  if (this.tail === this.head) {
      this.head.next = node;
  }

  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;

  return node;
};

DoublyLinkedList.prototype.remove = function(node) {
  var previousNode = node.prev;
  var nextNode = node.next;

  previousNode.next = nextNode;

  if (node !== this.tail) {
    nextNode.prev = previousNode;
  } else {
    this.tail = previousNode;
  }

  node.destroy();
}

DoublyLinkedList.prototype.insert = function(after, node) {
  var nextNode = after.next;
  after.next = node;
  node.prev = after;

  // if next node is a tail, update the tail to point to the new node.
  if (nextNode === null) {
    this.tail = node;
  } else {
    node.next = nextNode;
    nextNode.prev = node;
  }
}

// usage
var list = new DoublyLinkedList();
var node1 = list.add(1);
var node2 = list.add(2);
var node3 = list.add(3);
var node4 = list.add(4);
var node5 = list.add(5);
var node6 = new Node(6);

list.remove(node3);
list.insert(node4, node6);
