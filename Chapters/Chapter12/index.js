while(true) {
    var age = parseInt(prompt("What is your age"));
    if (age <= 1) {
        alert("you are an infant");
    }
    
    else if (age > 1 && age <= 12 ) {
        alert("you are a child");
    }
    
    else if (age > 12 && age <= 19 ) {
        alert("you are a teen");
    }
    
    else if (age > 19 && age < 65) {
        alert("you are an adult");
    }
    
    else if (age > 65 && age <= 130) {
        alert("you are elderly");
    }
    else if (age > 130) {
        alert("you are dead");
    }
    
    else {
        alert("your age is not valid")
    }
}