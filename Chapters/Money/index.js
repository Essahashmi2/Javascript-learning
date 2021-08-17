function money() {
    let amount = parseInt(prompt("Please enter the amount you want in PKR")) /// amount of money
    const notes = [500, 100, 50, 20, 10, 5, 2, 1] /// types of notes and coins
    let numberofnotes = []; /// amount of each note or coin
    console.log(`The amount you wanted = PKR ${amount}`)
    for (i=0; i<notes.length; i++) {
        if (amount >= notes[i]) {
            numberofnotes[i] = Math.floor(amount/notes[i])// assigning number of each notes
            amount = amount - (notes[i]*numberofnotes[i])// updating amount of money left
        }
        else {
            numberofnotes[i] = 0
        }       
    }
    for (i=0; i<notes.length; i++) {    
        console.log(`PKR ${notes[i]} = ${numberofnotes[i]}`) // display results 
    }
}
let btn = document.createElement("button") /// create button
btn.innerHTML = "Start the program" // text for button
document.body.appendChild(btn) // append button to body
btn.onclick = money // button onclick