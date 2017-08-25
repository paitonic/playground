function mergeSort(arr, scratch, start, end) {
  if (start == end) {
    return start;
  }

  var mid = Math.floor((start + end) / 2);
  
  mergeSort(arr, scratch, start, mid);
  mergeSort(arr, scratch, mid+1, end);
  merge(arr, scratch, start, mid, end);
}

function merge(arr, scratch, start, mid, end) {
  var r = mid + 1;
  var l = start;
  var i = start;

  // merging two arrays
  while ((l <= mid) && (r <= end)) {
    if (arr[l] <= arr[r]) {
      scratch[i] = arr[l];
      l += 1;
    } else {
      scratch[i] = arr[r];
      r += 1;
    }
    i += 1;
  }

  // pushing remaining elements
  while (l <= mid) {
    scratch[i] = arr[l];
    l += 1;
    i += 1;
  }

  while (r <= end) {
    scratch[i] = arr[r];
    r += 1;
    i += 1;
  }

  for (var j = start; j <= end; j += 1) {
    arr[j] = scratch[j];
  }
}
