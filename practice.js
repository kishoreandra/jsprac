// let movieName = 'NTfdR';

// using conditional loops
// if (movieName === 'R') {
//     console.log('Not a valid movie name');
// } else if (movieName === 'RRR') {
//     console.log('Movie is going to release soon');
// } else {
//     console.log('No movie is that good');
// }

//using switch case

// switch (movieName) {
//     default:
//     // If there is no default then for non-matching it just returns;
//     //Not necessarily to be at last can be at any place or even as first case , but a break statement is required
//     //for further not executing falsy statement
//         console.log('No movie is that good');
//     break;
//     case 'R':
//             console.log('Not a valid Movie');
//         break;
//     case 'NTR': // if two cases have equal check we can do as this
//             case 'RRR':
//             console.log('Movie is going to release');
//         break;
// }

//block scope in switch statement

// const action = 'say_hello';
// switch (action) {
//     case 'say_hello':
//         let message = 'hello';
//         console.log(message);
//         break;
//     case 'say_hi':
//         let message = 'hi';
//         console.log(message);
//         break;
//     default:
//         console.log('Empty action received.');
//         break;
// }

// on running gives SyntaxError: Identifier 'message' has already been declared

//As they are block scoped we can fix this by wrapping cases with brackets as:

// const action = 'say_hello';
// switch (action) {
//   case 'say_hello': { // added brackets
//     let message = 'hello';
//     console.log(message);
//     break;
//   } // added brackets
//   case 'say_hi': { // added brackets
//     let message = 'hi';
//     console.log(message);
//     break;
//   } // added brackets
//   default: { // added brackets
//     console.log('Empty action received.');
//     break;
//   } // added brackets
// }

//Ternary Operators

// let ageOfPerson = '24';

// //condition ? exprIfTrue : exprIfFalse

// ageOfPerson > '22' ? console.log('Drink Beer') : console.log('Drink Juice');

// Handling false values : possible falsy expressions are: null, NaN, 0, the empty string (""), and undefined.

// function greeting(person) {
//     var name = person ? person.name : 'stranger';
//     return `hi ${name}`;
// }

// // checking true
// console.log(greeting({ name: 'kishore' }));

// // checking falsy values
// console.log(greeting(null));

//ternary chain :
// function example() {
//     return condition1 ? value1
//          : condition2 ? value2
//          : condition3 ? value3
//          : value4;
// }

// // Equivalent to:

// function example() {
//     if (condition1) { return value1; }
//     else if (condition2) { return value2; }
//     else if (condition3) { return value3; }
//     else { return value4; }
// }

// ternary practice

// function checkGame(noOfPlayers) {
//     return noOfPlayers == '11' ?
//         'cricket and football' :
//         noOfPlayers == '9' ?
//         'baseball' :
//         noOfPlayers == '5' ? 'basketball' : noOfPlayers == '7' ? 'kabaddi' : 'some other game';
// }

// console.log(checkGame(7));

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// function isValidPassword(userName, password) {
//     return password.length > 8 && password.indexOf(' ') === -1 && password.indexOf(userName) === -1;
// }

// let tst = isValidPassword('kishore', 'kiyhhhhfhik');
// console.log(tst);

// function getAverage(numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     let avg = sum / numbers.length;
//     return avg;
// }

// let res = getAverage([0, 50]);

// console.log(res);

// const multiplyBy = function(num) {
//     return function(x) {
//         return num * x;
//     };
// };

// let res = multiplyBy(4);
// console.log(res(5));

// function isBetween(x, y) {
//     return function(num) {
//         return num >= x && num <= y;
//     };
// }

// const isChild = isBetween(0, 18);
// console.log(isChild(55));

// const isInEighties = isBetween(1980, 1989);
// console.log(isInEighties(1984));

// const numbers = [1, 3, 4, 5, 6];

// // numbers.forEach(function(num) {
// //     console.log(num * 5);
// // });

// function triple(n) {
//     console.log(n * 3);
// }

// numbers.forEach(triple);

// const movies = [{
//         hero: 'prabhas',
//         name: 'billa'
//     },
//     {
//         hero: 'ram',
//         name: 'devdas'
//     },
//     {
//         hero: 'vijay',
//         name: 'arjunreddy'
//     },
//     {
//         hero: 'pspk',
//         name: 'panja'
//     },
//     {
//         hero: 'mb',
//         name: 'dookudu'
//     }
// ];

// movies.forEach(function(movie) {
//     console.log(movie.hero.toUpperCase() + '-' + movie.name.toUpperCase());
// });

// const fruits = ['apple', 'banana', 'grapes'];

// fruits.forEach(function(fruit, idx) {
//     console.log(idx, fruit);
// });

// const numbers = [1, 2, 3, 4];

// // const double = numbers.map(function(num) {
// //     return num * 2;
// // });

// // console.log(double);
// // console.log(numbers);

// const isEven = numbers.map(function(num) {
//     return {
//         number: num,
//         isEven: num % 2 === 0
//     };
// });

// console.log(isEven);

// const players = ['sehwag', 'devilliers', 'joeroot', 'brainlara'];

// const caps = players.map(function(player) {
//     return player.toUpperCase();
// });

// // console.log(players);

// // console.log(caps);

// const dotPlayers = players.map(function(player) {
//     return player.toUpperCase().split('').join('.');
// });

// console.log(dotPlayers);

// const movies = [{
//         hero: 'prabhas',
//         name: 'billa'
//     },
//     {
//         hero: 'ram',
//         name: 'devdas'
//     },
//     {
//         hero: 'vijay',
//         name: 'arjunreddy'
//     },
//     {
//         hero: 'pspk',
//         name: 'panja'
//     },
//     {
//         hero: 'mb',
//         name: 'dookudu'
//     }
// ];

// const heroes = movies.map(function(movie) {
//     return movie.hero.toUpperCase();
// });

// console.log(heroes);

// const triple = (x) => {
//     return x * x;
// };

// for single param we can exclude paranthesis as x => {}

// const five = triple(5);

// console.log(five);

// const multiply = (x, y) => {
//     return x * y;
// };

// console.log(multiply(40, 20));

// to just console log we have to use empty params as :

// const consoleLog = () => {
//     console.log('i just need an empty param :)');
// };

// consoleLog();

// implicit return

// const quadruple = (x) => x * 4;

// console.log(quadruple(5));

const numbers = [2, 5, 8, 7, 9];

// without arrow
const double = numbers.map(function(num) {
    return num * 2;
});

//with arrow

const double1 = numbers.map((num) => {
    return num * 2;
});

//implicit

const double2 = numbers.map((num) => num * 2);

// console.log({
//     double: double,
//     double1: double1,
//     double2: double2
// });

const evenOdd = numbers.map(function(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
});

const exArrEvenOdd = numbers.map((num) => {
    return num % 2 === 0 ? 'Even' : 'Odd';
});

const impArrEvenOdd = numbers.map((num) => (num % 2 === 0 ? 'Even' : 'Odd'));

console.log(evenOdd);
console.log(exArrEvenOdd);
console.log(impArrEvenOdd);