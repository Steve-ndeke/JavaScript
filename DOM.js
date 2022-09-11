//learning about DOC

console.dir(document);   //getting the the info about your HTML page


var lastmod = document.lastModified;   //getting the last modified date
var title = document.title;            //getting the Title

console.log(lastmod);
console.log(title);

//Accessing information using id and updating it in js

document.getElementById("output").innerHTML="Welcome to my page.";