function primeNumbers() {
    let number = parseInt(prompt("Please enter your number to check if its a prime number"));
    let string;
    let factors = [];
    let factorpairs = [];
    let index = 0;
    if (number == 0) {
        string=" is neither prime nor composite"
    } 
    else if (number == 1) {
        string=" is neither prime nor composite"
        factors = [1];
    } 
    else {
        for (let i = 1; i<=number ; i++) {
            if (number % i == 0) {
                factorpairs[index] = `${i} x ${number/i}`
                factors[index] = i
                index++;
            } 
        }
        if (factors.length == 2) {
        string=" is a prime number"         
        } 
        else if (factors.length > 2) {
        string=" is a composite number"          
        } 
    }
    console.log(`${number} ${string} and the number of factors is ${factors.length}`) 
    factors.forEach(element => {
        console.log(element)
    })
    for (i=0; i<factorpairs.length/2; i++) {
        console.log(factorpairs[i])
    }
}
let btn = document.createElement("button")
btn.innerHTML = "Check if a number is prime or composite"
document.body.appendChild(btn)
btn.onclick = primeNumbers