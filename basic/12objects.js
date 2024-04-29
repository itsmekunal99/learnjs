// objects can be declared in two types ==> literals , constructors
// when we declare as constructor then singleton is created ie it has only one instance

// object using constructor
// Object.create 

const sym= Symbol("key45")

// object literals
const user ={
    pname :"harsh",
    age :34,
    pstat:true,
    mail :"xyz@gmail.com",
    // duty-code: "45d" 
    "duty-code" :"45h",

    // we can also add array inside it
    memb:["amar","jay"],

    // adding symbol to an object
    obsym :"key45",        //prints as => obsym: 'key45',
    // this is not taken as symbol but as a string hense we should write as
    [sym] :"key46"         //prints as => [Symbol(key45)]: 'key46'

}

// accessing way
console.log(user.age)
console.log(user["mail"])
console.log(user["duty-code"])

// the second way of accesing is used when there is a space , higfen included keyname
// suppose "duty code" or "duty-code"

// this type of accesing is also helpful in case of symbols
console.log(user[sym])

// we can check the typeof
// console.log(typeof user[sym])

// we can change value inside an object 
user.age =65

// or we can also freeze it so that no one changes it 
// Object.freeze(user)

// here even if we try to make change in object values it wont change
// user.age =45
console.log(user.age)        // prints value = 65
// console.log(user)        

// we can also add funtion inside a object
user.greet = function(){
    console.log(`hello ${this.pname} , welcome to the object "user"`)
    // when we are accesing any property of the same object 
    // then we can use "this" keyword  :this.pname == user.pname
}

console.log(user.greet)    //prints => [Function (anonymous)]
console.log(user.greet())    

// declaring object as a singleton ie using constructors=========================================
const apps = new Object()
// const apps={}   // this object is not a singleton

apps.id ="45sd"
apps.name ="hirak"
apps.status =false

// console.log(apps)

// we can put objects inside other objects 
const employ={
    email:"skdk@gmail.com",
    fullname:{
        first:"ram",
        last:"verma"
    }
}
// we can do more nesting as per requirements 
// to access the exact property we just use dot notation and follow like we follow any path in storage

console.log(employ)
console.log(employ.fullname)
console.log(employ.fullname.last)

// we can also merge two objects
const obj1 ={ id1 :45 , code1:"45rs" }
const obj2 ={ id2 :46 , code2:"46rs" }

// const obj3={obj1 , obj2}  // this is the wrong way here there is object inside other object

//const obj4 = Object.assign({}, obj1 , obj2)
// or


const obj4 = {}
Object.assign(obj4, obj1 , obj2)

// it is of the form Object.assign(target , source1 , ..... , sourceN)
console.log(obj4) 

// we can also do this where we want to fit other object inside a preexisting object
// Object.assign(obj1 , obj2)   // we can also add more objects to it following obj2 
// console.log(obj1)

// we can also use spread operator concept
const obj5 ={...obj1 , ...obj2}   // we can add more
console.log(obj5)


// we can display all the keys or their values in the form of array 
console.log(Object.keys(apps))
console.log(Object.values(apps))
console.log(Object.entries(apps))

// sometimes we want to acces a value in an object , if its not presrnt then thre is a chance that the code may crash
// hense to avoid such situation we do
console.log(apps.hasOwnProperty('status'))      //true
console.log(apps.hasOwnProperty('logged in'))   //false

// there are diffrent other methods also which can be used on objects===================

// destructuring of an object
const course ={
    cname :"phpcrash",
    id :5635,
    price :499,
    instructor :"hitesh"
}

// suppose when we want to get a value again and again at difrent place 
// then using course.id everytime will be tedious work to do 
// therefore we can use the following syntaxx
const {id} =  course
console.log(id)

// or we can rename to make it easy for us
const{instructor :ins} =course
console.log(ins)

// API's similar to function in terns of funtionality
// but here we dont define it it is just called from outside
// api come in the form of json form

// nowadays the data come in the form of json files 
// which are similar to object files but the keys and values both are in the form of string
// {
//     "name":"mani",
//     "desig" :"dev",
//     "salary":133000
// }
