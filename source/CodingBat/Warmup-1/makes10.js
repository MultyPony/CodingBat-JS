//makes10.js

console.log(makes10(9,10));
console.log(makes10(9,9));
console.log(makes10(1,9));
console.log(makes10(10, 1));

function makes10(a, b) {
  return (a == 10 || b == 10 || (a + b) == 10) ? true : false; //потом заметил, что можно без оператора обойтись
}
