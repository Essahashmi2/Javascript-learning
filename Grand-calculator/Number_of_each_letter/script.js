const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
function compare(string1, string2) {
    let charNumber1;
    const array1 = string1.split("")
    let numOfEachLetter1 = [];
    for (let i=0; i<26; i++) {
        numOfEachLetter1[i] = 0
    }
    for (let i = 0; i<array1.length; i++) {
        charNumber1 = i
        for (let i = 0; i<26; i++) {
            if (array1[charNumber1] === letters[i]) {
                numOfEachLetter1[i]++
            }
        }
    }
    let charNumber2;
    const array2 = string2.split("")
    let numOfEachLetter2 = []
    for (let i=0; i<26; i++) {
        numOfEachLetter2[i] = 0
    }
    for (let i=0; i<array2.length; i++) {
        charNumber2 = i
        for (let i = 0; i<26; i++) {
            if (array2[charNumber2] === letters[i]){
                numOfEachLetter2[i]++
            }
        }
    }
    if (numOfEachLetter1.join("") === numOfEachLetter2.join("") ) {
        document.getElementById("displayanswer").innerHTML = `The number of each letter in ${string1} and ${string2} is equal`
    }
    else {
        document.getElementById("displayanswer").innerHTML = `The number of each letter in ${string1} and ${string2} is not equal`
    }
}