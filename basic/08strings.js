const username= "saket99"
const score = 56

// console.log("username " +username +" has score = " + score)
// this is not the conventional way but try to use  string interpolation method 
// here we use backticks and make placehoders for any variable  ==> it is more convinient
console.log(`username ${username} has a score of ${score}`) 

console.log( typeof username)           // prints string
console.log(username.length) 
console.log(username.toUpperCase())     
console.log(username.charAt(6))         
console.log(username.indexOf('w')) 

// there is one more way of defining a string ie by object
let thisstr = new String('newstring')
console.log( typeof thisstr)           // prints object

console.log(thisstr[0])   // not to be mistaken as array

// now we can use it like an object and we can apply any method to it 
console.log(thisstr.__proto__)
// similarly we can apply any methods to it

console.log(thisstr.length)            // prints the length ie - 9
console.log(thisstr.toUpperCase())     // prints all the in capital 
console.log(thisstr.charAt(6))         // prints the achatacter at a given index
console.log(thisstr.indexOf('w'))      // prints the first occurance of the given alphabet

// string slicing is also possible here 
let otherstr = thisstr.substring(0,4)
console.log(otherstr)

let slicestr = thisstr.slice(-6,6)    // here we can give negative values too 
console.log(slicestr)

const trimstr  = "   trimthis   "
console.log(trimstr)
console.log(trimstr.trim())          // removes the whitespace characters 

// there is a method to replace any character or substring from a different substring
const url ="http://giva.com/profile%30user"
console.log(url.replace('%30', '-'))  
// prints :http://giva.com/profile-user

// if we want to break a string into array 
// on the basis of breaks , whitespace, or some symbol then we can use this methid
const gamename="jerry-the-jack-game"
console.log(gamename.split('-'))
// prints [ 'jerry', 'the', 'jack', 'game' ]

// to find if there is a substring present in that string or not then
console.log(gamename.includes('jerry'))  // gives true or false
