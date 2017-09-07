//mixStart.js
/*
  Return true if the given string begins with "mix",
  except the 'm' can be anything, so "pix", "9ix" .. all count.
*/
console.log(mixStart("mix snacks"));  //true
console.log(mixStart("pix snacks"));  //true
console.log(mixStart("piz snacks"));  //false
console.log(mixStart("nix"));         //true
console.log(mixStart("ni"));          //false

function mixStart(str) {
  var regex = /ix/y;
  regex.lastIndex = 1;
  return regex.test(str);
}
