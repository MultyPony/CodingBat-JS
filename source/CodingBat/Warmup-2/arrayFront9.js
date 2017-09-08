/*
  Given an array of ints, return true if one
  of the first 4 elements in the array is
  a 9. The array length may be less than 4.
*/
console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));
console.log(arrayFront9([1, 2, 3, 4, 5]));
console.log(arrayFront9([9, 2, 3]));
console.log(arrayFront9([1, 9, 9]));

function arrayFront9(nums) {
  var ar4 = nums.slice(0,4);
  return ar4.includes(9);
}
