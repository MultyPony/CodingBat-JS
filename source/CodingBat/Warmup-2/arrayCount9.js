/*
  Given an array of ints, return the number of 9's in the array.
*/
console.log(arrayCount9([1,2,9]));       //1
console.log(arrayCount9([1,9,9]));       //2
console.log(arrayCount9([1,9,9,3,9]));   //3
console.log(arrayCount9([1,2,3]));       //0
console.log(arrayCount9([]));            //0

function arrayCount9(nums) {
  return nums.filter(n => n === 9).length;
}
