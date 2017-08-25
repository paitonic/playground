describe('quickSort-Hoare', function() {
  it('should sort an array', function() {
      var arr = [5, 6, 2, 4, 1, 3];
      quickSortHoare(arr, 0, arr.length-1);

      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should sort array containing duplicate values', function() {
    var arr = [6, 7, 5, 9, 5, 3, 8, 4, 0, 3, 6];
    quickSortHoare(arr, 0, arr.length-1);

    expect(arr).toEqual([0, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9]);
  });

  it('should sort an array containing mostly duplicate values', function() {
    var arr = [2, 1, 1, 1, 1];
    quickSortHoare(arr, 0, arr.length-1);

    expect(arr).toEqual([1, 1, 1, 1, 2]);
  });

  it('should sort an already sorted array', function() {
    var arr = [1, 2, 3, 4, 5];
    quickSortHoare(arr, 0, arr.length-1);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reversed array', function() {
    var arr = [5, 4, 3, 2, 1];
    quickSortHoare(arr, 0, arr.length-1);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('quickSort-Lomuto', function() {
  it('should sort an array', function() {
      var arr = [5, 6, 2, 4, 1, 3];
      quickSortLomuto(arr, 0, arr.length-1);

      expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should sort array containing duplicate values', function() {
    var arr = [6, 7, 5, 9, 5, 3, 8, 4, 0, 3, 6];
    quickSortLomuto(arr, 0, arr.length-1);

    expect(arr).toEqual([0, 3, 3, 4, 5, 5, 6, 6, 7, 8, 9]);
  });

  it('should sort an array containing mostly duplicate values', function() {
    var arr = [2, 1, 1, 1, 1];
    quickSortLomuto(arr, 0, arr.length-1);

    expect(arr).toEqual([1, 1, 1, 1, 2]);
  });

  it('should sort an already sorted array', function() {
    var arr = [1, 2, 3, 4, 5];
    quickSortLomuto(arr, 0, arr.length-1);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a reversed array', function() {
    var arr = [5, 4, 3, 2, 1];
    quickSortLomuto(arr, 0, arr.length-1);

    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});
