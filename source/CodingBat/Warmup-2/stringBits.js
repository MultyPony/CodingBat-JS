/*
  task
*/
console.log(stringBits("Hello"));       //Hlo
console.log(stringBits("Hi"));
console.log(stringBits("Heeololeo"));
console.log(stringBits("HiHiHi"));
console.log(stringBits(""));

function stringBits(str) {
  var array = str.split('');
  array = array.filter(function(el,index) {
   return index % 2 == 0;
  });
  return array.join('');
}
