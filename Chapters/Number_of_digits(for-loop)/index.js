function digits () {
    let input = parseInt(prompt("Please enter a number"))
    let numdigits;
    if (typeof input === "number" && Number.isNaN(input) === false) {
        for (let i = 0; i<input; i++) {
            if (input / 10**(i) >= 1) {
                numdigits = i + 1
            }
            else {
                numdigits = i
                break
            }
        }
        console.log(`number of digits in ${input} is ${numdigits}`) 
    }
    else {
        console.log(`Please enter a number`)
    }
}
let btn = document.createElement("button")
btn.innerHTML = "Press this button"
document.body.appendChild(btn)
btn.onclick = digits