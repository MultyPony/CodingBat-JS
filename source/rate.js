var euRate = 1.1931; //usd
var guRate = 1.2903 //usd;

//var euRate = 100.0/EUR;
//var euRate = 100.0/GBP;
var EU = 100/euRate;
var GU = 100/guRate;

console.log("100 USD in EUR "+EU);
console.log("100 USD in GBP "+GU);
console.log("Back-rates:");
console.log("100 EUR in USD " + 100/(1/euRate));
console.log("100 GBP in USD " + 100/(1/guRate));
