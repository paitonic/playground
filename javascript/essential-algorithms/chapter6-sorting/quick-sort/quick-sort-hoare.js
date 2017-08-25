function quickSortHoare(arr, start, end) {
  var p;
  if (start < end) {
    p = partitionHoare(arr, start, end);
    quickSortHoare(arr, start, p);
    quickSortHoare(arr, p+1, end);
  }
}

function partitionHoare(arr, start, end) {
  var pivot = arr[start],
      l = start;
      r = end;

  while (true) {
    while (arr[l] < pivot) {
      l += 1;
    }

    while (arr[r] > pivot) {
      r -= 1;
    }

    if (l >= r) {
      return r;
    }

    swap(arr, l, r);

    l += 1;
    r -= 1;
  }
}
