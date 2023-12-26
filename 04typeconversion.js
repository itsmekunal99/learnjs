let a = 45
console.log("a is ",typeof a)     // returns a  number

let b = "66"
console.log("b is ", typeof b)     // returns a string

let c = Number(b)         // here typeconversion takes place from string to number
console.log("c is ",typeof c)     // returns a number

// sometimes conversion takes place succesfully but the actual value is not a number but a NaN type
let d = "45sd"
console.log("d is ",typeof d)     // returns string
let e = Number(d)                 // returns number
console.log("e is ",typeof e)
console.log("value of e is ",e)   // returns NaN

// similarly boolean values get converted to 1 AND 0
let ismale = true
console.log("ismale is ", typeof ismale)    // boolean
let gen= Number(ismale)        
console.log("gen is ", typeof gen)          // number
console.log("gen value is ", gen)           // 1

// similarly the reverse also happens that is when we typecast 1 into bool it gives true 
// and typecasting of string to bool also happens when we put typecast empty string it gives false
let r = 1
console.log("r is ", typeof r)       // number
let s = Boolean(r)
console.log("s is ", typeof s)        // boolean
console.log("value of s is ",  s)     // true

let x = "abc"
console.log("x is ", typeof x)        // string
let y = Boolean(x)
console.log("y is ", typeof y)        // boolean
console.log("value of y is ",  y)     // true

let o = 56
console.log("o is ", typeof o)        // number
let p = String(o)
console.log("p is ", typeof p)        // string





