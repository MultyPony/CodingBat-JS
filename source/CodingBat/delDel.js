//delDel.js

console.log(delDel("adelbc"));
console.log(delDel("adelHello"));
console.log(delDel("adedbc"));
console.log(delDel("abcdel"));
console.log(delDel("add"));

function delDel(str) {
  return (str.length > 3 &&
        str.substring(1,4) == "del") ?
        str.charAt(0) + str.substring(4) :  str;
}
