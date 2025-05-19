// Get last app 

// Complete the function getLastApp such that it returns the last element from the apps array it receives as a parameter.


/**
 *
 *
 * @param {array} app
 */
function getLastElement(app){
    return app.at(-1)
}


// Sample usage - do not modify
console.log(getLastApp(["Chrome", "Clock", "Twitter"])); // "Twitter"
console.log(getLastApp(["Safari", "Contacts"])); // "Contacts"