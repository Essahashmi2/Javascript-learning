var a = 3;  
var b = a++;  
var questionone = "When a = 3 and b = a++, what is a + b"; 
console.log(questionone); 
console.log( `Answer : sum of a and b is  ${a + b}`);

var c = 1; 
var d = 3; 
d = c++ + c++ + c++ + c++ + c++;
var questiontwo = "When c = 1 and d = 3, if now d = c++ + c++ + c++ + c++ + c++, what is c and what is d"; 
console.log(questiontwo);
console.log(`Answer: c = ${c}`);
console.log(`d = ${d}`);

var e = 1;
var f = 3;
var questionthree = `When e = ${e} and f = ${f} when, if now f = e++ + e++ + e++ + e++ + e++, what are e and f now equal to, `;
console.log(questionthree);
f = ++e + ++e + ++e + ++e;
console.log(`Answer:  e = ${e} and f = ${f}`);

var g = 3;
var h = 5;
console.log(`g = ${g}`);
console.log(`h = ${h}`);
var task = "Swap g and h";
console.log(task);
[g, h] = [h, g];
console.log(`g = ${g}`);
console.log(`h = ${h}`);