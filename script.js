document.write("Welcome to this page");
alert("hello");
console.log("It worked");


//Simple arithmetics
var myString = "s"+" "+"e";
console.log(myString);

//increamenting a given number
var b = 5;
console.log(b);
b++;
console.log(b);

//Decreamenting
b--;
console.log(b);

//addition and modulus
var d = 4;
var r = 3;

var total = d+r;
var rem = d % 3;
console.log(total);
console.log(rem);

//Short form of performing arithmetics
console.log("short_form");
x = 3;
y = 4;

//this is the same as y = y+x . this is applicable to all other operations
y += x;  
console.log(y);

//comparison operators
var num1 = 5;
var num2 = "5";
var num3 = 6;

var compare1 = num1 == num2;
var compare2 = num1 === num2;
console.log(compare1);      //we espect this to be true
console.log(compare2);         //we espect to be False since it is an absolute comparison

var value1 = prompt("Enter the first digit");
var value2 = prompt("Enter the second digit");

var compare3 = value1 === value2;
console.log(compare3);

// short cut of using if statements
var compare4 = (Number(value1) === Number(value2))? value1 +" is greater than "+ value2 : value1+ " is less than " +value2 ;
alert(compare4);

//logical operators
var compare5 = (num1 === num2 && num1 < num3)? "Yes" : "No";
var compare6 = (num1 === num2 || num1 < num3)? "Yes" : "No";
console.log(compare5);
console.log(compare6);

//Arrays
//creating arrays method 1
var myArray = ["steve","Alice","Jos",, "alice is the best of them all!!",
100,4785];

//method2
var myArray1 = new Array("ten",67,"stv");

//getting items in an array

console.log(myArray1[0]);

//Exercise on arrays

var thursday_plans = ["Cloud development","js","Testing","Training"];
var progress = ["done","in progresss","to do"];

var question1  = prompt("which task 0-3");
var question2 = prompt("status 0 done 2 = inprogrss 3 = to do");

console.log("today you will work on "+ thursday_plans[1] + " and the current status is = " + progress[1]);

//getting the length of the an array
console.log(thursday_plans.length)

//adding an item in an array
progress[2] = "take shower";

