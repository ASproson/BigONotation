// const countDown = (num) => {
//   console.log(num);
//   if (num === 0) {
//     return;
//   } else {
//     countDown(num - 1);
//   }
// };

// countDown(10);

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));
