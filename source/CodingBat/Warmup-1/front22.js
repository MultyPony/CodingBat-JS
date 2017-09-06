// front22.js
/*
  Given a string, take the first 2 chars and return
  the string with the 2 chars added at both the front
  and back, so "kitten" yields"kikittenki". If the
  string length is less than 2, use whatever chars are there.
*/
console.log(front22("kitten"));
console.log(front22("Ha"));
console.log(front22("abc"));
console.log(front22("ab"));
console.log(front22(""));

function front22(str) {
  var firstTwo;
  if(str.length < 2) firstTwo = str;
  else firstTwo = str.slice(0,2);
  return firstTwo + str + firstTwo;
}
