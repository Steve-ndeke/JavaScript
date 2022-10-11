// Do while loop

var output = document.getElementById("output");
var userQuerry = prompt("How many times should we loop??");
userQuerry = Number(userQuerry);


var x = 0;

do {
    output.innerHTML += "value x =" + x + "<br>";
    x++;
}
while (x < userQuerry);