const nonConstructibleChange = (arr: Array<number>) => {
  arr = arr.sort((a, b) => a - b);
  let change = 0;

  for (let n of arr) {
    if (n > change + 1) {
      return change + 1;
    }
    change += n;
  }

  return change + 1;
};

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
