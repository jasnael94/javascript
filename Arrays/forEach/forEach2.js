//Log user ids 

//Complete the function logUserIds such that it iterates over every item in the userIds array it receives
//  and logs it to the console (using console.log).

/**
 * @param {number[]} userIds
 */
function logUserIds(userIds) {
    userIds.forEach(function(element){
     console.log(element)
    })

}

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console
