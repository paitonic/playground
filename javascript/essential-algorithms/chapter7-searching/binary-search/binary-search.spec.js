describe('binarySearch', function() {
  var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it('should find an item in array', function() {
    var idx = binarySearch(arr, 5);

    expect(idx).toBe(5);
  });

  it('should find first item in array', function() {
    var idx = binarySearch(arr, 0);

    expect(idx).toBe(0);
  });

  it('should find last item in array', function() {
    var idx = binarySearch(arr, 10);

    expect(idx).toBe(10);
  });

  it('should return -1 if item is not found', function() {
    var idx = binarySearch(arr, 99);

    expect(idx).toBe(-1);
  });
});
