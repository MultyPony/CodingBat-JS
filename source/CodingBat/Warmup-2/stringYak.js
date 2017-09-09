/*
  Suppose the string "yak" is unlucky. Given a string, return
  a version where all the "yak" are removed, but the "a" can
  be any char. The "yak" strings will not overlap.
*/
console.log(stringYak("yakpak"));     //"pak"
console.log(stringYak("pakyak"));     //"pak"
console.log(stringYak("yak123ya"));   //"123ya"
console.log(stringYak("yak"));        //""
console.log(stringYak("yakxxxyak"));  //"xxx"

function stringYak(str) {
  return str.replace(/y.k/g,"");
}
