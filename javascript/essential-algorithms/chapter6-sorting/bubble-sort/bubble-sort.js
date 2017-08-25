function bubbleSort(data) {
  var flag = true;
  var tmp;

  while (flag) {
    flag = false;
    for (var i = 0, max = data.length-1; i < max; i += 1) {
      if (data[i] > data[i+1]) {
        tmp = data[i];
        data[i] = data[i+1];
        data[i+1] = tmp;
        flag = true;
      }
    }
  }
}
