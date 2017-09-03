//parrotTrouble.js

console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));
console.log(parrotTrouble(true, 21));

function parrotTrouble(talking, hour) {
  return (talking && (hour < 7 || hour > 20)) ? true : false;
}
