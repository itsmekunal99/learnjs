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

