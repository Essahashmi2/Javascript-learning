function triangle() {
    let str = "";
    let numberOfLines = parseInt(prompt("Enter the number of lines you want in this pattern"))
    for (i=0; i<numberOfLines; i++) {
    str+="*"
    console.log(str)
    }      
}
let print = document.createElement("button")
print.innerHTML = "Print a triangle pattern"
document.body.appendChild(print)
print.onclick = triangle 