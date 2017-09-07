/*
  Given a non-empty string like "Code" return a string like "CCoCodCode".
*/
console.log(stringSplosion("Code"));  //CCoCodCode
console.log(stringSplosion("abc"));   //aababc
console.log(stringSplosion("ab"));    //aab
console.log(stringSplosion("x"));     //x
console.log(stringSplosion("fade"));  //ffafadfade

function stringSplosion(str) {
  var res = "";
  for (var i = 0; i < str.length; i++) {
    res += str.slice(0,i+1);
  }
  return res;
}
