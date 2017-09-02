//sleepIn.js

function sleepIn(weekday, vacation) {
  if(weekday && !vacation) return false;
  return true;
}

console.log(sleepIn(false, false));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(true, true));
