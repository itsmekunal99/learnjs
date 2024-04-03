// data types are of two types ==on basis of how they are stored and accesed
// primitive and non primitive
// primitive are ==>they are all call by value type ie when they are 
// accesed then their copy is sent not the actual reference
// String , number, Boolean , null, undefined , symbol, bigint


// js is dynamically typed language :it understand by itelf which datatype to allocate without being specified by the user

// symbols are nothing just values assigned to certain things and is used to referece anything
let id = Symbol('23d')
let anotherid = Symbol('23d')
// two different symbols can have same value

console.log(id === anotherid)     // prints false


// refernce(non-primitive) ==> arrays , objects , functions 

const arr =["aaa","bbb", "ccc", "ddd"]

const myobj={
    pname :"harsh",
    desig :"engineer",
    pscore : 789
}

const callfunc = function(){
    console.log("helloww buddy")
}

console.log(typeof arr)              //prints object for all
console.log(typeof myobj)
console.log(typeof callfunc)         // prints function