function binarySearch(arr, target) {
  var min = 0;
  var max = arr.length-1;
  var mid;

  while (min <= max) {
    mid = parseInt((min + max) / 2);
    if (arr[mid] > target) {
      max = mid-1;
    } else if (arr[mid] < target) {
      min = mid+1;
    } else {
      return mid;
    }
  }

  return -1;
}
