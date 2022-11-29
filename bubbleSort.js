const bubbleSort = (arr) => {
  // Keep track up to where the index is still unsorted
  // Because the array is totally unsorted, we start at the final index of the array
  let len = arr.length;

  // Keep track as to whether or not the array is fully sorted
  let sorted = false;

  // As long as the array is unsorted, keep looping
  while (!sorted) {
    // If we don't have to make any swaps, we can determine that the array is sorted
    sorted = true;
    // Begin the passthrough process; this loop goes up to the last sorted index
    for (let i = 0; i < len; i++) {
      // Check first two pairs in the array
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        // If they are not sorted, swap their positions in the array
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // If we make any swaps, we determine the array is not currently sorted
        sorted = false;
      }
    }
    // As we have completed another pass through we can safely assume that the current value
    // has been bubbled up to its correct place in the array, therefore we can stop looping
    // up to the final index
    len--;
  }
  return arr;
};

console.log(bubbleSort([3, 2, 4, 1, 7]));
