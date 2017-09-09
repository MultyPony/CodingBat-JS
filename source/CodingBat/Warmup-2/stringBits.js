/*
  Given a string, return a new string made of
  every other char starting with the first,
  so "Hello" yields "Hlo".
*/
console.log(stringBits("Hello"));       //Hlo
console.log(stringBits("Hi"));          //H
console.log(stringBits("Heeololeo"));   //Hello
console.log(stringBits("HiHiHi"));      //HHH
console.log(stringBits(""));            //

function stringBits(str) {
  var array = str.split('');
  array = array.filter(function(el,index) {
   return index % 2 == 0;
  });
  return array.join('');
}
