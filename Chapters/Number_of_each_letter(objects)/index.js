function equal() {
    let string1 = prompt("Enter the first string")
    let string2 = prompt("Enter the second string")   
    const ar1 = string1.split("")
    const ar2 = string2.split("")
    let charNumber;
    const letters = [];
    var counters1 = {
    
    }
    var counters2 = {
    
    }
    for (let i = 0; i<ar1.length; i++) {
        charNumber = i
        if (ar1[charNumber] in counters1 === true) {
            counters1[ar1[charNumber]] = counters1[ar1[charNumber]] + 1
        }
        else if (ar1[charNumber] in counters1 === false) {
                counters1[ar1[charNumber]] = 1
        }
    }
    for (let i = 0; i<ar2.length; i++) {
    charNumber = i
        if (ar2[charNumber] in counters2 === true) {
            counters2[ar2[charNumber]] = counters2[ar2[charNumber]] + 1
        }
        else if (ar2[charNumber] in counters2 === false) {
            counters2[ar2[charNumber]] = 1
        }
    }
    checkingArray1 = Object.keys(counters1).sort()
    checkingArray2 = Object.keys(counters2).sort()
    let check;
    if (string1.length === string2.length) {
        for (let i=0; i<checkingArray1.length; i++ ) {
            if (counters1[checkingArray1[i]] === counters2[checkingArray2[i]]) {
                check = "equal"            
            }
            else {
                check = "not equal"  
                break
            }
        }
    }
    else {
        check = "not equal"
    }
    return `The number of each letter in ${string1} and ${string2} is ${check}`
}
document.getElementById("button").innerHTML = "Check if two strings have the same number of each letter"
document.getElementById("button").addEventListener('click', function(){document.getElementById("check").innerHTML = equal()  
});