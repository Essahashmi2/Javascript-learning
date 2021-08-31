function factorial(number){
    let factorial = 1;
    for (i = 1; i<=number ; i++) {
        factorial = factorial * i
    }
    document.getElementById("answer").innerHTML = `The factorial of ${number} is ${factorial}`
}
