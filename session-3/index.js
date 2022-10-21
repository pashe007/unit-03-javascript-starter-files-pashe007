// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
//using const to define variable//

const a = 10;
let b = 4;
let c = a + b;

console.log(c);

let f = 15;
b = 50;
console.log(c);
console.log(a + b);
c = a + b;
const d = c + b;
console.log(d);
console.log(d + c + b);
let e = 11 + 'x';

const h = 'hello'; 
let w = 'world';
console.log(h + w);

console.log(d + e);

//const userName = 'Gigi';//

function sayHey() {
    console.log("Hey!");
}

sayHey();

function sayNew(name) {
    console.log('Hey' + ' ' + name + '!' + '...');
} 

function conversation(){
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation();
function messages(){
    sayHey()
    console.log('Patience...');
    console.log('you are making progress');
    console.log('walk the walk');
}
 messages();

 function discussions(name, place){
    sayNew(name)
    console.log('you are making progress' + ' ' + 'walk the walk to your' + ' ' + place + '...');
    
}
 discussions('Jace', 'Destiny');

 function messagesNew() {
    sayNew('Patience')
    console.log('you are making progress');
    console.log('walk the walk');
}
 messagesNew();


function futureAge(name, currentage){
    const answer = currentage + 5;
    return "Hi" +' '+ name + ","+ ' ' + "you will be " + answer + ' ' + "in 5 years";
}
console.log(futureAge("Tobi", 34));

function addTwoNumbers(p3, d5) { 
    const answer = p3 + d5;
    return 'The answer is:' + answer;
    }
    console.log(addTwoNumbers(36, 67));
    //--document.getElementById("demo").innerHTML = myFunction(4, 3);--//

function newAge(name, age) {
    const nextAge = age + 5;
    return 'Hey' + ' ' + name +'!,' + 'you will be' + ' ' + nextAge + 'years old in 5 years time.';
}    
console.log(newAge('Tobi', 30));

const squaredNumber = function (number, figure) {
    return number * figure;
}
console.log(squaredNumber(5, 20))

const divide = (number, figure) => {
    return number / figure;
}
console.log(divide(225, 5))

//const destination = () => {//
   // return "Where are we going? "; //

//console.log(destination())//

const destination = (name, day) => "When are we going" + ' ' + name + ' ' + day + '?';

console.log(destination('home', 'tomorrow'))