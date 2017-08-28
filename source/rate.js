var euRate = 1.1931; //usd
var guRate = 1.2903 //usd;

//var euRate = 100.0/EUR;
//var euRate = 100.0/GBP;
var EU = 100/euRate;
var GU = 100/guRate;

console.log("100 USD in EUR "+EU);
console.log("100 USD in GBP "+GU);
console.log("Back-rates:");
console.log(EU + "EUR in USD " + EU/(1/euRate));
console.log(GU + "GBP in USD " + GU/(1/guRate));
