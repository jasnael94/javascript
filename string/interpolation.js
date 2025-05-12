// STRING INTERPOLATION:

// Complete the function sayHello such that it interpolates the variable name into a string "Hello name".

// /**
//  * @param {string} name
//  */
function sayHello(name) {
    return `Hello ${name}`
    }
    
    // Sample usage - do not modify
    console.log(sayHello("Alex")); // "Hello Alex"
    console.log(sayHello("Sam")); // "Hello Sam"




//     String interpolation advanced 

// Complete the function getFullName such that it returns the full name of the person using interpolation.

// /**
//  * @param {string} firstName
//  * @param {string} lastName
//  */
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
    }
    
    // Sample usage - do not modify
    console.log(getFullName("Sam", "Doe")); // "Sam Doe"
    console.log(getFullName("Alex", "Blue")); // "Alex Blue"
    