var age = parseInt(prompt("Please enter your age"));
var height = parseInt(prompt("Please enter your height in centimetres")); 
if (age >= 15 && height >= 145) {
    alert("Congrats, you can use the rides in this amusement park");
}
else if (age < 15) {
    alert("You are not old enough to use these rides");
}
else if (height < 145) {
    alert("You are not tall enough to use these rides");
}
else if (age < 15 && height < 145) {
    alert("You are both not tall and not old enough");
}
else {
    alert("The information you entered are invalid");
}