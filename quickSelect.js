function quickselect(nums, l, r, kSmallest) {
  // best case for the first input
  if (l === r) {
    return nums[l];
  }

  const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  const partition = (l, r, pivotIndex) => {
    const pivotValue = nums[pivotIndex];
    // 1. move pivotIndex to end
    swap(nums, pivotIndex, r);

    let storeIndex = l;
    // 2. move all elements of nums smaller than nums[pivotIndex] to the left
    for (let i = l; i <= r; i++) {
      if (nums[i] < pivotValue) {
        swap(nums, storeIndex, i);
        storeIndex++;
      }
    }

    // 3. move 1st element larger than nums[pivotIndex] to its right
    swap(nums, storeIndex, r);

    return storeIndex;
  };

  let pivotIndex = Math.floor(Math.random() * (r - l + 1) + l);

  // update position for next pivotIndex
  pivotIndex = partition(l, r, pivotIndex);

  // the pivotIndex is on (N - k)th smallest position
  if (kSmallest == pivotIndex) return nums[kSmallest];
  // update right, go left side
  else if (kSmallest < pivotIndex)
    return quickselect(nums, l, pivotIndex - 1, kSmallest);
  // update left, go right side
  return quickselect(nums, pivotIndex + 1, r, kSmallest);
}

console.log(quickselect([4, 6, 7, 1, 2], 1, 0, 2));
