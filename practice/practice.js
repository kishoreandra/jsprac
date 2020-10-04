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

// const numbers = [2, 5, 8, 7, 9];

// // without arrow
// const double = numbers.map(function(num) {
//     return num * 2;
// });

// //with arrow

// const double1 = numbers.map((num) => {
//     return num * 2;
// });

// //implicit

// const double2 = numbers.map((num) => num * 2);

// // console.log({
// //     double: double,
// //     double1: double1,
// //     double2: double2
// // });

// const evenOdd = numbers.map(function(num) {
//     return num % 2 === 0 ? 'Even' : 'Odd';
// });

// const exArrEvenOdd = numbers.map((num) => {
//     return num % 2 === 0 ? 'Even' : 'Odd';
// });

// const impArrEvenOdd = numbers.map((num) => (num % 2 === 0 ? 'Even' : 'Odd'));

// console.log(evenOdd);
// console.log(exArrEvenOdd);
// console.log(impArrEvenOdd);

// FIND

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

// const movie = movies.find((movie) => {
//     return movie.name.includes('panja');
// });

// console.log(movie);

// const players = ['sehwag', 'AB de Villiers', 'devilliers', 'joeroot', 'brainlara'];

// const player = players.find((player) => player.includes('de'));

// console.log(player);

// FILTER

// const nums = [1, 3, 6, 8, 9, 10];

// const even = nums.filter((num) => {
//     return num % 2 === 0;
// });

// console.log(even);

// const colors = [{
//         color: 'black',
//         category: 'hue',
//         type: 'primary',
//         code: {
//             rgba: [255, 255, 255, 1],
//             hex: '#000'
//         }
//     },
//     {
//         color: 'white',
//         category: 'value',
//         code: {
//             rgba: [0, 0, 0, 1],
//             hex: '#FFF'
//         }
//     },
//     {
//         color: 'red',
//         category: 'hue',
//         type: 'primary',
//         code: {
//             rgba: [255, 0, 0, 1],
//             hex: '#FF0'
//         }
//     },
//     {
//         color: 'blue',
//         category: 'hue',
//         type: 'primary',
//         code: {
//             rgba: [0, 0, 255, 1],
//             hex: '#00F'
//         }
//     },
//     {
//         color: 'yellow',
//         category: 'value',
//         type: 'primary',
//         code: {
//             rgba: [255, 255, 0, 1],
//             hex: '#FF0'
//         }
//     },
//     {
//         color: 'green',
//         category: 'hue',
//         type: 'secondary',
//         code: {
//             rgba: [0, 255, 0, 1],
//             hex: '#0F0'
//         }
//     }
// ];

// const hue = colors.filter((color) => {
//     return color.category === 'hue';
// });

// console.log(hue);

// EVERY

// const words = ['dog', 'cat', 'bats', 'rat'];

// const is3Let = words.every((word) => word.length === 3);

// console.log(is3Let);

// // Some

// const any3Let = words.some((word) => word.length === 3);
// console.log(any3Let);

//  sort method using func call backs

// const prices = [1, 22.4, 2.1, 3.6, 11.5];

// console.log(prices.sort()); // bad sort

// const players = [{
//         name: 'kohli',
//         price: 100
//     },
//     {
//         name: 'AB',
//         price: 97
//     },
//     {
//         name: 'Dhoni',
//         price: 77
//     },
//     {
//         name: 'Gayle',
//         price: 85
//     },
//     {
//         name: 'Root',
//         price: 79
//     },

//     {
//         name: 'Williamson',
//         price: 93
//     },

//     {
//         name: 'Babar',
//         price: 89
//     }
// ];

// const sortedPlayersAsc = players.concat().sort((a, b) => {
//     return a.price - b.price;
// });
// const sortedPlayersDesc = players.concat().sort((a, b) => {
//     return b.price - a.price;
// });

// console.log(players);
// console.log(sortedPlayersAsc);
// console.log(sortedPlayersDesc);

// REDUCE

// const nums = [12, 25, 45, 85, 6, 25, 14];

// const sumOfNums = nums.reduce((accumulator, currentVal) => {
//     return accumulator + currentVal;
// });

// // console.log(sumOfNums);

// const avgOfNums = sumOfNums / nums.length;

// console.log(avgOfNums);

// It must have a capital letter.
// It must contain at least one number.
// It must contain a punctuation mark => (. , ! ? : ; )
// It cannot have the word "password" in the string.
// It must be longer than 7 characters and shorter than 31 characters.

// const res = function(pass) {
//     passArr = pass.split('');
//     let checkUpperCase = passArr.some((char) => char === char.toUpperCase());
//     let checkNo = passArr.some((char) => Number.isInteger(parseInt(char)));
//     let checkPuncMark = /[.|,|!|?|:|;]/.test(pass);
//     if (pass == 'password') {
//         var isContainPassword = false;
//     } else {
//         var isContainPassword = true;
//     }
//     let passLimit = pass.length > 7 && pass.length < 31;

//     if (checkUpperCase && checkNo && checkPuncMark && isContainPassword && passLimit) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(res('turkey90AAA'));