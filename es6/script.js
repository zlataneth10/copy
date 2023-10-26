// VARIABLE
// scope of a variable
// the range by which a variable can be accessed
// 1. global
// 2.local



// var
// let
// const


// const scope = () => {
//     var famuyiwa = "famuyiwa";
//     {
//         var richard = "richard";
//         let paul = "paul";
//         const nd = "nd";

//         console.log(`inside block: `+ famuyiwa, nd)
//     }
//     // console.log(`outside the block:`, paul)
//     console.log("outside the block:", richard)
//     // console.log("outside the block:", nd)
// }


// // console.log(richard)
// // console.log(famuyiwa)
// scope()



// FUNCTION

// normal function
// function sayHello(name) {
//     return "hello " + name
// }
// console.log(sayHello("famuyiwa"))

// ES^6 ARROW FUNCTION
// const sayHello = (name) => {
//     return "Hello " + name
// }
// const sayHello = name => "Hello " + name

// const sayHello = name => `Hello ${name}`

// console.log(sayHello("famuyiwa"))

// TERNARY OPERATOR

// let marks = 30
// let result = (marks >= 40) ? "passed" : "failed"

// console.log(`You ${result} the exam`)

// CHAINED TERNARY OPERATOR
// let a = 1
// let result = (a === 0) ? "zero": a > 0 ? "positive" : "negative";

//  console.log(` ${result} `)

// ARRAY METHODS
let array = [5, 50, 70, 10, 12, 40, 33]

// MAP METHOD
// it is used to iterate over an array and transform each element into a new value.
// execute your statement and returns the result in a new array.
// let array1 = array.map(element => element * 2)
// console.log(array1)

// result: [
//   10, 100, 140, 20,
//   24,  80,  66
// ]

// FOREACH METHOD
// it is another array method that allows you to iterate over an array and perform a specified action for each element.
// foreach does not return a new array.

// array = array.forEach((el) => console.log(el * 2))
// console.log(array)

// FILTER METHOD
// it is another array in es6, that creates a new array containing all element that pass a certain condition or criteria.
// it doesnt modify tyhe original array, but return a new array with filtered element.

// const arrayFilter = array.filter((el) => el < 20)

// console.log(arrayFilter)

// let arrayFilter = [1, 2, 3, 4, 5]

// filter for even number
// const evenNumber = arrayFilter.filter(el => 
//  el % 2 === 0
//  )
// console.log(evenNumber)



// filter for odd number
// const oddNumber = arrayFilter.filter(el => 
//  el % 2 === 1
//  )

// console.log(oddNumber)

// REDUCE METHOD
// the reduce method is an iterative method. it runs a reducer callback funtion over all elelement in the array in ascending-index order in the array and accumulate them into a single value.
// let arrayReduce = array.reduce((prev, curr) => prev + curr)
// console.log(arrayReduce)

// FIND METHOD
// execute a function for each array element, find method return undefined if no element are found.
// returns first element that passes the condition. 

// let arrayFind = array.find(el => el > 25)

// console.log(arrayFind)

// // FINDINDEX
// let arrayFindIndex = array.findIndex(el => el > 25)  
// console.log(arrayFindIndex)

// DESTRUCTURING
// let user ={
//     name: "paul",
//     age: 30,
//     fullstack: {
//         track: "js",
//         skill: "ES6"
//     }
// }

//  let a = (user) => {
//         return `my name is ${user.name}, i am ${user.age} and we are learning ${user.fullstack.track}: ${user.fullstack.skill}`
//     }
//     console.log(a(user))

// with destructuring
let user ={
    name: "paul",
    age: 30,
    fullstack: {
        track: "js",
        skill: "ES6"
    }
}
let a = ({name, age, fullstack: {track, skill}}) => {
    return ` my name is ${name}, i'm ${age} and we are learning ${track}: ${skill}`
}
console.log(a(user))

// spread operator

let info={...user}
console.log(info)

// do a research on module.
// import and export