var a = 10
var b = 2
var c = 4
var method1string = "For example if you put parentheses around the addition of 10 and 2, like this (10 + 2) * 4, the result will be ";
var method1 = (10 + 2) * 4; 
var method2string = "For example if you put parentheses around the multiplication of 2 and 4, like this 10 + (2 * 4), the result will be ";
var method2 = 10 + (2 * 4); 
var expression = `There are three numbers, ${a}, ${b}, ${c}, and the operation is ${a} + ${b} * ${c}. However the result will change based on the order in which the operations are done, however you do not need to memorize Javascript precedence rules. Instead you can use parentheses to force Javascript to complete operations enclosed in parentheses before`;
document.write(expression);
document.write("<br><br><br>");
document.write(method1string + method1);
document.write("<br><br><br>");
document.write(method2string + method2);
document.write("<br><br><br>");
console.log(expression);
console.log(method1string + method1);
console.log(method2string + method2);