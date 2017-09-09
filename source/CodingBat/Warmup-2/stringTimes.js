//stringTimes.js
/*
  Given a string and a non-negative int n,
  return a larger string that is n copies
  of the original string.
*/
console.log(stringTimes("Hi", 2));  //HiHi
console.log(stringTimes("Hi", 3));  //HiHiHi
console.log(stringTimes("Hi", 1));  //Hi
console.log(stringTimes("Hi", 0));  //
console.log(stringTimes("Hi", 5));  //HiHiHiHiHi

function stringTimes(str, n) {
  return str.repeat(n);
}
