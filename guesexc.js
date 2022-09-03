var animals = ["cat","horse","dog","cow"];
var randomIndex = Math.floor(Math.random()* animals.length);

var randomAnimal = animals[randomIndex];
var message = prompt("which index value is "+ randomAnimal);
var response = (message==randomIndex) ? "Correct" : "wrong, it was "+ randomIndex;
alert(response)