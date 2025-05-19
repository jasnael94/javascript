/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    const voters= ages.filter(function(age){
      return age >= 18
    })
    return voters.length
  }
  