let js = document.getElementById("js");

//* ====================
// ? Loop Through Array and print if true

// let colors = ['purple', 'lilac', 'violet']

// for (let i = 0; i < colors.length; i++) {
//   if (colors[i] === 'lilac' || 'purple' || 'violet') {
//     console.log(`${colors[i]} is a great color`)
//   }
// }

// let flavor = 'orange'

// if (flavor !== 'grape' && flavor !== 'cherry') {
//   console.log(`We out of ${flavor}`)
// }

//* ====================
//! Ternary

let num = 7;

// if (num === 7) {
//   console.log('lucky!')
// } else {
//   console.log('Bad!')
// }

// num === 7 ? console.log('lucky!') : console.log('bad!')

// === More Advanced Ternary === //

// let status = 'offline'

// let color = status === 'offline' ? 'red' : 'green'

// console.log(color) // red

//* ====================
//! Arrays

// let shoppingList = ['cereal', 'cheese', 'ice']

// if (shoppingList[0] === 'cereal') {
//   console.log(`pick up ${shoppingList[0]} first`)
// }
// if (shoppingList[shoppingList.length - 2] === 'cheese') {
//   console.log(`then grab the ${shoppingList[1]}`)
// } else {
//   console.log('grab the ice')
// }

// shoppingList.push('oranges')

// console.log(shoppingList)

// if (shoppingList[shoppingList.length - 1] === 'oranges') {
//   console.log(`${shoppingList[shoppingList.length - 1]} are added to list`)
// }

// changing items in array
// shoppingList[0] = 'new item'

// These both do the same thing
// shoppingList[shoppingList.length] = 'new end'
// shoppingList[shoppingList.length - 1] = 'new end'

// console.log(shoppingList)

// ? Push, Pop, Shift, Unshift

// Push - add to end
// Pop - remove from end
// shift - remove from start
// Unshift - add to start

// let topSongs = [
//   'First Time Ever I saw Your Face',
//   'God Only Knows',
//   'A Day In The Life',
//   'Life On Mars'
// ]

// let marsLine = topSongs.pop()

// console.log(marsLine)
// console.log(topSongs)

// let first = topSongs.shift()
// let newFirst = topSongs.unshift('new new new')

// console.log(first)
// console.log(topSongs)
// topSongs.pop()

// console.log(topSongs)

//* ====================
//! Concat

// const array1 = ['a', 'b', 'c']
// const array2 = ['d', 'e', 'f']

// console.log(array1.concat(array2))

//* ====================
//! includes and IndexOf

// let ingredients = [
//   'water',
//   'corn starch',
//   'flour',
//   'cheese',
//   'brown sugar',
//   'shrimp',
//   'eel',
//   'butter'
// ]

// console.log(ingredients.includes('water')) // true
// console.log(ingredients.includes('poop')) // false

// if (ingredients.includes('water')) {
//   console.log('water in the list')
// }

// ? IndexOf Shows you where the location of the string you're looking for
// console.log(ingredients.indexOf('water')) // 0

//* ====================
//! Reverse and Join

// ? Join strings together
// console.log(ingredients.join())

// console.log(ingredients.reverse())

//* ====================
//! Slice

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// let swimmers = animals.slice(0, 3)
// let mammals = animals.slice(2, 4)
// let reptiles = animals.slice(4)
// let quadruped = animals.slice(-3)

// let copy = animals.slice()
// makes a copy of animals array

//* ====================
//! Splice
// ? removes, replaces or adds in Elements of an array

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

// console.log(animals.splice(3, 2)) // bear, lizard

// console.log(animals)

// // Use Splice to add Elements into array
// console.log(animals.splice(3, 0, 'snake', 'pig'))

// console.log(animals)

// // Replace first 2 elements with new
// console.log(animals.splice(0, 2, 'GORILLA', 'GODZILLA'))

// console.log(animals)

//* ====================
//! Sorting (part1)

// let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne']

// // Alphabetize sort
// console.log(people.sort())

// // this shows why passing in a function is better
// let nums = [34, 10, 100000, 67, 99]

// console.log(nums.sort())

//* ====================
//! intro to Reference Types

// let fruit = 'watermelon'
// let color = fruit

// // both point to the same space in memory
// console.log('fruit -', fruit)
// console.log('color -', color)

//* ====================
//! Using Const w/ Arrays

// const myEggs = ['brown', 'brown']
// myEggs.push('new White')
// myEggs[0] = 'green'

