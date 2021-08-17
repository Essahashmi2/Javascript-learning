function isPalindrome () {
    let phrase = prompt("Please enter a sentence")
    const reverse = phrase.split("").reverse().join("")
    let flag;
    if (phrase === reverse) {
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