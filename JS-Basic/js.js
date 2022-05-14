// 1. variable's :

/*const firstName = 'Nikhil'; // const variable never change value;
let lastName  = 'Saxena';
var age       = 23;

//  how to change variable  (start)
age = 24;
end
console.log(firstName, lastName, age); // print 1 & more variable's in one line
*/

/*let yourName;
yourName = 'saxena Nikhil';
console.log(yourName);*/

// 2. Data type :

// String :

/*let yourName = 'saxena Nikhil';
console.log(yourName);*/

//Number :

/*let num1 = 123;
console.log(num1);*/

// Booleans :

// When conditions is false.
/*let a = 9;
let b = 2;
console.log(a<b);*/

// When conditions is true.

/* let c = 9;
let d = 2;
console.log(c>d); */

// Object :

/*let school = {
    name: 'Nikhil',
    displayInfo: function () {
        console.log(`${school.name.split(' ')[0]}`);
    }
}
school.displayInfo(); */

// 3.String Methods:

/* let yourFirstName = 'Nik';
let yourLastName  = 'saxena';

let completeName = yourFirstName + ' ' + yourLastName;
console.log(completeName);

let completeName = `${yourFirstName} ${yourLastName} is my full name.`;
console.log(completeName);
console.log(completeName.toUpperCase());
console.log(completeName.toLowerCase());
console.log(completeName.length);

let message = 'It\'s ok';//using special symbol with ( \ )
console.log(message); */

// 4.Arithmetic Operator :

/* let num0 = 10;
let num1 = 5;

let sum = num0 + num1;
let sub = num0 - num1;
let mul = num0 * num1;
let div = num0 / num1;
let rem = num0 % num1;
console.log(sum, sub, mul, div);
console.log(rem); */

// Increment :
/* let num2 = 10;
num2++;
console.log(num2); */

// Decrement :
/* let num3 = 10;
num3--;
console.log(num3); */

// Exponentiation :

/* let num4 = 4;
let ex = num4 ** 2;// find value of squar & cube
console.log(ex); */

// 5. Arrays

// Storing number, boolean, strings in an Array :
/* let house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
console.log(house); */

// Find array index :
/* console.log(house[0]); */

// Accessing Array Elements :

/*
let house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
alert(house[0]+" cost= "+house[1]);
let cost_1BHK = house[1];
let is_for_rent = house[5];
alert("Cost of 1BHK = "+ cost_1BHK);
alert(("Is house for rent = ")+ is_for_rent);
*/

// Length property of an Array :

/*
let house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];
let len = house.length; //len contains the length of the array
for (let i = 0; i < len; i++)
    alert(house[i]);
*/

// 6.JavaScript Basic Array Methods :

// 1.Array.push() :

/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits);
*/

// 2.Array.unshift() :

/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
*/

// 3.Array.pop() :

/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);
*/

// 4.Array.shift() :

/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
*/

// 5.Array.splice() :

/*
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // At position 2, add 2 elements
console.log(fruits);
*/

// 6.Array sort() :

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
*/

// 7.Array Iteration Methods

// 1.Array forEach() :

/*
function func() {
    const items = [12, 24, 36];
    const copy = [];
    items.forEach(function (item) {
        copy.push(item + item + 2);
    });
    console.log(copy);
}
func();
*/

// 2.Array map() :

/*const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
function myFunction(value) {
  return value * 2;
}*/

// 3.Array.filter()

/*const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
console.log(over18);
function myFunction(value) {
    return value > 18;
}*/

// 4.Array reduce() :

/*const numbers = [45, 4, 10, 16, 25];
let sum = numbers.reduce(myFunction, 100);
console.log("The sum is " + sum);
function myFunction(total, value) {
  return total + value;
}*/

// 5.Array reduceRight() :

/*const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);
console.log("The sum is " + sum);
function myFunction(total, value) {
  return total + value;
}*/

// 6.Array every() :

/*const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
console.log( "All over 18 is " + allOver18);
function myFunction(value) {
  return value > 18;
}*/

// 7.Array some() :

/*const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
console.log( "Some over 18 is " + someOver18);
function myFunction(value) {
  return value > 18;
}*/

// 8.Array indexOf() :

/*const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log( "Apple is found in position " + position);*/

// 9.Array lastIndexOf() :

/*const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log("Apple is found in position " + position);*/

// 10.Array find() :

/*const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log("First number over 18 is " + first);
function myFunction(value) {
  return value > 18;
}*/

// 11.Array findIndex() :

/*const numbers = [4, 9, 16, 25, 29];
console.log( "First number over 18 has index " + numbers.findIndex(myFunction));
function myFunction(value) {
  return value > 18;
}*/

// 12.Array.from() :

/*const myArr = Array.from("ABCDEFG");
console.log(myArr);*/

// 13.Array Keys() :

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys){
  text += x + "<br>";
}
console.log(text);*/

// 14.Array entries() :

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  console.log(x + "<br>");
}*/

// 15.Array includes() :

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));*/

// 16.Object Literal

/*let person = {
    firstName : 'Nikhil',
    lastName  : 'Saxena',
    hobbies   : ['Cooking', 24 ,'hr'],
    number    : 9557592404,
};
person.hobbies.push('Cricket');
console.log(person);
console.log(person.firstName);// if you want to use key
console.log(person.firstName, person.lastName);
person.hobbies.push('Cricket');
console.log(person.hobbies[3]);
console.log(person.number);
person.firstName = 'Nik';// if you want change any key values.
console.log(person.firstName);
person.age = 23;// if you want add new key-values in object literal.
console.log(person.age);*/

// How to embed another object literal inside one and more object literal

