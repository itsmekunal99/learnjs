// when we are refereing to any property(of that object itself) inside an object then we use the "this" keyword
// eg we are using a property of an object inside a function which is inside that object only

const user={
    uname:"ravi",
    cost:499,

    wish: function(){
        console.log(`hi.${this.uname}, welcome to function`)
    }
    
}
user.wish()