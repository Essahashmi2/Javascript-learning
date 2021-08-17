let animals = ["dog", "cat", "duck", "bird"]
function printarray() {
    console.log(animals)
}
function changearray() {
    animals[4] = "lion"
    animals[5] = "cheetah"
    animals[2] = "ox"
}
let printanimals = document.createElement("button")
printanimals.innerHTML = "Print the array animals"
document.body.appendChild(printanimals)
printanimals.onclick = printarray
let changeanimals = document.createElement("button")
changeanimals.innerHTML = "Print the array animals"
document.body.appendChild(changeanimals)
changeanimals.onclick = changearray