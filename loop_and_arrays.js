var output = document.getElementById("output");
var userNames = ["mike", "john", "larry"];
for (var x = 0; x < userNames.length; x++) {
    output.innerHTML += userNames[x] + "<br>";
}
for (var x = userNames.length - 1; x >= 0; x--) {
    output.innerHTML += userNames[x] + "<br>";
}
output.innerHTML += "For in<br>";
for (v of userNames) {
    output.innerHTML += v + "<br>";
}
var x = 0;
while (userNames[x]) {
    output.innerHTML += userNames[x] + "<br>";
    x++;
}