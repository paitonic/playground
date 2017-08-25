function Cell(key, data) {
  this.data = data;
  this.key = key;
  this.isDeleted = false;
}

function OAHash(size) {
  this.size = size || 8;
  this.hash = new Array(this.size);

  for (var i = 0; i < this.size; i += 1) {
    this.hash[i] = new Cell(undefined, undefined);
  }
}

OAHash.prototype.add = function(key, data) {
  // make sure there is enough space in hash before adding
  if (this.hash.length === this.size) {
    // expand & rehash
  }

  var idx = this.findEmptySlot(key);

  this.hash[idx].data = data;
  this.hash[idx].key = key;
  this.hash[idx].isDeleted = false;
};

OAHash.prototype.get = function(key) {};
OAHash.prototype.remove = function(key) {};

OAHash.prototype.findEmptySlot = function(key) {
  var idx = this._hash(key);

  if (this.hash[idx].data === undefined || this.hash[idx].isDeleted || this.hash[idx].key === key) {
    return idx;
  }

  // if collision found use double hashing technique to solve the collision
  var trial = 1;
  while (trial < this.hash.length) {
    idx = (this._hash(key) + trial * this._secondHash(key)) % this.hash.length;

    if (this.hash[idx].data === undefined || this.hash[idx].isDeleted) {
      return idx;
    }

    trial += 1;
  }
}

// hashing function converts key into numeric representation
OAHash.prototype._hash = function(key) {
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

OAHash.prototype._secondHash = function(key) {
  if (typeof key === 'string') {
    return key.charCodeAt(0) % this.hash.length;
  }

  else if (typeof key === 'number') {
    return key;
  }
}