// console.log(myEggs)

// myEggs = ['blue', 'pink'] // Error

//* =====================================
//* ===============================
//* =======================
//! SECTION 6 : Objects

// const fitbit = {
//   john: 'John info',
//   berry: 'Berry info',
//   tony: 'Tony info',
//   55: 'fifty five'
// }

// john = fitbit.john

// console.log(john)

// // access a number Key
// console.log(fitbit[55])

//* ====================
//! Accessing Object Properties

// const numbers = {
//   100: 'one hundred',
//   16: 'sixteen'
// }

// console.log(numbers[16])

//! =======

// const palette = {
//   red: '#eb4d4b',
//   yellow: '#f9ca24',
//   blue: '#30336b'
// }

// console.log(palette.red)
// console.log(palette['blue'])

// let color = 'red'
// console.log(palette[color])

//* ====================
//! Adding and Updating Properties

// const userReviews = {}

// userReviews['queenBee49'] = 4.0

// userReviews.mrSmith78 = 3.5

// console.log(userReviews) // {queenBee49: 4, mrSmith78: 3.5}

// userReviews['queenBee49'] += 2
// or
// userReviews['queenBee49']++

// console.log(userReviews) // {queenBee49: 6, mrSmith78: 3.5}

//* ====================
//! Nested Arrays & Objects

// const student = {
//   firstName: 'Nathan',
//   lastName: 'Daniels',
//   strength: ['computer', 'animals'],
//   exams: {
//     midterm: 92,
//     final: 88
//   }
// }

// const avg = (student.exams.midterm + student.exams.final) / 2

// console.log(avg)

// const game = {
//   player1: {
//     username: 'blue',
//     playingAs: 'x'
//   },
//   player2: {
//     username: 'muffins',
//     playingAs: '0'
//   },
//   board: [['0', null, 'x'], ['x', '0', 'x'], [null, '0', 'x']]
// }

// console.log(game.board)

//* ====================
//! Array/Object Equality

// const user = {
//   username: 'CherryGaracia8',
//   email: 'garcia@gmail.com',
//   notification: ['test']
// }

// if (user.notification.length === 1) {
//   console.log('No New Notifications!')
// }

// * =======================
// ? Grab Timestamp

// let date = new Date()

// console.log(date.getTime())

// * =======================
// ! SECTION 7 : Loops!

//! For Loop

// const peoples = ['tom', 'kim', 'berry']

// for (let i = 0; i < peoples.length; i++) {
//   js.innerText = peoples[i]
// }

// * =======================
//! For Loops and Arrays

// const animals = ["lions", "tigers", "bears"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

//? Reverse a Word!

// const word = "stressed";

// let reversedWord = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i];
//   // console.log(reversedWord);
// }

// console.log(reversedWord); // desserts

// const word = "string";
// console.log("original: ", word);

// let reverseWord = "";

// for (let i = word.length - 1; i >= 0; i--) {
//   reverseWord += word[i];
// }
// console.log("reversed: ", reverseWord);

// * =======================
//! Nested For Loops

// for (let i = 1; i <= 10; i++) {
//   console.log("outer loop: ", i);
//   for (let x = 10; x >= 0; x -= 2) {
//     console.log("  dddinner loop: ", x);
//   }
// }

//!===========

// const gameBoard = [
//   [4, 32, 8, 4],
//   [64, 8, 32, 2],
//   [8, 32, 16, 4],
//   [2, 8, 4, 2]
// ];

