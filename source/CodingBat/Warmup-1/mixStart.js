//mixStart.js

console.log(mixStart("mix snacks"));
console.log(mixStart("pix snacks"));
console.log(mixStart("piz snacks"));
console.log(mixStart("nix"));
console.log(mixStart("ni"));

function mixStart(str) {
  return (str.length > 2 && str.substring(1,3) == "ix");
}
