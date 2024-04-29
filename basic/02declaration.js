const idno = 234;
let Pname = "aditya";
var desig = "engineer";
place = "jaipur";

// mostly var is not used because of scope problem
console.log(idno);
console.log(place);

console.table([idno , Pname , desig , place])

// idno=456   // cant be changed  since it is a const
// others can be changes 
Pname = "harsh";
desig="manager";
place="guwahati";

let usermail;   // when value is not given then by default it is set to undefined

console.table([idno , Pname , desig , place , usermail])