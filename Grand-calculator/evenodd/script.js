function evenOdd() {
    let number = document.getElementById("i1").value
    if (number.length > 0 && isNaN(parseInt(number)) === false && parseInt(number).toString().length === number.length) {
        let evenodd = ["even", "odd"];
        let answer = evenodd[Math.abs(number%2)]; 
        document.getElementById("answer").innerHTML = `The number ${number} is ${answer}`;
    }
    else {
        document.getElementById("answer").innerHTML = `Please enter a valid number`;
    }
}