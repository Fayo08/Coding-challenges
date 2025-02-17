ar = [1, 2, 3, 4, 10, 11];
let sum = 0;
for (let i = 0; i < ar.length; i++) {
  sum += ar[i];
}
console.log(sum);

function simpleArraySum(ar) {
  ar = [1, 2, 3, 4, 10, 11];
  const sum = ar.reduce((total, amount) => total + amount);
  return sum;
}

console.log(simpleArraySum());
