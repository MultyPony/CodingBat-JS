/*
  Given a string, return true if the first
  instance of "x" in the string is
  immediately followed by another "x".
*/
console.log(doubleX('axxbb'));   //true
console.log(doubleX('axaxax'));  //false
console.log(doubleX('xxxxx'));   //true
console.log(doubleX('xaxxx'));   //false
console.log(doubleX(''));        //false

function doubleX(str) {
  let fInd = str.indexOf("x");
  if(fInd === -1) return false;
  return str.replace("x","").indexOf("x") - fInd === 0;
}
