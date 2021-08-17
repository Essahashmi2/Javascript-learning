let names = prompt("What is your name");
let age = parseInt(prompt("What is your age"));
function checkCodingAbilities(names) {
    if (names.toLowerCase() === "essa" || names.toLowerCase().includes('essa')) {
    alert("you are a coding genius");
    }
    else {
        alert("unfortunately you are not a genius")
    }
}
function checkDrivingEligibility(age) {
    if (age >= 18) {
        alert("you are allowed to drive");
    }
    else {
        alert("you cannot drive");
    }
}
let coding = document.createElement("button")
coding.innerHTML = "Check your coding abilities"
coding.addEventListener('click', () =>checkCodingAbilities(names))
document.body.appendChild(coding)
let driving = document.createElement("button")
driving.innerHTML = "Check your driving eligibility"
document.body.appendChild(driving)
driving.onclick = checkDrivingEligibility 