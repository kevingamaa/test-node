const sortSquareArray = (arr: Array<number>) => {
  return arr.map((n) => n * n).sort((a, b) => a - b);
};

console.log(sortSquareArray([-2, -1]));
