// String length 

// Complete the function getCharCount such that it returns the number of characters in the str parameter that it receives.


// * @param {string} str
//  */


function getCharCount(str) {
return str.length
}

// Sample usage - do not modify
console.log(getCharCount("Sam")); // 3




// SHOUT MY NAME:
// Complete the function shoutMyName such that it returns the name parameter it receives all in upper case.


// @param {string} name

function shoutMyName(name) {
    return name.toUpperCase()

}

// Sample usage - do not modify
console.log(shoutMyName("Sam")); // "SAM"


//Note that .length should not have () after it because it is a property (a value that has already been computed). Whereas .toLowerCase() is a method that requires the () because it's an action that you are performing.//


// LOWER CASE STRING:
// Complete the function lowerName such that it returns the name parameter it receives all in lower case

/**
 * @param {string} name
 */
function lowerName(name) {
    return name.toLowerCase()
    }
    
    // Sample usage - do not modify
    console.log(lowerName("Sam")); // "sam"
    console.log(lowerName("ALEX")); // "alex"