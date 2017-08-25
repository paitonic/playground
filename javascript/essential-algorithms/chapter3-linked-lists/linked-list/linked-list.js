function Node(value) {
  this.value = value;
  this.next = null;
};

// connect one node to another
// [N1] -> [N2]
Node.prototype.connect = function(node) {
  this.next = node;
};

// disconnect current node from next node
// [N1] -> [N2] -> [N3] becomes [N1] -> [N2] [N3]
Node.prototype.disconnect = function() {
  this.next = null;
};

// free resources used by current node.
Node.prototype.destroy = function() {
  this.value = null;
  this.next = null;
}

function LinkedList() {
  this.head = new Node(null);
  this.tail = this.head;
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value);
  this.tail.connect(node);
  this.tail = node;
  return node;
};

LinkedList.prototype.remove = function(node) {
  var cursor = this.head;

  while (cursor) {
    if (cursor.next === node) {
      break;
    }

    cursor = cursor.next;
  }

  if (node === this.tail) {
    cursor.disconnect();
    this.tail = cursor;
  } else {
    cursor.connect(node.next);
  }

  node.destroy();
};

LinkedList.prototype.insert = function(after, node) {
  var cursor = this.head.next;

  while (cursor) {
    if (cursor === after) {
      break;
    }
    cursor = cursor.next;
  }

  node.connect(cursor.next);
  cursor.connect(node);
};

LinkedList.prototype.prepend = function(value) {
  var node = new Node(value);
  node.connect(this.head.next);
  this.head.connect(node);
};

LinkedList.prototype.iterate = function(callback) {
  var cursor = this.head.next;

  while (cursor) {
    callback(cursor);
    cursor = cursor.next;
  }
};

LinkedList.prototype.reverse = function() {
  var prev = null,
      current = this.head.next,
      next;

      while (current) {
        // save the reference to the next node
        next = current.next;

        // make current node to point to the prev node
        current.next = prev;

        // move the cursor to the next node
        prev = current;
        current = next;
      }

      this.head = null;
};

// NOTE: this works as long as node value is a primitive, to make it work for object values
// you have to implement function that returns copy of an object.
LinkedList.prototype.copy = function() {
  var cursor = this.head.next;
  var copyList = new LinkedList();

  while (cursor) {
    copyList.add(cursor.value);
    cursor = cursor.next;
  }

  return copyList;
};

// usage
var list = new LinkedList();
var node1 = list.add(1);
var node2 = list.add(2);
var node3 = list.add(3);
var node4 = list.add(4);
var node5 = list.add(5);

list.iterate(function(node) {
  console.log(node.value);
});

var newNode = new Node(9);
list.insert(node4, newNode);
list.add(7);
list.prepend(0);
