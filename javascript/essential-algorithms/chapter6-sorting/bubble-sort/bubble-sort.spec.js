describe('bubbleSort', function() {
	it('should sort', function() {
    var data = [4, 8, 9, 2, 1, 5];
    bubbleSort(data);

		expect(data).toEqual([1, 2, 4, 5, 8, 9]);
	});
});
