// arrays
// collection of multiple items stored in a variable 
// arrays in js are resizable
// arrays can contain diffrent types of elemnts
// they can be accesed only using index
// array copy operation makes shallow copies ie points to memory in heap doesnt make copy

const arr= [2 , 5 ,6 ,3 , 9]
const secarr= ["hero" , "villian" , "herione"]

// arrays can also be declared as 
const diffarray = new Array(2 , 4 , 6 , 8)

console.log(typeof arr)    // prints object 
// hense it also have different prototypes which can be accesed using different methods

console.log(secarr.length)

// we can add or remove any elements from an array == > happens as a stack
arr.push(36)        // adds 36 
arr.push(77)        // adds 77
arr.pop()           // removes last element ie 77
console.log(arr)

// similarly to remove or add elements in the starting we use unshift and shift
secarr.unshift("daaku")
secarr.unshift("river")
secarr.shift()
console.log(secarr)


console.log(secarr.includes("daaku"))       // prints boolean value
console.log(secarr.indexOf("mamu"))         // prints -1 since it is not present 
console.log(secarr.indexOf("hero"))         // prints the index ie 1

const newarr = arr.join()
// binds the array elements but also convert them into string
console.log(newarr)
console.log( typeof newarr)

// slice and splice
const arr0 = [0 , 1 , 2 , 3 , 4 , 5 , 6] 

//slice
const arr1 = arr0.slice(1, 3)                 // end index element not taken
console.log("arr 1            :" , arr1)
console.log("after slice arr0 :" , arr0)      // doesnt alters the original array

// splice
const arr2 = arr0.splice(1, 3)               // end index element is taken
console.log("arr 2            :" , arr2)
console.log("after slice arr0 :" , arr0)     // alters the original array


console.log("=============part 2 =========== =")
// concatenation
const car = ['hyundai' , 'kia' , 'MG' , 'suzuki']
const bike = ['KTM' , 'hero' , 'bajaj' , 'honda']

// if we try to use push any array to other array
// then we get the other array in side the first one as an element

// eg  
// car.push(bike)
// console.log(car)                    // changes the original array
    // output :
    // [
    //   'hyundai',
    //   'kia',
    //   'MG',
    //   'suzuki',
    //   [ 'KTM', 'hero', 'bajaj', 'honda' ]
    // ]

// but using concat merges all elements in a single array
const veh1 = car.concat(bike)
console.log(veh1)

// or
// console.log(car.concat(bike))     // gives same result

// car.concat(bike)  this has to be stored in some array or directly printed 
// becaused it doesnt save in memory  // doesnt changes the original array

// similarly we can use spread method ==> which works on more than two arrays
const plane = ['indigo' , 'airindia' ,'spicejet']

const transport = [...car ,...plane , ...bike]
console.log(transport)

// when we have irregular elements inside array and subarray 
// then we can merge them all in one having only one occurance
const mix = [ 1 , 4 , [1, 2 , 3] , 5 , 7 ,[6 , 3 [2 , 1]]]
const simple = mix.flat(Infinity)
console.log(simple)

// when data are in scarp and not in the array format 
// since we need to perform operation on array hense we need to convert to array

console.log(Array.isArray('workplace'))   // returns false 
// now to convert it to an array we use from 
console.log(Array.from('workplace'))

// if we pass any object then it returns an empty object ==> cuz we havent defined the basis of element
console.log(Array.from({pname:'harsh'}))    //ie keys or values

// when we want to make an array of elements then we use
let scr1 = 100
let scr2 = 200
let scr3 = 300

console.log(Array.of(scr1, scr2 , scr3))