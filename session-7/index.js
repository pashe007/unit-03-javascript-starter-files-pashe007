// ****************************************************TASK 1****************************************************

const person = ['simi', 'bola', 'alice', 'zoya', 'david', 'ellie', 'felix', 'gigi', 'leila', 'heidi' ]


person.sort()
person.reverse()
console.log(person);





const numbers = [5, 325, 67, 100000, 150]









// ****************************************************TASK 2****************************************************











// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}
