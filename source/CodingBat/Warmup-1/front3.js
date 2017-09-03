//front3.js

console.log(frontBack("Java"));
console.log(frontBack("Chocolate"));
console.log(frontBack("abc"));
console.log(frontBack("abcXYZ"));
console.log(frontBack("ab"));

function frontBack(str) {
  var front;
  if(str.length < 3) front = str;
  else front = str.substring(0,3);
  return front + front + front;
}
