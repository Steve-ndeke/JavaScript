var output = document.getElementById("output");
        
var html ="<table>";

for(var row = 0; row < 10; row++){
    html += "<tr>";
    for(var col = 0; col < 5 ;col++){
        html +="<td>Cell = "+((col+1)+(row*5))+"</td>";
    }
    html += "</tr>";
}

html += "</table>";
output.innerHTML = html;