// Use this randomNumber inside of the while/for loops to generate a random number
const randomNumber = Math.round(Math.random() * 10);

// ****************************************************TASK 1****************************************************
let counter = 10;

while (counter <= 15){
 console.log(randomNumber);
 counter = counter + 1;
}

let takeout = 1;
let total_takeout = 0;

while (takeout <= 20){
    total_takeout = takeout;
    takeout = takeout + 1;
}

console.log('Total total_takout allowed is:' + ' ' +total_takeout)

let totalSales = 0

for (let sales = 1; sales <= 12; sales = sales + 1) {
    totalSales = totalSales+ 1;
   
}
console.log('Total Sales price:' + ' ' + totalSales)


var myList = ['oranges','apples','pinapples'];
myList[3] = 'grapes'
 function go(){
    alert ('Hey');
 }

myList[4] = go

myList.forEach(function(value, index) {
    return('I have'+' '+ value +' '+ 'in my shopping bag!');
});

let times = 0;

while (times <= 10) {
    console.log('tried it', times);
    times = times ++;
}





// ****************************************************TASK 2****************************************************











