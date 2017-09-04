//notString.js
/*
  Given a string, return a new string where
  "not " has been added to the front. However,
  if the string already begins with "not",
  return the string unchanged. Note:
  use .equals() to compare 2 strings.
*/
console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
console.log(notString("bad"));

function notString(str) {
  return (str.length < 3 || str.substring(0,3) !== "not") ? "not " + str : str;
}
