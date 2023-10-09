// INTRO TO ALGORITHM
// What is an algorithm??
// it is a set of well-defined intruction to solving a particular problem. 

// for example 
// ingredient => recipe = tasty dish


// AN algorithm to add two Numbers

// inputs => algorithm => output

// inputs
// two numbers (a and b)

// algorithm 
// 1. add number using +
// 2. return a value

// output
// sum of a and b

// characteristics of an algorithm
// a well defined inputs and output
// each steps should be clear an unambigiuos
// language independent

// why should you learn algorithm?
// equip you with different techniques to solving a SyncProblem.SyncProblemone problem can be solve in different ways.

// How can we analyse which one of them is the most efficient Algorithm
// Generally, when we talk about performance, we use an absolute measure
// if i can run 100 meters in 12 seconds, im faster than someone who takes 15 seconds.
// >> the absolute running time of an algorithm cannot be predicted, since it depends on a number of factors
// - It can change 
// due to the programming language used to implement the algorithm
// due to the computer the program runs on
// due to other programs running at the same time
// due to the quality of the operation system and many other factors.
// >>>>
// now we evaluate the performance of an algorithm in terms of the input size
// the evaluation is two types
// 1. time complexity-Amount of time taken by an algorithm to run, as a function of input size
// 2. Space complexity- amount of memory taken by an algorithm to run, as a function of input size

// by evaluating against the input size, the Analysisis not only machine independent but comparison is also more approprate.

// keep in mind there is no one solution that works best every single time.

// it is always good to know that there are multiple ways to solve the problem and use the best solution, given the constrains
// if your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity

// if you have a very little memory to work with, you should pick a solution that is relatively slower but needs less space.

// How do we represent the complexity?( the time and space complexity)

// we us Asymptotic notation
// (Mathematical tools to represent time and space complexity)

// 1. big-0 Notation-( worst case complexity)
// 2. Omega Notation-(best case complexity)
// 3.Theta Notation (Average case complexity)

// our focus is 1.

// const person = {
//     firstName: "john",
//     lastName: "doe"
// }

// access
// insert
// remove

// constant time compplexity  = O(1).O

// search
// Object.keys()- O(n)
// Object.value()
// Object.entries()

// linear time complexity - O(n)

// Array
// const odd = [1, 3, 5, 7, 9]

// if you insert/remove from the end of the array -O(1)
// if you insert/remove at beginning -O(n)
// this is because the index has to be reset for every element remaining in the array

// access - O(1)
// Search- O(n)

// Push/ pop - O(1)
// Shift/ unshift /concat/ slice/ splice - O(n)

// forEach/map/filter/reduce- o(n).

// function summation(n) {
//     let sum = 0;        // 1   
//     for(let i = 1; i <= n; i++) { // 4
//         sum += i
//     }
//     return sum   //1
// }

// console.log(summation(4))

// ALGORITHM_SUMMATION_OF_N
// VAR 
// 	n : INTEGER;
// 	sum : INTEGER:=0;
// BEGIN
// 	Set sum to 0.
// 	FOR DO i = 1 to n:
// 		Add i to sum (sum += i)
// 	Write(sum)
// END




// time complexity
// O(n)- linear
// means as the input increases the time complexity also increases.

// function summation(n) {
//     return (n * (n + 1)) / 2
// }
// console.log(summation(4))

// constant time complexity O(1)


// https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=outind

// javascript variable exercise
// write a code that switched the values around

// var a = "3";
// var b = "8";
// so that the variable a holds the value 8
// and variable b hold the value 5

// aim :
// when th code is run: the output:
// a is 8
// b is 3

// do not change any of the existing code
// you are not allowed to type any numbers
// you should not redeclare variable a and b.

// function test() {
// 	var a = "3"
// 	var b = "8"
// /****** Do Not Change The Code Above******/
// // Write your code below



// //***** Do not change the code below ****/

// console.log("a is " + a)
// console.log("b is " + b)
// }

// test()

// FIBONACCI SEQUENCE
// problem: Given a number "n", find the "n" element of the Fibonacci sequence!
// {1,1,2,3,5,8,13,21,34,55,55+34=89,89+55=144,⋯}

// fibonacci[2] = [0,1]
// fibonacci[3] = [0,1,1]
// fibonacci[7] = [0,1,1,2,3,5,8]



// function fibonacci(n) {
// 	const fib = [0, 1]
// 	for (let i = 2; i <= n; i++) {
// 		fib[i] = fib[i-1] + fib[i - 2]
// 	}

// 	return fib
// }

// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(7))


// FACTORIAL OF A NUMBER
// problem statement: given an integer "n", find the factorial of that integer.
// in mathematics, the factorial of a non-negative integer 'n', denoted n! is the product of all positive integers less than or equal to 'n'

// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

// function factorial(n) {
// 	let result = 1;
// 	for(let i = 2; i <= n; i++) {
// 		result = result * i
// 	}

// 	return result
// }

// console.log(factorial(0)) // 1;
// console.log(factorial(1)) // 1;
// console.log(factorial(5)) // 120;
// console.log(factorial(10)) // 3628800;

//PRIME NUMBER 
// problem - given a natural number "n", determing if the number is prime or not
// a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// isPrime(5) = true (1 * 5 or 5 * 1)
// isPrime(4) = false (2*2 or 2 + 2)

// function isPrime(n) {
// 	if(n < 2 ) {
// 		return false
// 	}
// 	for(let i = 2; i <= n; i++) {
// 		if(n%i === 0) {
// 			return false
// 		}
// 		return true
// 	}
// }

// console.log(isPrime(2))
// console.log(isPrime(5))
// console.log(isPrime(4))


// POWER OF TWO
// problem: Given a positive interger "n", 
// determine if the number is a power of two or not

// isPowerOfTwo(1) =true(2)
// isPowerOfTwo(2) = true(2)
// isPowerOfTwo(5) = false

// n = 8
// 8 / 2 = 4 remainder (0)
// 4 / 2 = 2 remainder (0)
// 2 / 2 = 1 remainder (0)

// function isPowerOfTwo(n) {
// 	if (n < 1) {
// 		return false
// 	}
// 	while (n > 1) {
// 		if (n % 2 !== 0) {
// 			return false 
// 		}
// 		n = n / 2
// 	}
// 	return true
// }
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(8))

// logarithmic

// function isPowerOfTwoBitWise(n) {
//   if (n < 1) {
//     return false
//   }
//   return (n & (n - 1)) === 0
// }

// console.log(isPowerOfTwoBitWise(1))
// console.log(isPowerOfTwoBitWise(2))
// console.log(isPowerOfTwoBitWise(5))
// console.log(isPowerOfTwoBitWise(8))

// RECURSION 
// recursion to solve the fibonacci

// problem question: givin the number "n", find the element of the fibonacci sequence

// in mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// EG
// The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5,8...)

// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

// Fn = Fn-1 + Fn -2
// F0 = 0 and F1 = 1

// function recursiveFibonacci(n) {
// 	// (0, 1, 1, 2, 3, 5,8...)
// 	if (n < 2) {
// 		return n
// 	}
// 	return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }

// console.log(recursiveFibonacci(0)) // 0
// console.log(recursiveFibonacci(1))//  1
// console.log(recursiveFibonacci(6))//  8

