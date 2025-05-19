// String sizes 

// Complete the function getStringSizes such that it returns an array of the number of characters for every string it receives in the strings parameter.

// This means, for the array ["abc", "d"] it should return [3, 1] that's because the first string is made up of 3 characters and the second string is made up of 1 character.


/**
 *
 *
 * @param {string[]} strings
 */
function getStringSizes(strings){
    return strings.map(function(string){
        return string.length
    })
}

console.log(getStringSizes(["abc","b"]))//[3,1]
console.log(getStringSizes(["ADFGG","tr"]))//[5,2]