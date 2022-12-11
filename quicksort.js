const swap = (items, leftIndex, rightIndex) => {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};
const partition = (items, left, right) => {
  // Get middle element
  let pivot = items[Math.floor((right + left) / 2)];
  leftPointer = left;
  rightPointer = right;
  while (leftPointer <= rightPointer) {
    while (items[leftPointer] < pivot) {
      leftPointer++;
    }
    while (items[rightPointer] > pivot) {
      rightPointer--;
    }
    if (leftPointer <= rightPointer) {
      swap(items, leftPointer, rightPointer);
      leftPointer++;
      rightPointer--;
    }
  }
  return leftPointer;
};

const quickSort = (items, left, right) => {
  let index;
  if (items.length > 1) {
    //index returned from partition
    index = partition(items, left, right);
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
};

const arr = [0, 5, 2, 1, 6, 3];
let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);
