let op1 = prompt("Enter the first number")
let op2 = prompt("Enter the second number")
let result;
function addition() {
    result = parseInt(op1) + parseInt(op2)
    console.log(result)
}
function subtraction() {
    result = parseInt(op1) - parseInt(op2) 
    console.log(result)
}
function multiplication() {
    result = parseInt(op1) * parseInt(op2)
    console.log(result)
}
function division() {
    result = parseInt(op1) / parseInt(op2)
    console.log(result)
}
let add = document.createElement("button")
add.innerHTML = "+"
document.body.appendChild(add)
add.onclick = addition;
let subtract = document.createElement("button")
subtract.innerHTML = "-"
document.body.appendChild(subtract)
subtract.onclick = subtraction;
let multiply = document.createElement("button")
multiply.innerHTML = "*"
document.body.appendChild(multiply)
multiply.onclick =  multiplication;
let divide = document.createElement("button")
divide.innerHTML = "/"
document.body.appendChild(divide)
divide.onclick = division;
console.log(result)