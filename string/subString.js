

//     GET FIRST CHARACTER: 

// Complete the function getFirstCharacter such that it returns the first character of the name parameter it receives.


function getFirstCharacter(name) {
    return name[0]

}

// Sample usage - do not modify
console.log(getFirstCharacter("Amsterdam")); // "A"


// _________________________________________________________________________________________________

// GET LAST CHARACTER:
// Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.

function getLastCharacter(name) {
    return name[name.length-1]
    }
    
    // Sample usage - do not modify
    console.log(getLastCharacter("Sam")); // "m"

// _________________________________________________________________________________________________

//     SKIP THE FIRST CHARACTER

// Complete the function skipFirstCharacter such that it returns all the characters except the first one from the text parameter it receives.

//  * @param {string} text

function skipFirstCharacter(text) {
    return text.substring(1)
    }
    
    // Sample usage - do not modify
    console.log(skipFirstCharacter("Xcode")); // "code"

// _________________________________________________________________________________________________


// Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives.

export function getDescription(text) {
   return text.substring(0,10); // write something in the BROWSER and see it in the console

}

console.log('HelloWorld !')// HelloWOrld


