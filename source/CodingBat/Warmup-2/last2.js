/*
  Given a string, return the count of the number of
  times that a substring length 2 appears in the
  string and also as the last 2 chars of the string,
  so "hixxxhi" yields 1 (we won't count the end substring).
*/
console.log(last2("hixxhi"));        //1
console.log(last2("xaxxaxaxx"));     //1
console.log(last2("axxxaaxx"));      //2
console.log(last2("xxaxxaxxaxx"));   //3
console.log(last2("xaxaxaxx"));      //0

function last2(str) {
  if(str.length < 4) return 0;
  var count = 0;
  var lastChars = str.slice(str.length-2);
  for(var i = 0; i < str.length-2; ++i)
    if(str.slice(i,i+2) == lastChars)
      count++;
  return count;
}

/* First solution
function last2(str) {
  if(str.length < 4) return 0;
  var count = 0;
  var lastChars = str.slice(str.length-2);
  for(var i = str.indexOf(lastChars,0); i != -1 && i < str.length-2; i = str.indexOf(lastChars,i+1)) {
    count++;
  }
  return count;
}
*/
