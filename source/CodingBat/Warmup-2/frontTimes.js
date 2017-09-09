/*
  Given a string and a non-negative int n,
  we'll say that the front of the string
  is the first 3 chars, or whatever is
  there if the string is less than
  length 3. Return n copies of the front;
*/
console.log(frontTimes("Chocolate", 2)); //ChoCho
console.log(frontTimes("Chocolate", 3)); //ChoChoCho
console.log(frontTimes("Abc",3));        //AbcAbcAbc
console.log(frontTimes("Ab",4));         //AbAbAbAb
console.log(frontTimes("Abc",0));        //

function frontTimes(str, n) {
  var front = str;
  var res = "";
  if(str.length >= 3) front = str.slice(0,3);
  for(var i = 0;i < n; ++i) res += front;
  return res;
}
