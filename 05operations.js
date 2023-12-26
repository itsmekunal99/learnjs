// ******************operations********************
// there are some basic operations which are performed 
let a= 2
let b= 4
let c= 8

let d = -a

// console.log(d)
// console.log(a+b)
// console.log(b-a)
// console.log(a*b)
// console.log(c/a)
// console.log(a**b)
// console.log(a%b)

// concatenation of strings
let m = "abc"
let n = "pqr"
let o = m +n 
// console.log(o)

// console.log(1+3)           //4
// console.log(1+"3")         //13
// console.log("1"+"3")       //13
// console.log("1"+3)         //13

// console.log("1"+3 +2)      // 132   //here it treits all as a string
// console.log(3+2+"1")       // 51    //here it adds first and then add to that string

// *****************comparasion********************
// console.log(a<b)        // true
// console.log(a<=b)       // true
// console.log(a>b)        // false
// console.log(a>=b)       // false
// console.log(a==b)       // false
// console.log(a!=b)       // true

// here sometime typeconversion takes place and conversion happens between two different datatypes
console.log("2" >1)     // true
console.log("2" <1)     // false
// but its is not a good practice of comparing two different datatype

// console.log(null== 0)    // false
// console.log(null<= 0)    // true
// console.log(null>= 0)    // true

// // strict check ===
// console.log("2"== 2)     // true
// console.log("2"=== 2)    // false

// there are only two types of datatypes :primitive and non primitive
// primitive are 7 types : they are called by value:numbers, string , null , undefined, boolean , symbol, bigint
// nonprimitive : we can create reference or store it by reference : array , objects, functions
 
const arr=["amam", "raj", "mohit"]
let myobj= {
    name:"tomy",
    age:34
}

const myfunc = function(){
    console.log("hello");
}

console.log(typeof arr)         // object
console.log(typeof myfunc)      // function
console.log(typeof myobj)       // object