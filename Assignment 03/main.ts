// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName : string = "kERat"


let userName: string[ ] = personName.split( " " );
let titlecaseName: string  = ""
for (let i = 0; i < userName.length; i++) {
 titlecaseName +=userName[i].charAt(0).toUpperCase() +userName[i].slice(1).toLowerCase()+""
};


console.log("Upper Case "+ personName.toUpperCase())
console.log("Lower Case "+ personName.toLowerCase())
console.log("TitleCase",titlecaseName)



