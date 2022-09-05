//modifying arrays

var animals = ["cat","horse","dog","cow"];

animals.push("sheep");   //adds an item at the end of the array
animals.pop()            //removes the last element in the array
console.log(animals);
animals.shift(); //removes the first item
animals.unshift("horse"); //add first item to array

animals.splice(2,1); //this will remove one item from position 2
animals.reverse(); //reverse the order of items
animals.sort(); //sort items by value
console.log(animals)

// challenge to sort an array in reversed alphabet order

var animals_challange = ["cat","dog","rabbit","bird","fish","zebra"];
animals_challange.sort();
animals_challange.reverse();
console.log(animals_challange);

//chaining the above methods together
animals2 = ["cat","dog","rabbit","bird","fish","zebra"];
animals2.sort().reverse();
console.log(animals2);

//using fill method challange
animals3 = ["cat","dog","rabbit","bird","fish","zebra"];
console.log(animals3.length);
//adding a value in a given position 20
animals3[10] = "rat";
animals3.fill("puppy",6,animals3.length -1); //this will add "puppy" from index 6 to 10
console.log(animals3);


//challange
var newHolder = ["cat","dog","rabbit","bird"];
var posIndex = newHolder.indexOf("egg");
var response = (posIndex === -1)? "Item does not exist in the array" : posIndex ;
console.log(response);
