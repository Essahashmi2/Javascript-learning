function money(amount) {
    let results = [];
    const notes = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1] /// types of notes and coins
    let numberOfNotes = []; /// amount of each note or coin
    for (let i=0; i<notes.length; i++) {
        if (amount >= notes[i]) {
            numberOfNotes[i] = Math.floor(amount/notes[i])// assigning number of each notes
            amount = amount - (notes[i]*numberOfNotes[i])// updating amount of money left
        }
        else {
            numberOfNotes[i] = 0
        }       
    }
    for (let i=0; i<notes.length; i++) {    
        document.getElementById(`result${i}`).innerHTML = ` = ${numberOfNotes[i]}`
    }
    document.getElementById("demand").innerHTML = `The amount you wanted = PKR ${document.getElementById("input").value}`
}