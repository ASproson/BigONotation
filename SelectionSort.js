const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowestNumberIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex != i) {
      let temp = arr[i];
      arr[i] = arr[lowestNumberIndex];
      arr[lowestNumberIndex] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([4, 2, 7, 1, 3]));
