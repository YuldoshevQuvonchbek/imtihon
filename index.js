//algoritm 1

function sammOfArry(aNum, bNum, cNum) {
  return aNum + bNum + cNum;
}

console.log(sammOfArry(3, 6, 5));

//algoritm 2
function sumNumbersUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbersUpTo(10));
