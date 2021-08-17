        // var cities = [,"Berlin", "Frankfurt", "Hamburg", "Munich", "Koln", "Dusseldorf", "Bonn", "Dresden", "Leibzig", "Essen"];
        var cities = [,"Karachi", "Islamabad", "Lahore", "Rawalpindi", "Faisalabad", "Bahawalpur", "Attock", "Murree", "Multan", "Quetta"];
        const arrayIndex = Math.ceil((Math.random() * 10))
        for (i=1; i<=10; i++) {
            document.write(cities[i])
            document.write("<br></br>")
        }
        let btn = document.createElement("button")
        btn.innerHTML = "Press this button to print the name of one of these cities randomly"
        document.body.appendChild(btn);
        btn.onclick = function () {        
            document.write(cities[arrayIndex]);
        }