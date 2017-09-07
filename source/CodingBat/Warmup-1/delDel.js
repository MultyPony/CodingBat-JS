/*
  Given a string, if the string "del" appears starting at
  index 1, return a string where that "del" has been
  deleted. Otherwise, return the string unchanged.
*/
console.log(delDel("adelbc"));     //abc
console.log(delDel("adelHello"));  //aHello
console.log(delDel("adedbc"));     //adedbc
console.log(delDel("abcdel"));     //abcdel
console.log(delDel("add"));        //add

function delDel(str) {
  var regex = /del/y;
  regex.lastIndex = 1;
  return str.replace(regex,'');
}
