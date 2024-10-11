const score = 670
// by default it takes as number 

// but we can define it explicitely
const balance= new Number(140)

console.log(score)    // prints 670
console.log(balance)  // prints [Number: 140]

console.log( typeof balance)  // prints object


// this happens because we defined it as an number object and now we can use different methids as we used in strings 
// note: the methods will be differrent here 

console.log(balance.toString().length)
console.log(score.toString().length)

console.log(balance.toFixed(2))        // prints decimal value upto 2 points

const subs = 13989202
console.log(subs.toLocaleString())     // prints 1,39,89,202

// //////////////////////////////////////////

// maths=================================

console.log(Math)
// prints  Object [Math] {}
// hense we can apply methods which are bundled inside math library
console.log(Math.abs(-5))
console.log(Math.round(6.6))

// for floor and ceiling values 
console.log(Math.ceil(6.6))
console.log(Math.floor(6.6))

// to find min and maximum values
console.log(Math.min(6 , 8 , 4 , 2 , 9))

// to generate random numbers
console.log(Math.random())   // always between 0 and 1

// to generate random number within a range
const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max-min) + min))
console.log(Math.round(Math.random() * (max-min) + min))
// here we use multiple methods in a nested manner





