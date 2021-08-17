function isPalindrome () {
    let phrase = prompt("Please enter a sentence")
    const array = phrase.split("");
    let reverse = [];
    let flag;
    for (let i = 0; i<array.length; i++) {
        reverse[i] = array[array.length-(i+1)]
    }   
    if (array.join("") == reverse.join("")) {
        flag = "a palindrome"
    }
    else {
        flag = "not a palindrome"
    } 
    console.log(`"${phrase}" is ${flag}`)
}
let btn = document.createElement("button")
btn.innerHTML = "Start the program"
document.body.appendChild(btn)
btn.onclick = isPalindrome