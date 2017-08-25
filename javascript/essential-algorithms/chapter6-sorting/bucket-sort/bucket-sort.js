// this bucket sort makes an assumption that elements in array are in 0-99 range
function bucketSort(arr) {
  var numberOfBuckets = 10; // number of bucketSort
  var elementsPerBucket = 10; // number of elements per bucket
  var buckets = [];

  // create buckets
  for (var i = 0; i < numberOfBuckets; i += 1) {
    buckets[i] = [];
  }

  // distribute values into the buckets
  var bucketIdx;
  for (i = 0, maxi = arr.length; i < maxi; i += 1) {
    bucketIdx = getBucketIdx(elementsPerBucket, arr[i]);
    buckets[bucketIdx].push(arr[i]);
  }

  // sort each bucket (i.e using bubblesort or other sorting method)
  for (i = 0; i < numberOfBuckets; i += 1) {
      bubbleSort(buckets[i]);
  }

  // combine all buckets into original array
  var idx = 0;
  for (i = 0; i < numberOfBuckets; i += 1) {
    for (var j = 0; j < buckets[i].length; j += 1) {
      arr[idx] = buckets[i][j];
      idx += 1;
    }
  }
}

function getBucketIdx(elementsPerBucket, number) {
  return parseInt(number / elementsPerBucket);
}

function bubbleSort(bucket) {
  var notSorted = true;

  while (notSorted) {
    notSorted = false;
    for (var i = 0, max = bucket.length-1; i < max; i += 1) {
      if (bucket[i] > bucket[i+1]) {
        notSorted = true;
        swap(bucket, i, i+1);
      }
    }
  }
}

function swap(arr, idx1, idx2) {
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}

var arr = [9, 5, 1, 15, 40, 35, 12, 22, 30, 45, 39];
