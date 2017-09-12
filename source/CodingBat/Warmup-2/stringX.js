/*
  Given a string, return a version where all the "x"
  have been removed. Except an "x" at the very start
  or end should not be removed.
*/
console.log(stringX("xxHxix"));       //xHix
console.log(stringX("abxxxcd"));      //abcd
console.log(stringX("xabxxxcdx"));    //xabcdx
console.log(stringX("xKittenx"));     //xKittenx
console.log(stringX("Hello"));        //Hello

function stringX(str) {
  // var regex = /^x.*x$/;
  // if(!regex.test(str))
    // return str.replace(/x/g,"");
  // str = str.slice(1,str.length-1);
  // str = str.replace(/x/g,"");
  return str[0] + str.slice(1, -1).replace(/x/g, "") + str[str.length-1];
}
