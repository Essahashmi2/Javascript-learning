const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
function calculate1() {
    let word1 = prompt("Please enter the first word")
    let charNumber;
    const array1 = word1.split("")
    let numOfEachLetter = [];
    for (let i=0; i<26; i++) {
        numOfEachLetter[i] = 0
    }
    for (let i = 0; i<array1.length; i++) {
        charNumber = i
        for (let i = 0; i<26; i++) {
            if (array1[charNumber] === letters[i]) {
                numOfEachLetter[i]++
            }
        }
    }
    return numOfEachLetter.join("")
}
function calculate2() {
    let word2 = prompt("Please enter the second word")
    let charNumber;
    const array2 = word2.split("")
    let numOfEachLetter = []
    for (let i=0; i<26; i++) {
        numOfEachLetter[i] = 0
    }
    for (let i=0; i<array2.length; i++) {
        charNumber = i
        for (let i = 0; i<26; i++) {
            if (array2[charNumber] === letters[i]){
                numOfEachLetter[i]++
            }
        }
    }
    return numOfEachLetter.join("")
}
function compare() {
    if (calculate1() == calculate2()) {
        console.log(`The number of each letter in the two words are equal`)
    }
    else {
        console.log(`The number of each letter in the two words are not equal`)
    }
}
let btn = document.createElement("button")
btn.innerHTML = "Press this button or die"
document.body.appendChild(btn)
btn.onclick = compare;