/*let person = {
    firstName : 'Nikhil',
    lastName  : 'Saxena',
    hobbies   : ['Cooking', 24 ,'hr'],
    number    : 9557592404,
    address   : {
        state   : 'Uttar pradesh',
        country : 'India',
    },
};
console.log(person.address);
console.log(person.address.state);*/

// 17. Array of Object Literal
/*
let persons = [ // ----> this is an array
    {//---------------------------------------|
        name    : 'Nikhil',                  //
        age     : 23,                        //
        isCoder : true,                      //
    },                                       //
    {                                         //
        name    : 'shiv',                     // ------> this all are object literal
        age     : 24,                         //
        isCoder : false,                     //
    },                                      //
    {                                      //
        name    : 'Ashish',               //
        age     : 22,                    //
        isCoder : false,                //
    },//--------------------------------|
]
console.log(persons);
console.log(persons[0]);
console.log(persons[1].name);
change key values
persons[0].name = 'nik';
console.log(persons[0]);
*/

// 18. Conditionals (use here all  comparison operators also (jump topic no 11 in txt file))

// 1* IF/ELSE

/*1. Greater than or less than

let age = window.prompt('enter your age');

if(age > 17){
    console.log('Congratulations you are eligible for driving licence.')
}
else{
    console.log('Opps! you are not 18 or 18+')
}*/

// 2. Greater than or less than equal to

/*let age = window.prompt('enter your age');

if(age >= 18){
    console.log('Congratulations you are eligible for driving licence.')
}
else{
    console.log('Opps! you are not 18 or 18+')
}*/

// 3. Equal to

/*let num = window.prompt('match your number');

if(num == 18){
    console.log('Number match.')
}
else{
    console.log('Opps! try again')
}*/

// 4. not equal to

/*let num = window.prompt('your num');

if(num != 18){
    console.log('number not match')
}
else{
    console.log('number match')
}*/

/* 5. Equal to (this operator compares equality of two operands with type.
 If equal(type and value both) then condition is true otherwise false. )*/

/*function test (num) {
    if (num === 15) {
        return "Equal";
    }
    return "Not equal";
}
console.log(test(15)); // "Equal"
console.log(test('15')); // "Not equal"
console.log(test(25)); // "Not equal"*/

/* 6. not equal to ( This operator is used to compare the inequality of two operands with type.
 If both value and type are not equal then the condition is true otherwise false.)*/

/*let val1 = 5;
let val2 = '5';

Checking of operands
console.log(val1 !== 6);
console.log(val2 !== '5');
console.log(val1 !== val1);

Check against null and boolean value
console.log(0 !== false);
console.log(0 !== null);*/

// 2* ELSE IF (else if to specify a new condition to test, if the first condition is false)

/*let time = new Date().getHours();// current time
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 17) {
  greeting = "Good noon";
}else if ( time < 20){
  greeting = "good day";
}
 else {
  greeting = "Good evening";
}
console.log(greeting);*/

/* 3. Logical Operator (The logical OR ( || ) operator (logical disjunction)
         for a set of operands is true if and only if one or more of its operands is true.)*/


/* 1.And Operators ( It checks whether two operands are non-zero or not
                   (0, false, undefined, null or "" are considered as zero).)*/

/*                   
let age = 65;
if(age >= 18 && age <= 65){
    console.log('you are safe to drive');
}
else{
    console.log('you are not safe to drive');
}
*/
/*2. Or Operators ( It checks whether any one of the two operands is non-zero or not
                (0, false, undefined, null or "" is considered as zero). )*/

/*
let age = 70;
if(age > 18 || age < 65){
    console.log('you are safe to drive')
}
else{
    console.log('you are not safe to drive')
}
*/

// 19.SWITCH CASE 

// 1.normal switch case

/*
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);
*/

// 2.Default switch case

/*
let text;
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}     
console.log(text)
*/

// 20. Loop

// 1. For Loop :

//Table
/*
let number = prompt('Enter your number');
for(i=1; i<=10; i++){
    console.log(number * i)
}
*/

// 2.While Loop :

/*
let i = 1;              
let n = 5;             // initialize the variable
while (i <= n) {      // while loop from i = 1 to 5
    console.log(i);
    i += 1;
}*/

// 3. Do-While Loop :

/*
let i = 1;
let n = 5;         // do...while loop from 1 to 5
do {
    console.log(i);
    i++;
} while(i <= n); */

// 21. Function :

// 1. function use :
/*
function printDetails() {
    console.log('first Name : Nikhil');
    console.log('last Name  : Saxena');
    console.log('age        : 23');
}
printDetails();
*/

// 2.Function Return : 
/*
function myFunction(p1, p2) {
    return p1 * p2;
}console.log(myFunction(4,3));
*/

// 3.Convert Fahrenheit to Celsius :

/*
function toCelsius(f) {
    return (5 / 9) * (f - 32);     //   C/5 = f-32/9; [formula]
}
console.log(toCelsius(100));
*/

// 4. Print an array with loop;

/*
let Name = ['Nikhil', 'Harsh', 'Ashish', 'Dev'];
function abc(){
    for(Names of Name){
        console.log(Names);
    }
}
abc();
*/

// 5.Arrow Function :
/*
var hello;
hello = () => {
  return "Hello World!";
}
console.log(hello());
*/

/*
const sum = (num1 , num2) => {
    return num1 + num2;
};
let mySum = sum(2,3);
console.log(mySum);
*/

/*
const sum = (num1 , num2) => num1 + num2;
let mySum = sum(2,6);
console.log(mySum);
*/

/*
const sayHello = (name) => console.log('Hello', name);
sayHello('Nikhil');
*/