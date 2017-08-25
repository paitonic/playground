function Node(data) {
  this.data = data;
  this.next = null;
}

function Queue() {
  this.head = new Node(null);
  this.tail = this.head;
}

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (this.head.next === null) {
    this.head.next = node;
  } else {
    this.tail.next = node;
  }
  
  this.tail = node;
};

Queue.prototype.dequeue = function() {
  var node = this.head.next;

  if (node === null) {
      throw "Queue is empty!";
  }

  this.head.next = this.head.next.next;

  return node;
};
