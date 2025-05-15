//Get last app 

// Complete the function loopThroughElements such that it iterates over every item in the elements array it receives and logs it to the console (using console.log).

// Consider Learn Programming if you're stuck.


/**
 * @param {array} elements
 */
function loopThroughElements(elements) {
    elements.forEach(function(element){ 
     console.log(element)  
    })
 
 }
 
 // Sample usage - do not modify
 loopThroughElements(["Sam", "Charlie", "Alex","Jason"]); // should log every name to the console