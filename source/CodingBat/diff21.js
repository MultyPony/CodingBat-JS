//diff21.js

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
console.log(diff21(24));

function diff21(n) {
  return (n > 21) ? (n - 21)*2 : (21 - n);
}
