function isEqual () {
    let word1 = prompt("Please enter the first word")
    let word2 = prompt("Please enter the second word")
    let flag;
    const arranged1 = word1.split("").sort().join("")
    const arranged2 = word2.split("").sort().join("")
        if (arranged1 === arranged2) {
            flag = "equal"
        }
        else {
            flag = "not equal"
        }
        console.log(`The number of each letter in the two words is ${flag}`)
    }
    let btn = document.createElement("button")
    btn.innerHTML = "Press this button or die"
    document.body.appendChild(btn)
    btn.onclick = isEqual