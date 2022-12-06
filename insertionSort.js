const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // Track index in the array
    let index = i;
    // Track value at the current index in the array
    let valueAtIndex = arr[i];

    // If the value to the LEFT of index is > valueAtIndex, shift that left value one cell to the right and decrement index
    while (index > 0 && arr[index - 1] > valueAtIndex) {
      // Set arr[index] to arr[index - 1], these creates a duplicate for now!
      arr[index] = arr[index - 1];
      // This breaks us out of the while loop
      index--;
    }
    // We now replace the value at the index (reinserting out initial value, thereby removing the duplicate)
    arr[index] = valueAtIndex;
  }
  return arr;
};

console.log(insertionSort([4, 2, 7, 1, 3]));
