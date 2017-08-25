function Node(key, data) {
  this.key = key;
  this.data = data;
  this.next = null;
}

function LinkedList() {
  // head node will keep track of how much nodes in a linked list.
  var node = new Node(null, 0);
  this.head = node;
  this.tail = this.head;
}

LinkedList.prototype.add = function(key, data) {
  var node = new Node(key, data);

  var current = this.head.next;
  var next;

  while (current) {
    // overwrite value with duplicate keys
    if (current.key === node.key) {
      next = current.next;
      current = node;
      current.next = next;

      // update tail
      if (current.next == null) {
        this.tail = current;
      }

      return;
    }

    current = current.next;
  }

  this.head.data += 1;
  this.tail.next = node;
  this.tail = node;
}

LinkedList.prototype.remove = function(key) {
  var current = this.head.next;
  var previous = this.head;
  var node;

  while (current != null) {
    if (current.key === key) {
      node = current;
      previous.next = current.next;
      this.head.data -= 1;
      return;
    }

    previous = current;
    current = current.next;
  }
}

function ChainedHash(size) {
  this.items = 0;
  this.size = size || 8;
  this.hash = new Array(this.size);

  for (var i = 0; i < this.hash.length; i += 1) {
    this.hash[i] = new LinkedList();
  }
};

ChainedHash.prototype.add = function(key, data) {
  var idx = this._hash(key);

  // update items counter
  this.items -= this.hash[idx].head.data;
  this.hash[idx].add(key, data);
  this.items += this.hash[idx].head.data;
};

ChainedHash.prototype.remove = function(key) {
  var idx = this._hash(key);

  // update items counter
  this.items -= this.hash[idx].head.data;
  this.hash[idx].remove(key);
  this.items += this.hash[idx].head.data;
};

ChainedHash.prototype.get = function(k) {
  var idx = this._hash(k);

  var node = this.hash[idx].head.next;
  while (node) {
    if (node.key === k) {
      return node.data;
    }
    node = node.next;
  }

  throw 'Item with such key not found';
};

// hashing function converts key into numeric representation
ChainedHash.prototype._hash = function(key) {
  // for sake of simplicity, if key is a string then hash will be just sum of
  // all characters
  if (typeof key === 'string') {
    var val = 0;

    key.split('').forEach(function(c) {
      val += c.charCodeAt(0);
    });

    return val % this.hash.length;

  } else if (typeof key === 'number') {
    return key % this.hash.length;

  } else {
    throw "Oops, supported type of keys are can be of type string or number";
  }
};

// expand hash table
ChainedHash.prototype._expand = function() {
  var i = this.size;
  var additionalSpace = new Array(this.size * 2 - this.size);
  this.hash = this.hash.concat(additionalSpace);

  for (i = i; i < this.hash.length; i += 1) {
    this.hash[i] = new LinkedList();
  }

  this.size = this.hash.length;

  // rehash all values
  this._rehash(this.size);
}

// when size of hash table is changed, all items should be reinserted using the new hash function.
ChainedHash.prototype._rehash = function(size) {
  var chainedHashTable = new ChainedHash(size);

  // go over existing hash table and reinsert values to the new table
  for (var i = 0; i < this.size; i += 1) {
    node = this.hash[i].head.next;
    while (node) {
      chainedHashTable.add(node.key, node.data);
      node = node.next;
    }
  }

  this.hash = chainedHashTable.hash;
}

// calculate load factor assuming that items are equally distributed across the array (buckets)
ChainedHash.prototype._loadFactor = function() {
  return this.items  / this.size;
}