//? Add all the numbers in each Array, together. (total score = 230)

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   for (let x = 0; x < row.length; x++) {
//     // console.log(row[x]);
//     totalScore += row[x];
//   }
// }

//* Done Myself
// let totalScore = 0;

// for (let i = 0; i < gameBoard.length; i++) {
//   let row = gameBoard[i];
//   // console.log("first: ", totalScore);
//   for (let x = 0; x < row.length; x++) {
//     totalScore += row[x];
//     // console.log("row-x :", row[x]);
//     // console.log("second: ", totalScore);
//   }
// }

// console.log(totalScore);
// * =======================
// ! While loops

// let x = 0;

// totalX = "";

// while (x <= 5) {
//   totalX += x;
//   x++;
// }
// console.log(totalX);

// if (typeof totalX === "string") {
//   console.log("ITS A STRING!");
// }

//!===========

// random music
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// console.log(`Start: Target: ${target} | Guess: ${guess}`);

// while (target !== guess) {
//   console.log(`Target: ${target} | Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }

// console.log(`Finish: Target: ${target} | Guess: ${guess}`);
// console.log("you guessed correct!");

// * =======================
// ! Break Keyword
//? Break lets you break out of loops.

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     console.log("broke out");
//     break;
//   }
// }

//!=========

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (true) {
//   if (target === guess) break;
//   console.log(`Start: Target: ${target} | Guess: ${guess}`);
//   guess = Math.floor(Math.random() * 10);
// }
// console.log(`Finish: Target: ${target} | Guess: ${guess}`);
// console.log("you guessed correct!");
// * =======================
// ! For...Of loops

// const people = ['tom', 'kim', 'berry']

// for (let i of people) {
//   // js.innerText = i
//   console.log(i)
// }

//!=====

// let wordCap = "";

// for (let char of "cockadoodledoo") {
//   wordCap += char.toLocaleUpperCase();
// }

// console.log(wordCap);

//!=====

const magicSquare = [
  [2, 7, 6],
  [9, 5, 16],
  [4, 3, 8]
];

// for (let i = 0; i < magicSquare.length; i++) {
//   let row = magicSquare[i];
//   let sum = 0;
//   for (let x = 0; x < row.length; x++) {
//     console.log(row[x]);
//     sum += row[x];
//   }
//   console.log(`${row} summed to ${sum}`);
// }

//* turning regular for loop above, into for...of
// for (let row of magicSquare) {
//   let sum = 0;
//   for (let num of row) {
//     sum += num;
//   }
//   console.log(`${row} summed to ${sum}`);
// }

//!=====

//* Did this on my own. Works accept for displaying double
//! mailbox milkshake bathtub blackberry mailbox milkshake bathtub blackberry

// const words1 = ["mail", "milk", "bath", "black"];
// const words2 = ["box", "shake", "tub", "berry"];

// let wordMix = [[...words1], [...words2]];

// let newWordMix = "";

// for (let i = 0; i < wordMix.length; i++) {
//   let row = wordMix[i];
//   for (let x = 0; x < row.length; x++) {
//     newWordMix += ` ${words1[x] + words2[x]}`;
//   }
// }

// console.log(newWordMix);

//!=====
//* What this should really look like

// let newList = "";

// for (let i = 0; i < words1.length; i++) {
//   console.log(`${words1[i]}${words2[i]}`);
//   newList += `${words1[i]}${words2[i]} `;
// }

// console.log(newList);

// * =======================
// ! For...Of w/ Objects

// const movieReviews = {
//   Arrival: 9.5,
//   Alien: 9,
//   Amelie: 8,
//   "In Bruges": 9,
//   Amadeus: 10,
//   "Kill Bill": 8,
//   "Little Miss Sunshine": 8.5,
//   Coraline: 7.5
// };

// console.log(movieReviews);

// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));

// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//   total += r;
// }

// let avg = total / ratings.length;

// console.log(avg);

// * =======================
// ! For...in

// for (let x in movieReviews) {
//   console.log(x);
// }

// * =======================
// ! Section 8 : Functions

//! Function Declaration
// function grumpus1() {
//   console.log("ugh... you agian...");
//   console.log("For The Last Time...");
//   console.log("Leave Me Alone!!!");
// }

// grumpus1();

//! Function Expression

// let grumpus2 = function() {
//   console.log("ugh... you agian...");
//   console.log("For The Last Time...");
//   console.log("Leave Me Alone!!!");
// };

// console.log(grumpus2());

//! Arrow Function
// grumpus3 = () => {
//   console.log("ugh... you agian...");
//   console.log("For The Last Time...");
//   console.log("Leave Me Alone!!!");
// };

// grumpus3();

//!========

// rollDie = () => {
//   let roll = Math.floor(Math.random() * 6) + 1;
//   console.log(`Rolled: ${roll}`);
// };

// throwDie = numRolls => {
//   for (let i = 0; i < numRolls; i++) {
//     rollDie();
//   }
// };

// throwDie(6);

//!===============
//* "num" is an argument only when you call it, inside a function it's called a parameter.

//parameter
// square = num => {
//   console.log(num + num);
// };

// square(10); //argument

//!===============
//* Function Challenge 1

//Write a isValidPassword function
//It accepts 2 arguments: password and username
//Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true.
// otherwise: false

//! using variables

//? isValidPassword = (password, username) => {
//?   const tooShort = password.length < 8;
//?   const hasSpaces = password.indexOf(" ") !== -1;
//?   const tooSimilar = password.indexOf(username) !== -1;
//   // if (!tooShort && !hasSpaces && !tooSimilar) return true;
//   // return false
//   //! you can shorten the if statement
//   return !tooShort && !hasSpaces && !tooSimilar;
// };

//! just with If Statements

// isValidPassword = (password, username) => {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isValidPassword("Nathanest", "Nathan")); // Similar username/password || False
// console.log(isValidPassword("Passwords", "Nathan")); // correct password length || True
// console.log(isValidPassword("Pass words", "Nathan")); // has Spaces || False

//!==============
//* Function Challenge 2

//? Write a function to find the average value in an array of numbers
//? avg([0,50]) //25
//? avg([75,76,80,95,100]) //85.2

// avg = array => {
//   let total = 0;
//   for (let num of array) {
//     total += num;
//   }
//   return total / array.length;
// };

// console.log(avg([75, 76, 80, 95, 100])); //! 85.2
// console.log(avg([0, 50])); //! 25

//!==============
//* Function Challenge 3

//? A Pangram is a sentence that contains every letter of the alphabet. like:
//? "The Quick Brown Fox Jumps Over The Lazy Dog"

//? Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing.

//? isPangram('The Five Boxing Wizard Jumps Quickly') //true
//? isPangram('The Five Boxing Wizard Jumps Quick') //false

// isPangram = str => {
//   const alpha = "abcdefghijklmnopqrstuvwxyz";
//   str = str.toLowerCase();
//   // let count = 0;
//   for (let letter of alpha) {
//     if (str.indexOf(letter) === -1) return false;
//   }
//   return true;
//   // if (count === 26) {
//   //   // console.log("This IS a Pangram");
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// };

//! Slighly cleaner way using "includes()"
// isPangram = str => {
//   const alpha = "abcdefghijklmnopqrstuvwxyz";
//   str = str.toLowerCase();
//   for (let letter of alpha) {
//     if (!str.includes(letter)) return false;
//   }
//   return true;
// };

// console.log(isPangram("The Five Boxing Wizard Jumps Quickly"));

//!==============
//* Function Challenge 4

//? Write a getCard() function which returns a random playing card object, like:
//?   {
//?     value: 'k'
//?     suit: 'clubs'
//?   }
//? Pick a random value from:
//? ----1,2,3,4,5,6,7,8,9,10,J,O,K,A
//? Pick a random suit from:
//? ----clubs,spades,hearts,diamonds
//? return both in an object

//! Built Myself (working)
// getCard = () => {
//   const value = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//   const suit = ["Clubs", "Spades", "Hearts", "Diamonds"];
//   // pick random value
//   let randomValue = cardPick(value);
//   // pick random suit
//   let randomSuit = cardPick(suit);
//   // return both in object
//   let card = new Object();
//   card.value = randomValue;
//   card.suit = randomSuit;

//   console.log(card);
// };

// getCard();

//! Colte's way
// cardPick = key => {
//   return key[Math.floor(Math.random() * key.length)];
// };

//* Same as above but cleaner
// cardPick = key => {
//   const index = Math.floor(Math.random() * key.length);
//   return key[index];
// };

// getCard = () => {
//   const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//   const suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
//   // pick random value
//   let randomValue = cardPick(values);
//   // pick random suit
//   let randomSuit = cardPick(suits);
//   // return both in object
//   console.log({ value: randomValue, suit: randomSuit });
// };

// getCard();

//!==============================
//* Section 9 : Advanced Functions

//? Write an array that is expecting an array, then doubles the array
// [1,3,5]
// [2,6,10]

// function doubleArr(arr) {
//   const result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }

// console.log(doubleArr([1, 3, 5])j);

//!============
//* Function Declaration

// function add2(a, b) {
//   return a + b;
// }

// console.dir(add2);
// // console.log(add2)

//* Function Expression (unnamed)

// let add = function(a, b) {
//   return a + b;
// };

// console.log(add(2, 2));

// * Function Expression (Named)

// let final = function sub(a, b) {
//   return a - b;
// };

// console.log(final(1, 2));

//!============
//* Functions inside array (not useful, but do-able)

// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// const operations = [add, sub, mult, div];

// console.log(operations[1](1, 1)); // subtract 1 - 1

//* Quick loop though each item

// const newResult = [];
// for (let all of operations) {
//   let result = all(5, 5);
//   // console.log(result);
//   newResult.push(result);
// }

// console.log(newResult);
