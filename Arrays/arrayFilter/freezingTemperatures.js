//Freezing temperatures 

// Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).

/**
 * @param {number[]} temperatures
 */
function getFreezingTemperatures(temperatures) {
    const freezingTemperatures=temperatures.filter(function(temperature){
        return temperature < 0

    }
    )
    return freezingTemperatures

}

// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]
