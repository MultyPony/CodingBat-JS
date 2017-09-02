//notString.js

console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
console.log(notString("bad"));

function notString(str) {
  return (str.length < 3 || str.substring(0,3) !== "not") ? "not " + str : str;
}
