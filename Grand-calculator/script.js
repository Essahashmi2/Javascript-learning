// function evenOdd() {
//     var number = prompt("Please enter a number");
//     var result = number % 2;
//     var evenodd = ["even", "odd"];
//     document.getElementById("h").innerHTML = `the number ${number} is ${evenodd[result]}`;
// }
// function prime() {
//     let number = prompt("Enter a number to check if it is prime or not")
//     let check = "prime"
//     if (number === 0 || number === 1) {
//         check = "neither prime nor composite"
//     }
//     else if (number === 2 ) {
//         check = "composite"
//     }
//     else {
//         for (let i = 2; i<number; i++) {
//             if (number%i === 0) {
//                 check = "composite"
//                 break
//             } 
//         }
//     }
//     document.getElementById("h").innerHTML = `The number ${number} is ${check}`
// }