function prime() {
    let number = parseInt(prompt("Enter a number to check if it is prime or not"))
    let check = "prime"
    if (number === 0 || number === 1) {
        check = "neither prime nor composite"
    }
    else if (number === 2 ) {
        check = "composite"
    }
    else {
        for (let i = 2; i<number; i++) {
            if (number%i === 0) {
                check = "composite"
                break
            } 
        }
    }
    document.getElementById("answer").innerHTML = `The number ${number} is ${check}`
}
document.getElementById("prime").onclick = prime;