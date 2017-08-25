function countingSort(arr, maxInt) {
  var counts = new Array(maxInt);

  for (var i = 0, maxi = maxInt; i <= maxi; i += 1) {
    counts[i] = 0;
  }

  var number;
  for (var j = 0, maxj = arr.length; j < maxj; j += 1) {
    number = arr[j];
    counts[number] = counts[number] + 1;
  }

  var idx = 0;
  for (var k = 0, maxk = maxInt; k <= maxk; k += 1) {
    for (var q = 1, maxq = counts[k]; q <= maxq; q += 1) {
      arr[idx] = k;
      idx += 1;
    }
  }
};
