function selectionSort(data) {
  var idx, tmp, idx;

  for (var i = 0, maxi = data.length-1; i < maxi; i += 1) {
    idx = i;

    for (var j = i+1, maxj = data.length; j < maxj; j += 1) {
      if (data[j] < data[idx]) {
        idx = j;
      }
    }

    tmp = data[i];
    data[i] = data[idx];
    data[idx] = tmp;
  }
}

// usage
var data = [4, 8, 9, 2, 1, 5];
selectionSort(data);
console.log(data);
