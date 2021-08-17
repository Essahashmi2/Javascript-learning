let btn = document.createElement("button");
btn.innerHTML = "Print a list of even numbers from 0 to 10";
document.body.appendChild(btn);
btn.onclick = function () {
    for (i=0; i<=10; i+=2) {
        document.write(i);
        document.write("<br></br>")
    }
} 