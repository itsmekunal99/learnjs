let newdate = new Date()                // we can get the dates or months or day
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)

newdate.toLocaleString('default',{
    weekday:"long"                   // we can put more format using the objects
})
