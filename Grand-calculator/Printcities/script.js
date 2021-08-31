// var cities = [,"Berlin", "Frankfurt", "Hamburg", "Munich", "Koln", "Dusseldorf", "Bonn", "Dresden", "Leibzig", "Essen"];
var cities = ["Karachi", "Islamabad", "Lahore", "Rawalpindi", "Faisalabad", "Bahawalpur", "Attock", "Murree", "Multan", "Quetta"];
document.getElementById("print").style.display = "none"
for(let i = 0; i<cities.length; i++) {
    document.getElementById(`city${i}`).innerHTML = cities[i]
    document.getElementById(`city${i}`).style.display = "none"
}
function defo() {
    for (i=0; i<cities.length; i++) {
        document.getElementById(`city${i}`).innerHTML = cities[i]
        document.getElementById(`city${i}`).style.display = "block"
    }
    document.getElementById("random").style.display = "none"
    document.getElementById("print").style.display = "inline"
    document.getElementById("start").style.display = "none"
}
function print() {
    for(let i = 0; i<cities.length; i++) {
        document.getElementById(`city${i}`).style.display = "none";
    }
    document.getElementById("random").style.display = "block"
    document.getElementById("random").innerHTML = cities[Math.floor((Math.random() * 10))];
    document.getElementById(`print`).style.display = "none";
    document.getElementById("start").style.display = "inline";
}  