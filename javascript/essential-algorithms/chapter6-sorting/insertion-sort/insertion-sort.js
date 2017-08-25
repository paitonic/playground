function insertionSort(data) {
  var element;
  var j;
  for (var i = 1, max = data.length; i < max; i += 1) {
    element = data[i];
    j = i;

    // find insertion position
    while (j > 0 && data[j - 1] > element) {
      // swap current element and previous one
      data[j] = data[j - 1];
      j -= 1;
    }
    data[j] = element;
  }
}

// usage
var data = [4, 8, 9, 2, 1, 5];
insertionSort(data);
console.log(data);
