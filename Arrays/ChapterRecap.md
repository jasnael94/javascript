# Chapter Recap

  const data = [1, 2, 3] is an array containing 3 numbers
  .array.length returns the number of elements inside the array
  .array.push(x) allows you to add the variable x to the end of the array. It also returns the new length of the array (after the push has been made)
  .Arrays defined with const are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they  will always be an array.
  .forEach(callback) iterates over every item in an array
  .A callback is a function definition passed as a parameter to another function.
Always start with a console.log() inside the .forEach() to visualize the shift from array to array item (you can skip that when you become used to it).
   .The .forEach() method will take your function definition and call it for every item of the array. Every time the callback is called, the first parameter
   will represent the corresponding array item
   .Name your arrays in plural and the array item (inside the .forEach()) in singular
   .Make sure to correctly place the return inside a function that contains a .forEach().
