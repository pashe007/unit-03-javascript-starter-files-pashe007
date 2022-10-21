// ****************************************************TASK 1 - OBJECTS****************************************************



// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);
//examples//

console.log(addition + multiplication);
console.log(x * x)
console.log(subtraction * x)
console.log(multiplication * y)
console.log(addition === subtraction)
console.log(addition !== subtraction)
console.log(x * division)

const modules = x % y;
console.log('Remainder: x % y =' + ' ' + modules)
console.log(x ** y)
console.log( 'Exponetiation y**x =' + ' ' + y ** x)









const personA = {
    name: 'uche',
    age: 29,
    location: 'bradford',
    likes: 'games'
}

const personB = {
    name: 'Ella',
    age: 33,
    location: 'liverpool',
    likes: 'dance'
}

const personC = {
    name: 'florence',
    age: 30,
    location: 'enugu',
    likes: 'defence'
}

const personD = {
    name: 'Oscar',
    age: 33,
    location: 'bradford',
    likes: 'work out'
}


console.log(personD.name,'hello', personC.name)

function biography (person) {
  //console.log(personD)//
    return 'Hi, my name is' +' '+ person.name + '.' + 'I am' + ' ' + person.age +  'years old,' + ' ' + ' I live in' +' ' + person.location + ' '+
   'and i love' + ' ' + person.likes + '.';
}

console.log(biography(personD))


const details = (person) => 'Hi, my name is' +' '+ person.name + '.' + 'I am' + ' ' + person.age +  'years old,' + ' ' + ' I live in' +' ' + person.location + ' '+
'and i love ' + ' ' + person.likes + '.';
 
console.log(details(personC))
console.log(details(personB))
console.log(biography(personA))


// ****************************************************TASK 3****************************************************

let driveage = 18;
let presentage = 22;


//homework//

const areYouOldEnoughToDrive = presentage > driveage;
console.log(' Are you Old enough to drive?' + ' '+ areYouOldEnoughToDrive)

  

 








