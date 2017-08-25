function Node(data, priority) {
  this.data = data;
  this.priority = priority;
  this.next = null;
}

function PriorityQueue() {
  this.head = new Node(null, 0);
  this.len = 0;
}

PriorityQueue.prototype.enqueue = function(data, priority) {
  var node = new Node(data, priority);

  if (this.head.next === null) {
    this.head.next = node;
    this.len += 1;
    return;
  }

  var cursor = this.head;
  while (cursor.next && (cursor.next.priority > node.priority)) {
    cursor = cursor.next;
  }

  var beforeMe = cursor.next;
  cursor.next = node;
  node.next = beforeMe;
};

PriorityQueue.prototype.dequeue = function() {
  if (!this.head.next) {
    throw 'Queue is empty!';
  }

  var node = this.head.next;
  this.head.next = this.head.next.next;
  node.next = null;

  return node;
};

// usage
var q = new PriorityQueue();
q.enqueue(100, 1);
q.enqueue(101, 5);
q.enqueue(102, 3);
q.enqueue(103, 6);

q.dequeue();
