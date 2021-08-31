function digits(number) {
    let numdigits;
    if (typeof parseInt(number) === "number" && Number.isNaN(parseInt(number)) === false && number.length === parseInt(number).toString().length) {
        for (let i = 0; i<number; i++) {
            if (number / 10**i >= 1) {
                numdigits = i + 1
            }
            else {
                numdigits = i
                break
            }
        }
        document.getElementById("answer").innerHTML = `number of digits in ${number} is ${numdigits}`
    }
    else {
        document.getElementById("answer").innerHTML = `Please enter a number`
    }
}