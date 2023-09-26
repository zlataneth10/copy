
// console.log("hello world");

// var ND = " tech";
// let richard = 3;
// const qudus = "student"

// console.log( ND, richard, qudus)

// RULES FOR NAMING A VARIABLE

// rule 1: cannot be a reserved keyword.
    // debugger	default	delete	do
// double	else	enum*	eval
// export*	extends*	false	final
// finally	float	for	function
// goto	if	implements	import*
// in	instanceof	int	interface
// let*	long	native	new
// null	package	private	protected
// public	return	short	static
// super*	switch	synchronized	this
// throw	throws	transient	true
// try	typeof	var	void
// volatile	while with yield.

// rule 2. it should be meaningful
// not let a = "qudus"
// let x = "richard"

// it should let firstName = "qudus"
// let age = 23
// let isMale = true

// Rule 3: it cannot start with a number
// let 1name = "qudus"

// Rule 4: it cannot contain a space or hyphen
// let first name = "qudus"
// let first-name = "qudus"

// Rule 5: it is case sensitive 
// let firstnamE = "qudus"
// let firstname = "qudus"
// let FIRSTNAME = "richard"

// console.log(firstname, FIRSTNAME);

// you can declare on the same line 
// let firstName = "qudus", lastName = "richard";

// modern ways 
// let firstName = "qudus";
// let lastName = "richard";

// constant
// let amount = 200;
// // amount = 500;
// console.log(amount)

// const amount = 200;
//  amount = 500;
// console.log(amount)

//PRIMITIVE DATA TYPES
// String
// Numbers
// boolean
// undefined
// null

// let name = "qudus";// string literals
// let age = 40; //number literals
// let isMale = true // boolean literals
// let car
// let selectedColor = null // 


// console.log(name, age, isMale, car, selectedColor)
// console.log(typeof(selectedColor))

// REFERENCE TYPE
// OBJECT LITERALS
// multiple related variable makes an object

// let person = {
//      name : "qudus",
//     age : 40,
//     isMale : true,
//      car : "red",
//     selectedColor : null
// }

// //Dot Notation
// person.name = "richard"

// // Bracket Notation
// person['name'] = 'NDEE'
// console.log(person)

// ARRAYS
// let selectedColor = ['red', 'blue', 'green']
// selectedColor[2] = 1
// console.log(selectedColor)
// console.log(selectedColor[0])

// Function
// are one of the fundamental building blocks of javaScript. it performs a task and execute a value.

// function greet() {
//     //body of function
//     console.log("hello world")
// // }

// function greet(name) {
//     //body of function
//     console.log("hello" + " " + name)
// }



// function greet(name) {
//     //body of function
//     console.log("hello" + " " + name)
// }

// greet("qudus")

// function add(number) {
//     return number + number
// }

// function sub(number) {
//     return number - number
// }
// console.log(add(2))
// console.log(sub(2))

// STRING CONCATENATION
// let name = "qudus"
// let age = 32

// Archaic Method
// console.log("My name is " + name + " i am " + age + " years old");

// TEMPLATE LITERALS METHOD 
// console.log(`My name is ${name} i am ${age} years old`)

// STRING PROPERTY AND METHODS
// let s = "HELLO WORLD";
// let val
// val = s.length

// val = s.toLocaleLowerCase()
// val = s.split("")
// val = s.slice(2, 5)
// console.log(val)

// ARRAY METHODS AND PROPERTIES
// const colors = ["black", "white", "red", "blue"]
// colors.splice(2,3 , "pink", "purple")
// // console.log(colors[3])
// // colors.push("yellow")
// // colors.unshift("grey")
// // colors.pop()
// // colors.shift()
//  console.log(colors);

// ARITHEMETIC OPERATORS
// +, -, /, *, % **
// console.log(5 + 5)
// console.log(5 - 5)
// console.log(10 / 2)
// console.log(10 * 2)
// console.log(10 % 3)
// console.log(10 + "10")
// console.log(10 ** 10)

// let j = 5;
// // console.log(++j)
// console.log(--j)

// OBJECT LITERALS
// const person = {
//     firstName: "qudus",
//     age: 30,
//     hobbies: ["music", "movies", "sports"],
//     address: {
//         street: " yaba gomycode",
//         city: "lagos",
//         state: "lagos state"
//     }
// }
// person.email = "qudus@email.com"
// person.hobbies.push("singing")

// console.table(person)

// const users = [
// {
// name: 'person',
// age: 23,
// email: "p1@gmail.com",
// },
// {
// name: 'person 2',
// age: 31,
// email: "p2@gmail.com",
// },
// {
// name: 'person 3',
// age: 155,
// email: "p3@gmail.com",
// }
//  ];

//  console.log(users[0])

 // COMPARISON OPERATORS
// = assigns a value to a variable*

// const money = 50
// console.log(money)

// == compares the value of the variables

// === compares the value and type of the variables

// ! returns the opposite boolean

// != compares the inequality based on value

// !== compares the inequality based on value and type
// let number = 3 !='3'


// AND(&&), OR(||) and the NOT(!) operators

// For Loop
// for (initialization; condition; increment) {
//     logic
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`For loop number : ${i}`)
// }

// let i = 0;
// while (i < 10) {
//     console.log(`While loop number : ${i}`);
//     i++
// }

//  const numbers = [ 4, 6, 8, 12, 14, 16]

// for (number = 0; number <= 16; number++){
//     console.log(numbers)
// }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// const person = {
//     name : "john",
//     age: 23,
//     gender: "male",
//     height: 172,
//     tribe: "igbo"
// }

// for (let key in person) {
//     console.log(key + ":" + person[key]);
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   console.log(txt += numbers[x]);
// }

// const fruits = [ "apple", "banana", "guava", "cashew"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// IF/ELSE STATEMENT

// const x = 30;

// if (x === 10) {
//     console.log("x is 10");
// } else if (x > 10) {
//     console.log("x is greater than 10")
// } else {
//     console.log("x is less than 10")
// }

let color = "black";

// switch(color) {
//     case 'red':
//     console.log("color is red");
//     break;
//     case 'blue':
//     console.log("color is blue");
//     break;
//     case 'green':
//     console.log("color is green");
//     break;
//     default: 
//     console.log("color is not red , blue or green")
// }

// ternary shorthand if
// condition ? true : false

colorCheck = color === "red"? "yes color is red" : "No color isnt red"
console.log(colorCheck)

// research chained ternary operator with example


// function add(number) {
//     return number + 3
// }

// const add = () => {
//     return 2+3
// }

 const add = (number) => number + 5

console.log(add(5))