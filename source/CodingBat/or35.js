// or35.js

console.log(or35(3));
console.log(or35(10));
console.log(or35(8));
console.log(or35(15));
console.log(or35(5));

function or35(n) {
  return (n % 3 == 0 || n % 5 == 0);
}
