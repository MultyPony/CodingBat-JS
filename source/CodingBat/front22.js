// front22.js

console.log(front22("kitten"));
console.log(front22("Ha"));
console.log(front22("abc"));
console.log(front22("ab"));
console.log(front22(""));

function front22(str) {
  var firstTwo;
  if(str.length < 2) firstTwo = str;
  else firstTwo = str.substring(0,2);
  return firstTwo + str + firstTwo;
}
