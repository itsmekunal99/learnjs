let score = "56" 

console.log( typeof score);     // string 
console.log(score);             //56

let newscr = Number(score);
console.log( typeof newscr);    // number
console.log(newscr);            // 56

// suppose when we have some number mixed with string then it also gets converted to number
// but its value is NAN-->not a number

score = "56vg"
newscr = Number(score);
console.log(typeof newscr);    // number
console.log(newscr);            // NaN

// similarly other conversions are 
// true , false ==> 1, 0
// null         ==> 0
// undefined  ==> NaN

// similarly we can convert any other type to boolean or string 
let value =0

let st = Boolean(value);
console.log( typeof st);    // Boolean
console.log(st);            // false

// similarly  1 ==> true 
// empty string "" ==> false  otherwise true

// this conversion extends for string too 
let numb = 45 
console.log(typeof numb)      // prints number

let str = String(numb);
console.log(str)              // prints 45
console.log( typeof str)      // prints string

