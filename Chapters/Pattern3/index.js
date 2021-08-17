function pyramid() {
    let numberOfRows = parseInt(prompt("Enter the number of rows for the pyramid")) 
    for (let i = 1; i<=numberOfRows; i++) {
        let string = "";
        const numSpaces = (-i) + numberOfRows;
        const numSteriks = (i * 2) - 1;
        for (let i=0; i<numSpaces;i++) {
            string+=" ";
        }
        for (let i=0; i<numSteriks;i++) {
            string+="*"
        }
        console.log(string)
        // document.write("<br></br>")
    } 
}
let printbutton = document.createElement("button");
printbutton.innerHTML = "Print a pyramid pattern";
document.body.appendChild(printbutton);
printbutton.onclick = pyramid;