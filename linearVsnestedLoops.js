const hasDuplicates = (arr) => {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      steps++;
      if (i !== j && arr[i] == arr[j]) {
        return true;
      }
    }
  }
  return `Has no duplicates, took ${steps} steps`;
};

console.log("Has Duplicates:", hasDuplicates([1, 2, 3]));

const linearHasDuplicates = (arr) => {
  let steps = 0;
  let existingNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (existingNumbers[arr[i]] === undefined) {
      existingNumbers[arr[i]] = 1;
    } else {
      return true;
    }
  }
  console.log(existingNumbers);
  return `Has no duplicates, took ${steps} steps`;
};

console.log("Linear:", linearHasDuplicates([3, 5, 8]));
