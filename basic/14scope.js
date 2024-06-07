// scope 
// there are two type of scope for the values 
// global scope can be used inside any funtion or any other block
// block scope can be used within that block only where it has been defined 

let aa= 45      // this is global scoped value , aa can be used anywhere even within other block{}
{
    bb =66      // this is block scope ie value of bb can be used only within this {}
}

let a = 44
const b = 55
var c = 66         // this does not follow any scope
d = 77             // this also not follow any scope
                   // hense c and d are not preffered
            
if(!undefined){
    let a = 45
    const b = 56
    var c = 67        
    d = 78   
}

// if we comment out the above global a and b and then try to console log then it 
// gives an error that it is not defined 
console.log(a)        // run this after commenting above global a=44 and b=55
console.log(b)        // to just see the output
// but this does not happens with the c and d 
// and this also result in confusion if two var variables of same name is defined  
console.log(c)         // even after commenting this prints 67

// hense we dont use var normally
///////////////////////////////////////////////////////////////////////////////

// nested scope 
function one(){
    const user1 ="person1"

    function two(){
        const user2 ="person2"
        console.log(user1)         // we can access user1  inside fun2 since we are still inside fun1
    }
    // console.log(user2)          // but we cant acces user2 since we are outside fun2   
    // uncommenting this will give an error--user2 is not defined
    two()                          //prints person1
}

one()

// -----------imp------------------

// we can call the function above the function defining too
// but when we declare a funtion while holding it in a variable we get an error

// eg here we are calling that function before declaration
console.log(incr1(5))   

function incr1(num){
    return num+1
}

// but if we call the function before defining here in the second case then 
// inrc2(5)                             // gives an error -->Cannot access 'inrc2' before initialization
const inrc2= function(num){
    return num+2
}

