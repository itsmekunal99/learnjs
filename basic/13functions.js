// funtions are the block of code which does some funtionality
// instead of writing whole block of code we can just call that funtion by its name

// eg a function to calculate perimeter and aread of a given rectangle
function dimension(a,b){
    ar=a*b
    pr = 2*(a+b)
    console.log(`Area:${ar} , perimeter:${pr}`)
}
const l = 45
const b = 24

// calling
dimension(l,b)
dimension(5,4)


// another funtion to calculate the sum 
function sum(a , b){
    console.log(a+b)
}

// now if we put normal integer values it will work fine
sum(l,b)
sum(4, 5)

// but when we put some string or anything else than integer then it gives unpredictable answers
// since we havent put a check
sum(3, "f")                //prints 3f  took all as a string
sum(3, null)

// when we are defining the function and the values to be passed are called PARAMETERS
// and when we are passing values while calling a function that is called ARGUMENTS

// functions are of two types based on parameters :one take , other doesnt take
// functions are of two types based on return type :one returns a value , other doesnt

// in the above two examples we had funtion which takes parameter but doesnt return any value

// return type example
function Product(a, b){
    // res=a*b
    // return res
    // or
    return a*b
}

const pro =Product(3,4)
console.log(pro)

// or console.log(Product(3,5))

// some funtions have default arguments also
// if we dont pass any argument it can take that value
// eg
function wish(urname = "harry"){
    return `hello ${urname},how are you `
}

console.log(wish("ram"))
console.log(wish())

// but sometimes if there is no default parameter in the defining part of the function and 
// if we dont pass any value then it takes it as undefined

// so to avoid such condition we try to implement if else in the function
 function welc(pname){
    // if(!undefined)
    // if(!pname){    //or                 // this is other way of writing which says pname is not defined
    if(pname=== undefined){
        console.log("enter ur name")
        return
    }
    console.log(`hi ${pname}, welcome to js`)
 }

welc("Ravi")
welc()

// =================================================================
// rest and spread operator use case
// sometimes we need to add more than one values in an argument , so instead of writing it again and again we just use rest operator
// eg 
function cartvalue(...val){
    return val
}

console.log(cartvalue(334 , 560 , 470))  // prints [ 334, 560, 470 ]
// ie gives the value in the form of an array of all values 

// we can pass any object in a funtion too

// we declare a object 
const item1={
    item :"Pillow",
    price :299
}

// now declaring the function
function pricecall(obj){
    console.log(`price of ${obj.item} is ${obj.price}`)
}

// we can pass here an object by two ways 
// any preexisting object or just making an object inside the argument value
pricecall(item1)
// or
pricecall({
    item:"bedsheet",
    price:499
})

// similarly we can pass an array inside a function
// function which returns 3rd element of the array
arr1 =[56, 78 , 54 , 90,32]

function arrret(arr){
    return arr[2]
}

console.log(arrret(arr1))