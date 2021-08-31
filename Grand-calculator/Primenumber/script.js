function primeNumbers(number) {
    let string;
    let factors = [];
    let factorpairs = [];
    let refinedfactorpairs = [];
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
                factorpairs[index] = ` ${i} x ${number/i}`
                factors[index] = ` ${i}`
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
    for (i=0; i<factorpairs.length/2; i++) {
        refinedfactorpairs[i] = factorpairs[i]
    }
    document.getElementById("prime").innerHTML = `${number} ${string} and the number of factors is ${factors.length}`
    document.getElementById("factors").innerHTML = factors
    document.getElementById("factorpairs").innerHTML = refinedfactorpairs 
}
