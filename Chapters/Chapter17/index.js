var animals = ["dog", "cat", "bird", "bug", "duck", "fly", "ox"];
function printarray() {
    if (animals.length > 0) {
        for(let i=0; i<animals.length; i++) {
            console.log(animals[i])
        }
    }
    else if (animals.length < 1) {
        console.log("Congratulations, you have emptied the array")
    }
}
function popanimals () { 
    animals.pop();
}
function deleteanimals () {
    let length = animals.length
    for (let i=0; i<length; i++) {
        animals.pop()
    }
}
let printing = document.createElement("button");
printing.innerHTML = "Press this button to print the array animals";
document.body.appendChild(printing);
printing.onclick = printarray;
let pop = document.createElement("button");
pop.innerHTML = "Press this button to remove the last element of the array animals";
document.body.appendChild(pop);
pop.onclick = popanimals;
let deletion = document.createElement("button");
deletion.innerHTML = "Press this button to remove all elements of the array animals";
document.body.appendChild(deletion);
deletion.onclick = deleteanimals;
// if (animals.length>=1) {
// str+=animals
// }
// else if (animals.length<1) {
// str+="This is an empty array"
// }
// return str -->