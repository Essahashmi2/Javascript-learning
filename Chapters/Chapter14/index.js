        // The code is really messy and violates the DRY principle. This is just an example of how to use nested ifs. A more concise approach is in the chapter 13 example
        var age = prompt("Please enter your age");
        const ageInt = parseInt(age);
        var height = prompt("Please enter your height in centimetres"); 
        const heightInt = parseInt(height);
        if (ageInt >= 15) 
            if (heightInt >= 145) {
                alert("Congrats, you can use the rides in this amusement park");
            }
            else if (height < 145) {
                alert("Unfortunately, you are not tall enough to use the rides in this amusement park");
            }
            else {
                alert ("The information you entered is not valid");
            }
        else if (heightInt >= 145)
            if (ageInt >= 15) {
            alert("Congrats, you can use the rides in this amusement park");
            }
            else if (ageInt < 15) {
            alert("Unfortunately, you are not old enough to use the rides in this amusement park");
            }
            else {
            alert("The information you entered is not valid");
            }
        else if (ageInt < 15 && heightInt < 145) {
            alert("You are both not tall and not old enough to use these rides");
        }
        else {
            alert("The information you entered is not valid")
        }