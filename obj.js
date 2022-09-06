// creating an object
var obj = {make : "Ford", colour : "red"};
console.log(obj.colour);

//adding an item in an object
obj.style = "Good";
console.log(obj);

//Alternative way of creating an object

var obj1 = new Object();
obj1.name = "Steve";
obj1.gender = "Male";
console.log(obj1);

// getting an item from an object
console.log(obj1.name);

//making it generic challange
var employee_details = {Name:"stv",Job:"QE",Gender:"Male"};
var qstn = prompt("What do you want to know about the emplyee??");
console.log(employee_details[qstn]);