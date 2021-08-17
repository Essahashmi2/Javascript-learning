while(true){
    var number = prompt("Please enter a number to check if it's even and odd");
    var intnum = parseInt(number);
    if ((intnum % 2) === 0){
        alert("The number you entered is even");
    }
    else{
        alert('The number you entered is odd')
    }
    }
    // for (i = 0; intnum % 2 === 0; i++) {
    //     alert("This is an even number");
    //     break
    // }
    // for (i = 0; intnum % 2 !== 0; i++) {
    //     alert("This is an odd number");
    //     break
    // }