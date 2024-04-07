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

// memory management
// all primitive datatype are stored in stack and others in heap
// the name of any variable or any datatypes are always stored in a 
// stack and the contents of it are stored in heap

// when we assign value of a variabe to another varable then in case of 
// primitive datatype --> copy of value is passed not the actual reference
let myname= "hansika"
let othername = myname     // takes the copy of myname 
// console.log(myname)
console.log(othername)     // hense it prints the copy of myname ie hansika
othername= "anisha"        // we change the value in othername
console.log(othername)     // prints anisha 
console.log(myname)        // value inside myname is not changed henze it prints hansika

// when we assign value of a variabe to another varable then in case of 
// non-primitive datatype --> actual reference of value is passed not the copy
let user = {                // this goes inside a heap
    uname:"hanif",
    upi:"user@upi"
}

let otheruser = user        // actual reference of the user is given inside a heap
                            // now any change in any of the object will bring change in both 
console.log("user =", user)
console.log("otheruser =", otheruser)
// now we change the values of other user --> we will see the change in both
otheruser.upi="otheruser@ybl"

console.log("otheruser =", otheruser)  // value of upi changes here
console.log("user =", user)            // value changes here too