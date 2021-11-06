function biggestNumber(args) {
  let n = Number(args[0]);
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 1; i <= n; i++) {
    let currentNumber = Number(args[i]);
    if (currentNumber > max) {
      max = currentNumber;
    }
  }

  console.log(max);
}

biggestNumber([2, 100, 99]);
biggestNumber([3, -10, 20, -30]);
biggestNumber([4, 45, -20, 7, 99]);
biggestNumber([1, 999]);
biggestNumber([2, -1, -2]);
