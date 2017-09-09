/*
  Given a string, return a version where all the "x"
  have been removed. Except an "x" at the very start
  or end should not be removed.
*/
console.log(stringX("xxHxix"));
console.log(stringX("abxxxcd"));
console.log(stringX("xabxxxcdx"));
console.log(stringX("xKittenx"));
console.log(stringX("Hello"));

function stringX(str) {
  var regex = /^x.*x$/;
  if(!regex.test(str))
    return str.replace(/x/g,"");
  str = str.slice(1,str.length-1);
  str = str.replace(/x/g,"");
  return 'x' + str + 'x';
}
