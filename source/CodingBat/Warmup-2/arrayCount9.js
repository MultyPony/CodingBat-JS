/*
  Given an array of ints, return the number of 9's in the array.
*/
console.log(arrayCount9([1,2,9]));
console.log(arrayCount9([1,9,9]));
console.log(arrayCount9([1,9,9,3,9]));
console.log(arrayCount9([1,2,3]));
console.log(arrayCount9([]));

function arrayCount9(nums) {
  return nums.filter(function(elem){
    return elem == 9;
  }).length;
}
