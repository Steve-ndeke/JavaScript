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
// var employee_details = {Name:"stv",Job:"QE",Gender:"Male"};
// var qstn = prompt("What do you want to know about the emplyee??");
// console.log(employee_details[qstn]);

//updating objects 

var Name = {Jitu:"stv", cars:"mazda", color:"red"};
console.log(Name)
Name.Jitu = "ndk";                                 //changes the jitu value from stv to ndk
Name["color"] = "yellow";                         //chenages the color value from red tp yellow
console.log(Name);
delete Name.cars;
console.log(Name);

//looping through an object
var Name1 = {Jitu:"stv", cars:"mazda", color:"BLACK"};
for(var property in Name1){
    console.log(property + " " + Name1[property]);   //helps you display items in you object with their values
}