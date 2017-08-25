// Heap's algorithm for permutations
var permuts = [];
function permutation(n, a, result) {
  if (n === 1) {
    console.log(a);
  } else {
    for (var i = 0; i < n - 1; i += 1) {
      permutation(n - 1, a, result);
      if (n % 2 === 0) {
        swap(a, i, n-1);
        result.push(a);
      } else {
        swap(a, 0, n-1);
        result.push(a);
      }
    }
    permutation(n - 1, a, result);
  }
}

function swap(arr, idx1, idx2) {
  var tmp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = tmp;
}
