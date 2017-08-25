function Heap() {
  this.heap = [];
}

Heap.prototype.add = function(n) {
  this.heap.push(n);

  // if this is a single element in list, nothing to sort.
  if (this.heap.length === 1) {
    return;
  }

  var nIdx = this.heap.length - 1;
  var parentIdx = Math.floor((nIdx - 1) / 2);
  var temp;

  while (parentIdx >= 0) {
    // item already sorted
    if (n < this.heap[parentIdx]) {
      break;
    }

    temp = this.heap[parentIdx];
    this.heap[parentIdx] = n;
    this.heap[nIdx] = temp;
    nIdx = parentIdx;
    parentIdx = Math.floor(nIdx - 1) / 2;
  }
};

Heap.prototype.removeTop = function() {
  var removedElement = this.heap[0];
  // move bottom-most element to be the root
  this.heap[0] = this.heap[this.heap.length-1];
  this.heap.splice(this.heap.length-1, 1);

  var idx = 0,
      leftChildIdx = null,
      rightChildIdx = null,
      nextChildIdx = null;

  while (true) {
    leftChildIdx = 2 * idx + 1;
    rightChildIdx = 2 * idx + 2;

    if (leftChildIdx > this.heap.length-1) {
      leftChildIdx = this.heap.length-1;
    }

    if (rightChildIdx > this.heap.length-1) {
      rightChildIdx = this.heap.length-1;
    }

    // if parent is greater than both of his childs, then parent is in place it should be.
    if ((this.heap[idx] >= this.heap[leftChildIdx]) && (this.heap[idx] >= this.heap[rightChildIdx])) {
      break;
    }

    if (this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
        nextChildIdx = leftChildIdx;
    } else {
        nextChildIdx = rightChildIdx;
    }

    this._swap(nextChildIdx, idx);
    idx = nextChildIdx;
  }

  return removedElement;
};

Heap.prototype._swap = function(indxA, indxB) {
  var temp = this.heap[indxA];
  this.heap[indxA] = this.heap[indxB];
  this.heap[indxB] = temp;
};

Heap.prototype.remove = function(n) {
  // handle special case if removed node is last node
  if (this.heap[this.heap.length-1] === n) {
    this.heap.splice(this.heap.length-1, 1);
  }

  if (this.heap[0] === n) {
      throw 'Please use removeTop() to remove top element';
  }

  // find and remove the element from the heap
  var idx = 0;
  for (var i = 0, max = this.heap.length; i < max; i += 1) {
    if (this.heap[i] === n) {
      idx = i;
      this.heap.splice(i, 1);
      break;
    }
  }

  // restore heap property
  var right = null;
  var left = null;
  var nextChild = null;

  while (true) {
    left = 2 * idx + 1;
    right = 2 * idx + 2;

    if (left > this.heap.length-1) {
      left = this.heap.length - 1;
    }

    if (right > this.heap.length-1) {
      right = this.heap.length - 1;
    }

    // heap property restored
    if (this.heap[idx] >= this.heap[left] && this.heap[idx] >= this.heap[right]) {
      break;
    }

    // pick next biggest child node between left/right nodes
    if (this.heap[left] > this.heap[right]) {
      nextChild = left;
    } else {
      nextChild = right;
    }

    this._swap(nextChild, idx);
    idx = nextChild;
  }
};

// build a heap structure from an array
Heap.prototype.makeHeap = function(arr) {
  var current, parent;
  for (var i = 0, max = arr.length; i < max; i += 1) {
    this.heap.push(arr[i]);
    current = i;

    while (true) {
      parent = Math.floor((current - 1) / 2);

      if (this.heap[parent] && (this.heap[current] > this.heap[parent])) {
        this._swap(current, parent);
      } else {
        break;
      }

      current = parent;
    }
  }
}

// sort array using heapsort.
Heap.prototype.heapsort = function(arr) {
    this.makeHeap(arr);

    var current, next;
    for (var i = arr.length-1; i >= 0; i -= 1) {
      // save root element to i-1
      arr[i] = this.heap[0];

      // to keep the tree, move last node to root
      this.heap[0] = this.heap[this.heap.length-1];

      // remove last node
      this.heap.splice(this.heap.length-1, 1);

      current = 0;

      // heapify
      while (this.heap.length > 0) {
        left = 2 * current + 1;
        right = 2 * current + 2;

        if (left > this.heap.length-1) {
          left = this.heap.length-1;
        }

        if (right > this.heap.length-1) {
          right = this.heap.length-1;
        }

        // heapified condition met if both of the children are smaller than the parent node.
        if (this.heap[current] >= this.heap[left] && this.heap[current] >= this.heap[right]) {
          break;
        }

        // choose the biggest between the two nodes.
        if (this.heap[left] > this.heap[right]) {
          next = left;
        } else {
          next = right;
        }

        this._swap(next, current);
        current = next;
      }
    }
};

// usage
var heap = new Heap();
heap.add(15);
heap.add(11);
heap.add(12);
heap.add(2);
heap.add(6);
heap.add(3);
heap.add(10);
heap.add(8);
