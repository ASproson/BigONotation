const votes = {};

const addVotes = (candidate) => {
  if (votes[candidate]) {
    votes[candidate]++;
  } else {
    votes[candidate] = 1;
  }
  return votes;
};

addVotes("Thomas Jefferson");
addVotes("Thomas Jefferson");
addVotes("Thomas Jefferson");
addVotes("John Adams");
addVotes("Henry Cavill");

console.log(votes);

//

const hasDuplicateValuues = (arr) => {
  const existingValues = {};
  for (let i = 0; i < arr.length; i++) {
    if (existingValues[arr[i]] === undefined) {
      existingValues[arr[i]] = 1;
    } else {
      return "Duplicate values found!";
    }
  }
  return "No duplicates were found!";
};

console.log(hasDuplicateValuues([1, 1, 2, 3, "aa", "aa", "b", "c"]));
console.log(hasDuplicateValuues([1, 2, 3, "aa", "b", "c"]));
