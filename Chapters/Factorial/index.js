while (true) {
    var number = prompt("Please enter a number and the program will return the factorial");
    var factorial = 1;
    for (i = 1; i<=number ; i++) {
        factorial = factorial * i
    }
    alert(factorial)
}