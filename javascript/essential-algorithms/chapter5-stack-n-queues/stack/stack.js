function Node(data) {
  this.data = data;
  this.next = null;
}

function Stack() {
  var sentinel = new Node(null);

  this.head = sentinel;
  this.len = 0;
}

// Sentinel -> [3] -> [2] -> [1]
Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.next = this.head.next;
  this.head.next = node;
  this.len += 1;

  return node;
};

Stack.prototype.pop = function() {
  if (!this.head.next) {
    throw "Stack is empty!";
  }

  var node = this.head.next;
  this.head.next = this.head.next.next;
  this.len -= 1;

  return node.data;
};

Stack.prototype.insertionSort = function() {
  var helperStack = new Stack();
  var element;

  while (this.len !== 0) {
    element = this.pop();

    while ((helperStack.len !== 0) && (helperStack.head.next.data > element)) {
      this.push(helperStack.pop());
    }
    helperStack.push(element);
  }

  return helperStack;
};

// usage
var stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(4);
