/*
  Given an array of ints, return true if
  the sequence of numbers 1, 2, 3 appears
  in the array somewhere.
*/
console.log(array123([1, 1, 2, 3, 1]));
console.log(array123([1, 1, 2, 4, 1]));
console.log(array123([1, 1, 2, 1, 2, 3]));
console.log(array123([1, 1, 2, 1, 2, 1]));
console.log(array123([1, 2, 3, 1, 2, 3]));

function array123(nums) {
  var str = nums.join('');
  return str.includes("123");
}
