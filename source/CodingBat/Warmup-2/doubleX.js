//doubleX.js
/*
  Given a string, return true if the first
  instance of "x" in the string is
  immediately followed by another "x".
*/
console.log(doubleX("axxbb"));
console.log(doubleX("axaxax"));
console.log(doubleX("xxxxx"));
console.log(doubleX("xaxxx"));
console.log(doubleX(""));

function doubleX(str) {
  for(var i = 0; i < str.length; ++i) {
    if(str[i] == 'x') {
      if(str[i+1] == 'x') return true;
      else break;
    }
  }
  return false;
}
