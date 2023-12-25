const id = 1234
let email = "abds@gmail.com"
var pass = "23574"
city = "jaipur"
let state          // this gives undefined value in console

// id = 2345   // this does not work because value of a const cant be changed once assigned
email = "4979dg@gmail.com"
pass = "74879"
city = "mumbai"

console.log(id)       //value of const id remains same 
console.log(email)    //changes 
console.log(pass)     //changes
console.log(city)     //changes

// we can write all in one line  and present it in a table form
console.table([id, email, pass, city, state])

/*
 now we dont use var because of scope problem
*/
console.log("finished")

