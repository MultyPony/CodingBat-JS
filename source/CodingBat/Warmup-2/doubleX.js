/*
  Given a string, return true if the first
  instance of "x" in the string is
  immediately followed by another "x".
*/
console.log(doubleX("axxbb"));   //true
console.log(doubleX("axaxax"));  //false
console.log(doubleX("xxxxx"));   //true
console.log(doubleX("xaxxx"));   //false
console.log(doubleX(""));        //false

function doubleX(str) {
  for(var i = 0; i < str.length-1; ++i) {
    if(str[i] == 'x') {
      if(str[i+1] == 'x') return true;
      else break;
    }
  }
  return false;
}
