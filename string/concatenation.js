// STRING CONCATENATION

// Complete the function concatInitials such that it returns the firstNameInitial followed by the lastNameInitial.

// **
//  * @param {string} firstNameInitial
//  * @param {string} lastNameInitial
//  */
function concatInitials(firstNameInitial, lastNameInitial) {
return firstNameInitial[0]+lastNameInitial[0]
}

// Sample usage - do not modify
console.log(concatInitials("J", "D")); // "JD"
console.log(concatInitials("S", "B")); // "SB"


//__________________________________________

//TEXT ELLIPSIS 

// Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis.
//  An ellipsis is the dot character written 3 times: ...

//@param {string} text

function getDescription(text){
   return  text.substring(0,10)+"..."  
}

console.log(getDescription("Tomorrowland"))//Tomorrowla...