function quickSortLomuto(arr, start, end) {
  var p;
  if (start < end) {
    p = partitionLomuto(arr, start, end);
    quickSortLomuto(arr, start, p-1);
    quickSortLomuto(arr, p+1, end);
  }
}

function partitionLomuto(arr, start, end) {
  var pivot = arr[end],
      i = start;

  for (var j = start, max = end; j < max; j += 1) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i += 1;
    }
  }
  swap(arr, i, end);

  return i;
}
