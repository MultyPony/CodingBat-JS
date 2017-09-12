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
  return str.split('').filter((_,i) => (i % 2 == 0)).join('')
}
