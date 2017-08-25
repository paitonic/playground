function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function Deque() {
  this.head = new Node(null);
  this.tail = new Node(null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
}

Deque.prototype.appendFirst = function(data) {
    var node = new Node(data);

    var firstNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = firstNode;
    firstNode.prev = node;
};

Deque.prototype.popFirst = function() {
  var node = this.head.next;

  this.head.next = this.head.next.next;
  this.head.next.prev = this.head;

  return node.data;
};

Deque.prototype.appendLast = function(data) {
  var node = new Node(data);

  var lastNode = this.tail.prev;
  this.tail.prev = node;
  node.next = this.tail;
  node.prev = lastNode;
  lastNode.next = node;
};

Deque.prototype.popLast = function() {
  var node = this.tail.prev;

  var previousNode = this.tail.prev.prev;
  previousNode.next = this.tail;
  this.tail.prev = previousNode;

  return node.data;
};

// usage
var d = new Deque();
d.appendFirst(1);
d.appendFirst(2);
d.appendFirst(3);
