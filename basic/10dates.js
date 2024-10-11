                                           // dates are calculated from a standerd date jan 1 1970
let today = new Date()                     // 2024-04-06T18:45:50.315Z
console.log(today)                         // Sun Apr 07 2024 00:15:50 GMT+0530 (India Standard Time)
console.log(today.toString())              // 2024-04-06T18:45:50.315Z
console.log(today.toISOString())           // 7/4/2024, 12:15:50 am
console.log(today.toLocaleString())        // 2024-04-06T18:45:50.315Z
console.log(today.toJSON())                // shifted upward


console.log(typeof today)                  // date is an object

// months start from 0

// we can create our date also and then convert it in different format
const mydate = new Date(2023 ,6 , 18)   // if we add more numbers to it it will convert to hours and minutes and so on
console.log(mydate.toDateString())      //Tue Jul 18 2023 

// we can get the exavt time as of now in millisec
console.log(Date.now())     // gives a number which is millisec calculated from 1970

// we can also get the time from a specified time 
console.log(mydate.getTime())   // gives the time in millisec from the date specified till now

// to convert it in sec
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()                // we can get the dates or months or day
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)

newdate.toLocaleString('default',{
    weekday:"long"                   // we can put more format using the objects
})


