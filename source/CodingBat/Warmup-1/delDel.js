//delDel.js
/*
  Given a string, if the string "del" appears starting at
  index 1, return a string where that "del" has been
  deleted. Otherwise, return the string unchanged.
*/
console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("adedbc"));
console.log(delDel("abcdel"));
console.log(delDel("add"));

function delDel(str) {
  return (str.length > 3 &&
        str.slice(1,4) == "del") ?
        str[0] + str.slice(4) :  str;
}