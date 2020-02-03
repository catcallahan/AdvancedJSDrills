name = 'Cat';
var name;
// let leastFav = fruits[1]

console.log(name);

setName();
function setName(){
    var name = 'covalence';
    console.log(name)
}

console.log('first');
let avg = findAvg(2,2);
console.log('second', avg)
function findAvg(a,b) {
    console.log('third');
    var answer = (a+b)/2;
    return answer;
}

// let fruits = ['apple', 'orange', 'pear'];

// function printFruits(){
//    let favFruit = fruits[2];
//     console.log(fruits[0]);

//     function printFavFruit (){
//         console.log(favFruit);
//     }
//     printFavFruit();
//     console.log(leastFav);
// }

// printFruits();

sayMyName();
function sayMyName(){
    console.log('Hello, ' + name)
}

let alertText = function(){
    alert('This text')
}
alertText();