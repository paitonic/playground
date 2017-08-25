function Node(name, year, price) {
  this.name = name;
  this.year = year;
  this.price = price;
  this.nextYear = null;
  this.nextPrice = null;
};

function MultithreadedLinkedList() {
  this.head = new Node('', 0, 0);
};

MultithreadedLinkedList.prototype.add = function(name, year, price) {
  var gameNode = new Node(name, year, price);
  this.insertYear(gameNode);
  this.insertPrice(gameNode);
};

MultithreadedLinkedList.prototype.insertYear = function(node) {
  var cursor = this.head;

  while (cursor.nextYear && (cursor.nextYear.year < node.year)) {
    cursor = cursor.nextYear;
  }

  var nextNode = cursor.nextYear;
  cursor.nextYear = node;
  node.nextYear = nextNode;
};

MultithreadedLinkedList.prototype.insertPrice = function(node) {
  var cursor = this.head;

  while (cursor.nextPrice && (cursor.nextPrice.price < node.price)) {
    cursor = cursor.nextPrice;
  }

  var nextNode = cursor.nextPrice;
  cursor.nextPrice = node;
  node.nextPrice = nextNode;
};

// usage
var list = new MultithreadedLinkedList();
list.add('No Man\'s Sky', 2016, 60);
list.add('Rocket League', 2015, 20);
list.add('Insurgency', 2014, 25);
