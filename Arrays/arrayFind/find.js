// Get year 

// Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array. 
// Otherwise, it should return undefined.


/**
 * @param {[]} years
 * @param {number} searchYear
 */
function getYear(years,searchYear){
   const item = years.find(function(year){
    return year === searchYear
   }
   )
   return item

}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined