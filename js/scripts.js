
console.log("hello world");

var ND = " tech";
let richard = 3;
const qudus = "student"

console.log( ND, richard, qudus)

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

function add(number) {
    return number + number
}

console.log(add(2))