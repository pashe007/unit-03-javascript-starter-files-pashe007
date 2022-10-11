// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
//using const to define variable//

const a = 10;
let b = 4;
let c = a + b;

console.log(c);

let f = 15;

console.log(c);
console.log(a + b);

const d = c + b;

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

function conversation(){
    sayHey();
    console.log("How are you?");
    console.log("Goodbye");
}
conversation();

function futureAge(name, currentage){
    const answer = currentage + 5;
    return "Hi" +' '+ name + ","+ ' ' + "you will be " + answer + ' ' + "in 5 years";
}
console.log(futureAge("Tobi", 34));

