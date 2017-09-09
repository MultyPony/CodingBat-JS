/*
  Given an array of ints, return true if it
  contains a 2, 7, 1 pattern: a value,
  followed by the value plus 5, followed by
  the value minus 1. Additionally the 271
  counts even if the "1" differs by 2 or
  less from the correct value.
*/
console.log(has271([1, 2, 7, 1]));  //true
console.log(has271([1, 2, 8, 1]));  //false
console.log(has271([2, 7, 1]));     //true
console.log(has271([3, 8, 2]));     //true
console.log(has271([2, 7, 3]));     //true

function has271(nums) {
  for(var i = 0; i < nums.length-2; ++i) {
    var fVal = nums[i];
    if(nums[i+1] == fVal + 5 && Math.abs((fVal-1) - nums[i+2]) <= 2 )
      return true;
  }
  return false;
}
