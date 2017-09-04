//front3.js
/*
  Given a string, we'll say that the front is the first
  3 chars of the string. If the string length is less
  than 3, the front is whatever is there. Return a new
  string which is 3 copies of the front.
*/
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
