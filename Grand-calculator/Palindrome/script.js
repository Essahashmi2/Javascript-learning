function isPalindrome (phrase) {
    if (phrase === phrase.split("").reverse().join("")) {
        document.getElementById("result").innerHTML = `${phrase} is a palindrome`
    }
    else {
        document.getElementById("result").innerHTML = `${phrase} is not a palindrome`
    }
}