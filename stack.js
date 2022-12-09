const canCloseParenthesis = (str) => {
  const stack = [];
  const hashMap = { "}": "{", "]": "[", ")": "(" };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
      // When encountering a closing bracket, check if it closes the last value in the stack
    } else if (stack[stack.length - 1] === hashMap[str[i]]) {
      stack.pop();
    } else {
      // If closing bracket does not match, we break
      return "Brackets cannot be closed";
    }
  }
  return "Brackets can be closed";
};

console.log(canCloseParenthesis("((}))"));
console.log(canCloseParenthesis("(({}))"));
