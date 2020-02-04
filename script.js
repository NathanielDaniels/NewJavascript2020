//2609 Impossible Button Demo

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

// let num = 7;

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

// const magicSquare = [
//   [2, 7, 6],
//   [9, 5, 16],
//   [4, 3, 8]
// ];

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

// const thing = {
//   doSomething: mult
// };

// console.log(thing.doSomething(4, 4));

//!============
//* Functions as Arguments (Higher Order)

// function callTwice(func) {
//   func();
//   func();
// }
// function lauph() {
//   console.log("hahaha");
// }
// function cry() {
//   console.log("WAAAAAAAAA");
// }

// callTwice(lauph);

// function repeatNTimes(num, func) {
//   for (let i = 0; i < num; i++) {
//     func();
//   }
// }

// // repeatNTimes(13, lauph);

// function pickOne(f1, f2) {
//   let rand = Math.random();
//   if (rand < 0.5) {
//     f1();
//   } else {
//     f2();
//   }
// }

// console.log(pickOne(lauph, cry));

//!============
//* Functions as Return Values

// function multiplyBy(num) {
//   return function(x) {
//     return x * num;
//   };
// }

// const triple = multiplyBy(3);
// const double = multiplyBy(2);
// const half = multiplyBy(0.5);

// console.log(triple(3)); // 9
// console.log(double(3)); // 6
// console.log(half(10)); // 5

//!=======

// function makeBetweenFunc(min, max) {
//   return function(val) {
//     return val >= min && val <= max;
//   };
// }

// const inAgeRange = makeBetweenFunc(18, 100);

// // console.log(inAgeRange(17)); //false
// // console.log(inAgeRange(68)); //true

// if (inAgeRange(16)) {
//   console.log("You are old enough");
// } else {
//   console.log("You are NOT old enough");
// }
//!============
//* Callbacks
//? function passed into another function as an argument, which is then involked inside the outer function

// setTimeout(function() {
//   alert("welcome!");
// }, 5000); // send alert after 5 seconds

//!======

// const btn = document.getElementById("button");

// btn.addEventListener("click", function() {
//   console.log("button clicked");
// });

// let newBtn = document.createElement("button");
// newBtn.style = "cursor: pointer";
// newBtn.innerHTML = "CLICK ME";

//!============
//* Hoisting

// console.log(animal);
// var animal = "Dog";
// console.log(animal);
//!=====
// // Function Declarations are hoisted
// howl();
// function howl() {
//   console.log("WOO WOO");
// }

// //Function Expressions are not
// owl();
// let owl = function() {
//   console.log("WOO WOO");
// };

//!========================================================
//*Section 10: Apply Functions to Collections of Data'
//!============================
//* Array Callback Methods

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(i => {
//   console.log(i);
// });

// This does same thing (newer version)
// for (let num of numbers) {
//   console.log(num);
// }

// console.log(numbers);
// console.log(numbers.reverse());

//*=====
// function printTriple(n) {
//   console.log(n * 3);
// }

// printTriple(3);

// numbers.forEach(printTriple);

//*=====
// second parameter is indexing
// numbers.forEach(function(i, idx) {
//   console.log(idx, i);
// });

//!============================
//* MAP
// Most used of them all

// const texts = ["rofl", "lol", "omg", "ttyl"];
// const caps = texts.map(i => {
//   return i.toUpperCase();
// });

// console.log(caps);

//*=====

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const words = ["rofl", "lol", "omg", "ttyl"];

// numbers.map(i => {
//   console.log(i);
//   words.map(x => {
//     console.log(`${i} ${x}`);
//   });
// });

// const doubles = numbers.map(i => {
//   return i * 2;
// });

// console.log(doubles);

//*=====

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const array = [];

// numbers.map(num => {
//   // if (num % 2 === 0) {
//   //   array.push({
//   //     value: num,
//   //     isEven: num % 2 === 0
//   //   });
//   // }

//   array.push({
//     value: num,
//     isEven: num % 2 === 0
//   });
// });

// console.log(array);

//*=====

// const words = ["rofl", "lol", "omg", "ttyl"];

// const abbrevs = words.map(i => {
//   return i
//     .toUpperCase()
//     .split("")
//     .join(".");
// });

// console.log(words);
// console.log(abbrevs);

//!============================
//*  Arrow Functions Intro
//? syntactically compact alternative to regular function expression.

// const square = x => {
//   return x * x;
// };
// const sum = (x, y) => {
//   return x + y;
// };
// console.log(square(2)); //4
// console.log(sum(2, 5)); //7

// you can also make them SUPER COMPACT
// const square2 = x => x * x;
// console.log(square2(2)); //4

//*========

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const doubles = nums.map(i => i * 2);

// const numbers = [];

// numbers.push(doubles);

// // console.log(numbers);

// const newNum = numbers.map(i => i.join("."));

// // console.log(newNum);

// const splitNum = newNum.map(i => i.split("."));

// console.log(splitNum);

//*========
//* Arrow + Ternary Function

// const list = nums.map(i => (i % 2 === 0 ? "even" : "odd"));

// console.log(list);

//!============================
//*  Array.find() + includes()
//? Find is used ALOT

// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs. Doubtfire",
//   "Mr. Deeds"
// ];

// let movie = movies.find(mov => mov.includes("Doubt"));

// console.log(movie);

// let movie2 = movies.find(m => m.indexOf("Mrs") === 0);

// console.log(movie2);

//*===========

// const books = [
//   {
//     title: "good omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25
//   },
//   {
//     title: "Bones: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11
//   },
//   {
//     title: "The Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36
//   }
// ];

// const goodBook = books.find(i => i.rating >= 4.4);
// const neilBook = books.find(i => {
//   return i.authors.includes("Neil Gaiman") && i.rating <= 4.2;
// });
// console.log(goodBook); //title: Bones...
// console.log(neilBook); //title: American Gods

//!============================
//*  Array.filter()
//? Creates a new array with ALL elements that pass the test implemented by the provided func. (not just one, like find())

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odds = nums.filter(i => {
//   return i % 2 === 1;
// });

// console.log("odds", odds);

// const firstHalf = nums.filter(i => {
//   return i <= (nums.length + 0.5) / 2;
// });

// const lastHalf = nums.filter(i => {
//   return i >= (nums.length + 0.5) / 2;
// });

// console.log("first Half", firstHalf);
// console.log("last half", lastHalf);

// const reverse = nums.reverse();
// console.log(reverse);

//!====

// const books = [
//   {
//     title: "good omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"]
//   },
//   {
//     title: "Bones: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"]
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"]
//   },
//   {
//     title: "The Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"]
//   }
// ];

// const fantasyBooks = books.filter(book => book.genres.includes("fantasy"));
// const fictionBooks = books.filter(book => book.genres.includes("fiction"));
// const graphicNovelBooks = books.filter(book =>
//   book.genres.includes("graphic novel")
// );
// const historicalFictionBooks = books.filter(book =>
//   book.genres.includes("historical fiction")
// );
// const ficFantBooks = books.filter(
//   book => book.genres.includes("fiction") && book.genres.includes("fantasy")
// );

// const userPrompt = prompt("what type of book are you looking for?");

// switch (userPrompt) {
//   case "fiction":
//     console.log(fictionBooks);
//     break;
//   case "fantasy":
//     console.log(fantasyBooks);
//     break;
//   case "graphic novel":
//     console.log(graphicNovelBooks);
//     break;
//   case "historical fiction":
//     console.log(historicalFictionBooks);
//     break;
//   case "fiction fantasy":
//     console.log(ficFantBooks);
//     break;
// }

//!============================
//*  Some & Every

//* Every
//? Tests whether ALL elements in the array pass the provided function. Returns Boolean Value

// const words = ["dog", "dig", "log", "bag", "wag"];

// const length = words.every(word => {
//   return word.length === 3;
// });
// console.log(length); // true

// const firstWord = words.every(word => word[0] === "d");
// console.log(firstWord); //false

// const lastLetter = words.every(w => {
//   let last_letter = w[w.length - 1];
//   return last_letter === "g";
// });
// console.log(lastLetter); //true

//!=======================
//* Some
//? Similar to Every, but returns true if ANY array elements pass the test

// const words = ["dog", "dig", "log", "bag", "wag", "slag"];

// const dWords = words.some(word => word[0] === "d");

// console.log(dWords); //true

//? W/ Every, this would be false

// const wordLength4 = words.some(word => word.length > 3);

// console.log(wordLength4); //true //? the last element makes it true

//!=======

// const books = [
//   {
//     title: "good omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"]
//   },
//   {
//     title: "Bones: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"]
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 4.11,
//     genres: ["fiction", "fantasy"]
//   },
//   {
//     title: "The Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"]
//   }
// ];

//? Grab the title of books with higher ratings than 4.3
// books.some(book => {
//   if (book.rating > 4.3) {
//     console.log(book.title);
//   }
// });

//? Find titles that have two authors

// const twoAuthors = books.some(book => {
//   if (book.authors[1]) {
//     console.log(book.title);
//   }
// });

//!======================================
//*  Revisiting Sort

// const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

// prices.sort(); // converts to string, sorts by first char.

// console.log(prices);

//?=========================================
//* arr.sort(compareFunc(a,b))
//* if compareFunc(a,b) returns less than 0
//*  - sort a before b
//* if compareFunc(a,b) returns 0
//*  - leave a and b unchanged w/ respect to each other
//* if compareFunc(a,b) returns > 0
//*  - sort b before a
//?=========================================

// prices.sort((a, b) => a - b);

// console.log(prices);

//!======================================
//*  Reduce
//* pt.1
//? Executes a reducer function on each element of the array, resulting in a single value

//* summing an array

// const sum = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//   console.log(accumulator);
//   return accumulator + currentValue;
// });

// console.log(sum);

//!=========
//* pt.2

// const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const totalGrades = grades.reduce((total, currentVal) => total + currentVal);

// const maxGrades = grades.reduce((max, currVal) => Math.max(max, currVal));

// const minGrades = grades.reduce((min, currVal) => Math.min(min, currVal));

// console.log("total grades", totalGrades);

// console.log("max grade", maxGrades);
// console.log("min grade", minGrades);

//* Initial Value =================

// const noInitialValue = [4, 5, 6, 7, 8].reduce((acc, currVal) => acc + currVal);
// const initialValue = [4, 5, 6, 7, 8].reduce((acc, currVal) => {
//   return acc + currVal;
// }, 100);

// console.log(noInitialValue, initialValue);

//!=====================
//*  More Reduce

//* Tallying

// const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

// const tally = votes.reduce((tally, vote) => {
//   tally[vote] = (tally[vote] || 0) + 1;
//   return tally;
// }, {});

// console.log(tally);

// const results = votes.reduce((tally, val) => {
//   tally[val] = (total[val] || 0) + 1;
//   return tally;
// }, {});

//*=====================

// const books = [
//   {
//     title: "good omens",
//     authors: ["Terry Pratchett", "Neil Gaiman"],
//     rating: 4.25,
//     genres: ["fiction", "fantasy"]
//   },
//   {
//     title: "Bones: The Complete Edition",
//     authors: ["Jeff Smith"],
//     rating: 4.42,
//     genres: ["fiction", "graphic novel", "fantasy"]
//   },
//   {
//     title: "American Gods",
//     authors: ["Neil Gaiman"],
//     rating: 3.11,
//     genres: ["fiction", "fantasy"]
//   },
//   {
//     title: "The Gentleman in Moscow",
//     authors: ["Amor Towles"],
//     rating: 4.36,
//     genres: ["fiction", "historical fiction"]
//   }
// ];

// const groupedRating = books.reduce((groupedBooks, book) => {
//   const key = Math.floor(book.rating);
//   if (!groupedBooks[key]) groupedBooks[key] = [];
//   groupedBooks[key].push(book);
//   console.log(groupedBooks);
//   return groupedBooks;
// }, {});

// console.log(groupedRating);

//*=== Practice
// const grouped = books.reduce((groupedBooks, book) => {
//   const key = Math.floor(book.rating);
//   if (!groupedBooks[key]) groupedBooks[key] = [];
//   groupedBooks[key].push(book);
//   return groupedBooks;
// }, {});

// console.log(grouped);

//!======================================
//* === Section 11 ===
//!========================
//? Default function Parameters, Rest & Spread, Destructuring

//* Default function Parameters

// function multi(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }

// console.log(multi(7)); //7
// console.log(multi(7, 3)); //21

//*====
// Now done with Func Params

// function multi2(a, b = 1) {
//   return a * b;
// }

// console.log(multi2(7)); //7
// console.log(multi2(7, 3)); //21

//*====
// Now done with Arrow func

// const greet = (person, greeting = "hi") => {
//   console.log(`${greeting}, ${person}`);
// };

// greet("Nathan");

//*====
// Now done with Array

// const greet2 = (x, y = [1, 2, 3]) => {
//   console.log(x, y);
// };

// greet2("Nathan");
//!======================================
//* Spread
//? Spread Syntax allows an iterable such as an array to be EXPANDED in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected

//*=========
//* Spread for function calls
//? Expands an iterable (array, string, etc.) into a list of arguments

// const nums = [9, 3, 2, 8];
// Math.max(nums); //NaN
// Math.max(...nums); // 9

//============

// function giveMeMore(a, b, c, d) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("c", c);
//   console.log("d", d);
// }

// giveMeMore(4, 5, 6, 7);
//*=========
//* Spread in Array Literals

// const colors = ["red", "orange", "yellow", "green"];

// giveMeMore(...colors);

// const str = "goat";

// giveMeMore(...str);

//*=========
//* Spread in Object Literals
//? Copies properties from one object into another object literal

// const feline = {
//   legs: 4,
//   family: "Feline"
// };
// const canine = {
//   family: "Canine",
//   furry: true
// };
// const dog = {
//   ...canine,
//   isPet: true,
//   adorable: true
// };
// const cat = {
//   ...feline,
//   isGrumpy: true,
//   personality: "unpredictable"
// };

// console.log(cat);

// const catClone = { ...cat };

// console.log(catClone);

// console.log(cat === catClone); //false

//*=========
//* REST
//? it looks like spread, but it's NOT!

//* The Arguments Object (not new)
//? Available inside Every function
//? It's an ARRAY-LIKE object
//? - Has a length property
//? - Does not have array methods like push/pop
//? Contains all the arguments passed to function
//? Not available Inside Arrow Functions!!!
//? ++ Not Likely to use this way ++

// function sum(a, b) {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   console.log(total);
//   return total;
// }

// sum(1, 2, 3, 4, 5); //15

// function sum1() {
//   const argsArr = [...arguments];
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal;
//   });
// }

// console.log(sum1(1, 2, 3));

//* REST Parameters (new!)

//! Old
// function sum(...num) {
//   return sum.reduce((total, currVal) => {
//     return total + currVal;
//   });

//! New

// multiply = (...nums) => {
//   return nums.reduce((total, currVal) => total * currVal);
// };

// console.log(multiply(5, 5));

//====================

// function fullName(first, last, ...titles) {
//   console.log('first', first)
//   console.log('last', last)
//   console.log('titles', titles)
// }

//   console.log(fullName('nathan', 'daniels'))

//*=====================
//* Destructuring
//? A short, clean syntax to 'unpack':
//? - Values from arrays
//? - Properties from Objects
//? Into distinct variables

//* Destructuring Arrays

// const raceResults = [
//   "Eliud Kipchoge",
//   "Feyisa Lelisa",
//   "Galen Rupp",
//   "Ghirmay Ghebreslassie",
//   "Alphonce Simbu",
//   "Jared Ward"
// ];

//* Traditional Way
// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

// console.log(gold, silver, bronze);

//* Same result, done with Destructuring
// const [gold, silver, bronze] = raceResults;

// console.log(`Gold: ${gold}, Silver: ${silver}, Bronze: ${bronze}`);
//*=============
//* to get the forth element in array
//! Add commas to separate
// const [, , , forth] = raceResults;
// console.log(forth);
//*=============
//* using spread with destructuring
// const [winner, ...rest] = raceResults;
// console.log(`Winner = ${winner}, Remaining = ${rest}`);
//*===================================================
//* Destructuring Objects

// const runner = {
//   first: "Eliud",
//   last: "Kipchoge",
//   country: "kenya",
//   title: "Elder of the Order of the Golden Heart of Kenya"
// };

//! Naming off of the keys, so you can pick and choose what you want
// const { first, last, title } = runner;
//! See how this skips over the third item and shows the forth, that is the main difference between array/object destructuring
// console.log(first, last, title); //Eliud Kipchoge kenya

//! You can change the name of the key, here's how
// const { country: from } = runner;
// console.log(from);

//! Destructuring Runner
// const { first, last, ...other } = runner;
// console.log(first, last, other);
//*===================================================
//* Nested Destructuring

// const results = [
//   {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "kenya"
//   },
//   {
//     first: "Feyisa",
//     last: "Lilesa",
//     country: "Ethiopia"
//   },
//   {
//     first: "Galen",
//     last: "Rupp",
//     country: "United States"
//   }
// ];

// const [{ first, last, country }] = results;

// console.log(results[1]);

//! find results from second object in array

// const [, { first, last, country }] = results;
//! Remember, adding the comma is what separates each object
// console.log(first, last, country);

//! Find the Gold Winner and rename them as such(name in first object)
//! you can also add keys from other objects (country)
// const [{ first: goldWinner }, { country }] = results;

// console.log(goldWinner, country); //Eliud , Ethiopia

//*===================================================
//* Destructuring Parameters

// const fullName = ({ first, last }) => {
//   return `${first} ${last}`;
// };

// const runner = [
//   {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "kenya"
//   },
//   {
//     first: "Feyisa",
//     last: "Lilesa",
//     country: "Ethiopia"
//   },
//   {
//     first: "Galen",
//     last: "Rupp",
//     country: "United States"
//   }
// ];

// console.log(fullName(runner[2]));

// function print(person) {
//   const [{ first, last, country }] = person;
//   console.log(person[1]);
// }

// print(runner);

//! Now with Destructuring
// function print({ first, last, country }) {
//   console.log(`${first} ${last}, ${country}`);
// }

// print(runner[1]);

//! Destructuring Parameters w/ Array
// const response = ["HTTP/1.1", "200 OK", "Application/json"];

// function parseResponse([protocol, statusCode, contentType]) {
//   console.log(protocol);
//   console.log(statusCode);
//   console.log(contentType);
// }

// parseResponse(response);

//!========================================================
//** Section 12: Object Methods and the "This" keyword **
//? The Secret Little Life of OBJECTS

//? Goals:
//? - Add Methods to Objects
//? - Use New Object Shorthand Syntax
//? - Use Computed Properties
//? - Understand Prototypes
//? - Explain how the %$@# THIS works...
//!========================================================
//* Shorthand Object Properties

// const getStats = arr => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = arr.reduce((sum, r) => sum + r);
//   const avg = sum / arr.length;
//   return { max, min, sum, avg };
// };

// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

// const stats = getStats(reviews);

// console.log(stats); //{max: 5, min: 2.8, sum: 26.74, avg: 3.82}

//!================
//* Computed Properties

// const role = "host";
// const person = "Jools Holland";

//! Original way
// const team = {};
// team[role] = person;

//! New Way
// const team = {
//   [role]: person
// };

// console.log(team);

//! Dynamic Key

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   };
// };

//! SHORTENED VERSION
// const addProp = (obj, k, v) => ({ ...obj, [k]: v });

// console.log(addProp(team, "happy", ":)"));
//!================
//* Adding Methods to Objects

// const math = {
//   add: function(a, b) {
//     return a + b;
//   },
//   subtract: function(a, b) {
//     return a - b;
//   },
//   multiply: function(a, b) {
//     return a * b;
//   },
//   divide: function(a, b) {
//     return a / b;
//   }
// };

// math.add(5, 5);
//!================
//* Method Shorthand Syntax
//? You don't need to add keys to Methods. must use Func Dec.
//? Login/Logout below are shorthand

// const auth = {
//   username: "TommyBoy",
//   login(user) {
//     console.log(`Logged You In, ${user}!!`);
//   },
//   logout(user) {
//     console.log(`${user} has been logged out`);
//   }
// };

// auth.login(auth.username);
// auth.logout(auth.username);
//!================
//* Intro to Keyword THIS
//? **Arrow Functions do NOT get their own version of THIS**
//? - Even inside an object, it will refer to WINDOW
//! DO NOT USE ARROW FUNCTIONS AS METHODS
//? This section mainly discusses window object

// console.log(window);

//* One main reason we stopped using var was do to global window object. let/const doesn't add properties to the window object
// var color = "teal";
// console.log(window.color);

//!================
//* Using THIS in Methods

// //? A function, not inside an object, is also Global
// //? Function Expression/Declaration alone
// function sayHi() {
//   console.log("hi");
//   console.log(this);
//   //this refers to the window (global scope object in browser)
// }

// //* Here, THIS refers to the Person Object
// //? Also added destructuring to reduce the need to replicate THIS multiple times
// const person = {
//   fName: "Nathan",
//   lName: "Daniels",
//   nickName: "Ndzzle",
//   fullName() {
//     const { fName, lName, nickName } = this;
//     return `${fName} ${lName} AKA ${nickName}`;
//   },
//   printBio() {
//     const fullName = this.fullName();
//     return `${fullName} is a Person!`;
//   }
// };

// //* Change Name will reflect in fullName()
// person.fName = "Tony";
// // console.log(person.fullName()); //Tony Daniels AKA Ndzzle

// console.log(person.printBio());

//!================
//* THIS: Invocation Context (How You Execute)
//? The Value of THIS depends on the invocation context of the function it is used in.

//* Change the reference of THIS
// const printBio = person.printBio();

// console.log(printBio);

//!================
//* Annoyomatic Demo

// const annoyer = {
//   phrases: [
//     "Literally",
//     "cray cray",
//     "I can't even",
//     "Totes!",
//     "YOLO",
//     "Can't stop, won't stop"
//   ],
//   pickPhrase() {
//     const { phrases } = this;
//     let idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx];
//   },
//   start() {
//     this.timerId = setInterval(() => {
//       //! Must use arrow function, otherwise THIS = Global Windows
//       console.log(this.pickPhrase());
//     }, 3000);
//   },
//   stop() {
//     clearInterval(this.timerId);
//     console.log("Annoyer Stopped");
//   }
// };

// annoyer.start();

//!================
//* Putting it All Together: Deck Of Cards

// makeDeck() {
//   [
//     {value: '5', suit: 'hearts'}
//   ]
// }

//* My Version (working)
// const makeDeck = function() {
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "1,2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   const newVal = values.split(",");
//   const pickSuit = Math.floor(Math.random() * suits.length);
//   const pickVal = Math.floor(Math.random() * newVal.length);
//   console.log(`${newVal[pickVal]} of ${suits[pickSuit]}`);
// };

//* Correct way
//? using Nested loops + array manipulation

// const makeDeck = function() {
//   const deck = [];
//   const suits = ["hearts", "diamonds", "spades", "clubs"];
//   const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
//   for (let value of values.split(",")) {
//     for (let suit of suits) {
//       deck.push({
//         value,
//         suit
//       });
//     }
//   }
//   return deck;
// };

// function drawCard(deck) {
//   const lastCard = deck.pop();
//   console.log(lastCard);
// }

// drawCard(makeDeck());
//? New Version adding THIS + Destructuring

//!==================
//! Creating Multiple Decks
//* Creating A Deck Factory
//? added mainDeck to a new function to call multiple decks

// const makeDeck = () => ({
//   deck: [],
//   drawnCards: [],
//   suits: ["hearts", "diamonds", "spades", "clubs"],
//   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//   initializeDeck() {
//     const { suits, values, deck } = this;
//     for (let value of values.split(",")) {
//       for (let suit of suits) {
//         deck.push({
//           value,
//           suit
//         });
//       }
//     }
//     // return deck;
//   },
//   drawCard() {
//     const { deck, drawnCards } = this;
//     const card = deck.pop();
//     drawnCards.push(card);
//     return card;
//   },
//   drawMultiple(numCards) {
//     const cards = [];
//     for (let i = 0; i < numCards; i++) {
//       const card = this.drawCard();
//       cards.push(card);
//       console.log(cards);
//     }
//     return cards;
//   },
//   shuffle() {
//     const { deck } = this;
//     // loop over array backwards
//     for (let i = deck.length - 1; i > 0; i--) {
//       // pick random index before current element
//       let j = Math.floor(Math.random() * (i + 1));
//       //swap
//       [deck[i], deck[j]] = [deck[j], deck[i]];
//       // console.log(`${deck[i]} <--> ${deck[j]}`);
//     }
//     console.log(deck);
//   }
// });

// //* working with single deck
// const myDeck = makeDeck();
// myDeck.initializeDeck();
// myDeck.shuffle();
// //* Adding a new deck
// const myDeck2 = makeDeck();
// myDeck2.initializeDeck();
// console.log(myDeck2); // non shuffled deck

// console.log("=======================");
// //? Initialize Deck to start
// myDeck.initializeDeck();
// console.log(myDeck);

// console.log("=======================");
// //? run drawCard to put cards into drawnCards array
// myDeck.drawCard();
// myDeck.drawCard();
// myDeck.drawCard();
// console.log("updatedDeck :", myDeck);
// console.log("drawnCards :", myDeck.drawnCards);

// console.log("=======================");
// //? Draw Multiple cards at once (5)
// const drawFive = myDeck.drawMultiple(5);
// console.log("multiCards :", drawFive);

//!================
//! FISHER YATES SHUFFLE Algorithm
//? https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/

// function shuffle(arr) {
//   // loop over array backwards
//   for (let i = arr.length - 1; i > 0; i--) {
//     // pick random index before current element
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     //swap
//     console.log(`${arr[i]} <--> ${arr[j]}`);
//     console.log(arr);
//   }
// }

// shuffle(["a", "b", "c", "d", "e", "f"]);
//!=======================================
//!=======================================
//* Section 13: JS In The Browser - DOM

//!================
//* Intro to the DOM

//! DO NOT MEMORIZE EVERYTHING
//? Using this section as refresher. Already know everything in this section

//!================
//* IMPORTANT NOTE: HTML & CSS

//!================
//* Taste of the DOM

//? What is the DOM?
//? - The DOM is a javascript representation of a webpage
//? - It's your JS 'window' into the contents of a webpage
//? - It's just a bunch of objects that you can interact with via JS

//!================
//* Another Fun DOM Example

//!================
//* The Document Object

//!================
//* getElementById

//!================
//* getElementsByTagName

//!================
//* getElementsByClassName

//!================
//* querySelector & querySelectorAll

//? A newer. all-in-one method to select A SINGLE ELEMENT (querySelector)
//? Pass in CSS selector
//! Must use (. for class)/(# for id) before the element name

//? querySelector all returns a collection (node)

//!=======================================
//!=======================================
//* Section 14: Twisting the DOM to our will!

//? MOST IMPORTANT PROPERTIES & METHODS
//? - classList
//? - getAttribute()
//? - setAttribute()
//? - appendChild()
//? - append()
//? - prepend()
//? - remove()
//? - createElement
//? - innerText
//? - innerContext
//? - innerHTML
//? - value
//? - parentElement
//? - children
//? - nextSibling
//? - previousSibling
//? - style

//!======================================
//* Working with InnerText & textContent

//*InnerText
// document.body.innerText;
//? This pulls all text from a webpage (skipping any tags)

//*textContent
//? textContent shows not only text, but any elements inside. It also keeps the layout of the text displayed on the webpage.

//! TextContent is faster (performance) but innerText is used most

//!======================================
//* InnerHTML
//? InnerHTML not only displays the given text inside an element, but also all other children tags inside said element

//! This displays a string
//!======================================
//* value,src,href, and more

//? value is how you get information out of a form.
//!======================================
//* Getting & Setting Attributes
//? Access or change attributes in Elements
//? Attributes like : "type", "min", "max", "value", "step"

// const range = document.querySelector('input[type="range"');
//! .getAttribute() method
// range.getAttribute("max"); // shows max attribute
//! .setAttribute() method
// range.setAttribute("min", "-500"); // sets min to -500
//!======================================
//* Finding Parent/Children/Sibling

//? ul.children
//? ul.nextElementSibling
//? ul.nextElementSibling.nextElementSibling
//? ul.previousElementSibling

//!======================================
//* Changing Multiple Elements

// const allLis = document.querySelectorAll("li");

// //? Regular for loop w/ innerText
// // for (let i = 0; i < allLis.length; i++) {
// //   console.log(allLis[i].innerText);
// //   allLis[i].innerText = "We Are The Champions";
// //   console.log(allLis[i].innerText);
// // }

// //? for of loop w/ innerHTML
// for (let i of allLis) {
//   i.innerHTML = "Are We <b>The Champions</b>?";
// }
// console.log(li.innerHTML);
//!======================================
//* Altering Styles

// const fullList = document.querySelector("ul");
// const list2 = document.querySelectorAll("li")[1];

// console.log(list2);

// fullList.style.color = "blue";
// list2.style.background = "red";
// fullList.style.fontSize = "20px";

////==================================================\
// const allLi = document.querySelectorAll("li");
// const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

// for (let li of allLi) {
//   li.style.color = colors[2];
//   li.style.background = colors[4];
//   li.style.fontSize = "1.5rem";
//   li.style.width = "4.5rem";
//   li.style.textAlign = "center";
// }

//! using forEach instead of for of
// allLi.forEach((li, i) => {
//   const color = colors[i];
//   console.log(color);
//   li.style.color = color;
// });

//!======================================
//* getComputedStyle (lecture #145)
//? when working with styles through javascript, .styles looks at inline styles.
//? if you want to look at styles from a style sheet (css), then use .getComputedStyles

// const li = document.querySelector("li");
// const compStyles = getComputedStyle(li);

// console.log(compStyles.color);
// li.style.color = "red";
// console.log(compStyles.color);
// console.log(compStyles.fontSize);

//!======================================
//* Manipulating Classes (lecture #146)

// const todo = document.querySelector("#todos .todo");

//! Instead of calling multiple styles through JS
// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.fontSize = "20px";
// todo.style.opacity = "50%";

//! You can just set an element to a new style class
// todo.getAttribute("class");
// todo.setAttribute("class", "done");

//! Remove a class
// todo.classList.remove("done");

//! add a new class (revert back to old class here)
// todo.classList.add("class", "todo");

//! Toggle a classList
// todo.classList.toggle("done");
//!======================================
//* Creating Elements (lecture #147)

// const todo = document.querySelector("#todos .todo");
// const todos = document.querySelector("#todos");

// const newH2 = document.createElement("h2");
// newH2.innerHTML = "<b>Hello H2!</b>";
// newH2.classList.add("done");
// todos.appendChild(newH2);

// console.log(newH2);

// console.log(todos);
//!======================================
//* Append, Prepend, & insertBefore (lecture #148)

// const parentUl = document.querySelector("ul");
// const newLi = document.createElement("li");
// newLi.innerText = "New Li";

// parentUl.appendChild(newLi);
//! When you appendChild, it puts that element at the bottom

//*=================
//* .InsertBefore()
// //? If you want to append to the beginning of a list
// //? first select the first Li
// const firstLi = document.querySelector("li");
// //? then insert -NewLi- before -firstLi- inside -parentUl-
// parentUl.insertBefore(newLi, firstLi);
// //! Now, 'newLi' is at the top of the list!

// //* Insert element before last element inside last Ul
// const lastUl = document.querySelectorAll("ul")[1];
// const lastLi = document.querySelectorAll("li.todo")[2];
// console.log(lastUl);
// console.log(lastLi);

// lastUl.insertBefore(newLi, lastLi);

//*=================
//* .InsertAdjacentElement()
//? targetElement.insertAdjacentElement(position, element)
//! position (4 choices) :
//! - 'beforebegin' : before the targetElement itself
//! - 'afterbegin' : Just inside the targetElement, before first child
//! - 'beforeend' : Just inside targetElement, after last child
//! - 'afterend' : After the targetElement itself

//!=================

//* Example) ==================
//* <!-- beforebegin ==>
//* <p>
//*  <!-- afterbegin -->
//*   foo
//*  <!-- beforeend -->
//* </p>
//*  <!-- afterend -->
//* ===========================

// const i = document.createElement("i");
// i.innerText = "I am Italics!";

// const firstP = document.querySelector("p");

// firstP.insertAdjacentElement("beforeend", i);

// //* ===========================
// //* Append, prepend (nice and short)
// //? Append inserts -after- (last child)
// //? Prepend inserts -before- (first child)
// // firstP.append(i, newLi);
// firstP.prepend(i, newLi);

//!======================================
//* removeChild & remove (lecture #149)

//* Remove Child
// const ul = document.querySelector("ul");
// const removeMe = ul.querySelector(".special");
// const deletedUl = ul.removeChild(removeMe);

// // Take removed Ul and append to second list
// const ulTwo = document.querySelectorAll("ul")[1];
// ulTwo.append(deletedUl);

// //* Remove
// //? its as simple as calling .remove()
// //! Does NOT work in IE
// const firstLi = document.querySelector("li");
// firstLi.remove();
//!======================================
//* NBA Scores Chart Pt.1 (lecture #150) + (lecture #151)
//? Creating Dynamic Charts

// const warriorsGames = [
//   {
//     awayTeam: {
//       team: "Golden State",
//       points: 119,
//       isWinner: true
//     },
//     homeTeam: {
//       team: "Houston",
//       points: 106,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: "Golden State",
//       points: 105,
//       isWinner: false
//     },
//     homeTeam: {
//       team: "Houston",
//       points: 127,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: "Golden State",
//       points: 126,
//       isWinner: true
//     },
//     awayTeam: {
//       team: "Houston",
//       points: 85,
//       isWinner: false
//     }
//   },
//   {
//     homeTeam: {
//       team: "Golden State",
//       points: 92,
//       isWinner: false
//     },
//     awayTeam: {
//       team: "Houston",
//       points: 95,
//       isWinner: true
//     }
//   },
//   {
//     awayTeam: {
//       team: "Golden State",
//       points: 94,
//       isWinner: false
//     },
//     homeTeam: {
//       team: "Houston",
//       points: 98,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: "Golden State",
//       points: 115,
//       isWinner: true
//     },
//     awayTeam: {
//       team: "Houston",
//       points: 86,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: "Golden State",
//       points: 101,
//       isWinner: true
//     },
//     homeTeam: {
//       team: "Houston",
//       points: 92,
//       isWinner: false
//     }
//   }
// ];

// const makeChart = (games, targetTeam) => {
//   const container = document.querySelector(".container");
//   const ulParent = document.createElement("ul");
//   for (let game of games) {
//     const { homeTeam, awayTeam } = game;
//     const gameLi = document.createElement("li");
//     gameLi.innerHTML = getScoreLine(game);

//     gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");

//     ulParent.appendChild(gameLi);
//   }
//   return ulParent;
// };

// const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
//   const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
//   return target.isWinner;
// };

// const getScoreLine = ({ homeTeam, awayTeam }) => {
//   const { team: hTeam, points: hPoints } = homeTeam;
//   const { team: aTeam, points: aPoints } = awayTeam;
//   let scoreLine;
//   let teamNames;
//   if (aPoints > hPoints) {
//     scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
//     teamNames = `<b>${aTeam}</b> @ ${hTeam}`;
//   } else {
//     scoreLine = `${aPoints} - <b>${hPoints}</b>`;
//     teamNames = `${aTeam} @ <b>${hTeam}</b>`;
//   }
//   return `${teamNames} ${scoreLine}`;
// };

// gsSection = document.getElementById("gs");
// hrSection = document.getElementById("hr");

// const gsChart = makeChart(warriorsGames, "Golden State");
// // document.body.prepend(chart1);
// gsSection.appendChild(gsChart);

// const hrChart = makeChart(warriorsGames, "Houston");
// // document.body.prepend(chart2);
// hrSection.appendChild(hrChart);
//==========================================

//!=======================================
//!=======================================
//* Section 15: Communicating with Events (152-161)
//* Intro to DOM Events

//? clicks
//? drags
//? drops
//? hovers
//? scrolls
//? form submission
//? key presses
//? focus/blur
//? mousewheel
//? dblclick (double click)
//? copying
//? pasting
//? audio start
//? screen resize
//? printing
//? ....

//! Fun test using Event listener on DOM w/ mouseleave.
//? This is what websites use to alert for sign up before leaving page
// // const btn = document.getElementById("button");
// document.addEventListener("mouseout", () => {
//   alert("Don't leave Me!!");
// });
//!===============
//* 2 Ways NOT to Add Events

//==================================
// the thing     event type     the code to run
// button          click          change the color
// input          hits return      get searching result
// image           mouseover        display the img caption
//==================================

//! First is not to add onclick events to inline HTML Elements

//! Second is to add an event to a button that runs a function
//? locate btn in DOM
// const btn = document.getElementById("button");
//? Add a mouseover event to btn.
// btn.onmouseover = function() {
//   console.log("hover btn");
// };

//! You are forced to keep track of all these event functions

//!===============
//* addEventListener
//! .addEventListener method is a dynamic way to watch for events without cluttering up HTML properties. You can also attach multiple events to a single element (which you can't do with the other two)

// //? locate btn in DOM
// const btn = document.getElementById("button");

// //? Add click event to btn
// btn.addEventListener("click", () => {
//   console.log("clicked");
// });

// //? you can also add multiple events to a single element (btn)
// btn.addEventListener("mouseover", function() {
//   btn.innerText = "No Touch!!";
//   btn.style.cursor = "pointer";
// });

// btn.addEventListener("mouseout", function() {
//   btn.innerText = "Click Me";
// });

// //? You can also add events to window object (DOM)
// //! this is how websites use popups to get you to sign up before you leave the page
// window.addEventListener("mouseout", () => {
//   console.log("leaving window");
// });

//!===============
//* The Impossible Button Demo

// const btn = document.getElementById("button");

// btn.addEventListener("click", function() {
//   btn.innerHTML = "<b>You Got Me!!</b>";
//   btn.style.backgroundColor = "blueviolet";
//   btn.style.color = "white";
//   document.body.style.backgroundColor = "green";
// });

// btn.addEventListener("mouseover", function() {
//   btn.style.cursor = "pointer";
//   const width = Math.floor(Math.random() * window.innerWidth);
//   const height = Math.floor(Math.random() * window.innerHeight);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// });
//!===============
//* Events on Multiple Elements
//? loop through array, adding each color to the background of a div

// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet"
// ];

// //? You can seperate functions for readability
// //? this is an "event handler"
// const changeColor = function() {
//   const h1 = document.querySelector("h1");
//   h1.style.color = this.style.backgroundColor;
//   console.log(`clicked ${this.style.backgroundColor} box`);
// };

// const container = document.getElementById("boxes");

// const pick = document.getElementById("displayPick");

// for (color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.style.cursor = "pointer";
//   box.classList.add("box");
//   container.appendChild(box);
//   box.addEventListener("click", changeColor);
// }

// //! Currently trying to get each div to click (w/ correct color if possible)

// console.log(boxes);

//!==
//* Event Object

// document.body.addEventListener("keypress", function(e) {
//   console.log(e);
// });
//!===============
//* Key Events: Keypress, keyup, & keydown

// const addItemInput = document.querySelector("#addItemInput");
// const itemsUL = document.querySelector("#items");

// addItemInput.addEventListener("keydown", function(e) {
//   if (e.key === "Enter") {
//     if (!this.value) return;
//     const li = document.createElement("li");
//     // li.append(this.value);
//     li.innerText = this.value;
//     itemsUL.appendChild(li);
//     this.value = "";
//   }
// });
//!===============
//* Coin Game Demo

// const player = document.getElementById("player");
// const coin = document.getElementById("coin");
// const postScore = document.querySelector("#postScore");
// let score = 0;

// window.addEventListener("keyup", function(e) {
//   const currTop = extractPos(player.style.top);
//   const currLeft = extractPos(player.style.left);
//   switch (e.key) {
//     case "ArrowLeft" || "Left":
//       player.style.transform = "scaleX(-1)";
//       moveHorizontal(player, -50);
//       break;
//     case "ArrowRight" || "Right":
//       player.style.transform = "scaleX(1)";
//       moveHorizontal(player, 50);
//       break;
//     case "ArrowUp" || "Up":
//       player.style.transform = "scaleX(-1)";
//       moveVertical(player, -50);
//       break;
//     case "ArrowDown" || "Down":
//       player.style.transform = "scaleX(1)";
//       moveVertical(player, 50);
//       break;
//     default:
//       return;
//   }
//   if (isTouching(coin, player)) {
//     score++;
//     postScore.innerText = `Points: ${score}`;
//     moveCoin();
//   }
// });

// const moveVertical = (element, amount) => {
//   const currTop = extractPos(element.style.top);
//   element.style.top = `${currTop + amount}px`;
// };

// const moveHorizontal = (element, amount) => {
//   const currLeft = extractPos(element.style.left);
//   element.style.left = `${currLeft + amount}px`;
// };

// const moveCoin = () => {
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   coin.style.top = `${height}px`;
//   coin.style.left = `${width}px`;
// };

// moveCoin();

// const extractPos = pos => {
//   if (!pos) return 100;
//   return parseInt(pos.slice(0, -2));
// };

// function isTouching(a, b) {
//   const aRect = a.getBoundingClientRect();
//   const bRect = b.getBoundingClientRect();
//   return !(
//     aRect.top + aRect.height < bRect.top ||
//     aRect.top > bRect.top + bRect.height ||
//     aRect.left + aRect.width < bRect.left ||
//     aRect.left > bRect.left + bRect.width
//   );
// }

// isTouching(player, coin);

//!===============
//* Form Events & PreventDefault &
//* Input & Change Events
//? PreventDefault is used on forms to stop the page from reloading
// Extract Data from Form

// const creditCard = document.querySelector("input[type=text]");
// const checkbox = document.querySelector("input[type=checkbox]");
// const options = document.querySelector("#options");
// const form = document.querySelector("#signup-form");

// const formData = {};

// for (let input of [creditCard, checkbox, options]) {
//   input.addEventListener("input", ({ target }) => {
//     const { name, type, value, checked } = target;
//     formData[name] = type === "checkbox" ? checked : value;
//     console.log(formData);
//   });
// }

// form.addEventListener("submit", function(e) {
//   e.preventDefault();
//   console.log(creditCard.value);
//   console.log(checkbox.value);
//   console.log(options.value);
// });

//!===============

//!=======================================
//!=======================================
//* Section 16: Asynchronous Code, Callbacks & Promises (162-171)

//!===============
//* The Call Stack

//? The Mechanism the JS interpreter uses to keep track of its place in a ascript that calls multiple functions
//? How JS 'Knows' what function is currently being run and what functions are called from with

//! Call Stack - (Call = Function Calls) (Stack = Data Structure)
//? Stack is a type of Data Structure where the last item is placed on top (stack of books), but the first item removed (pop) takes that top item
//? In Short (Last Item Added = First Item Removed)

//! How It Works
//? When a Script calls a function, the interpreter adds it to the callstack and then starts carrying out the function
//? Any Function that are called by that Function are added to the call stack further up, and run where their calls are reached
//? When the current function is finished, the interpretere takes it off the stack and resumes execution where it left off in the last code listing.

//! Ex)
// const multiply = (x, y) => x * y;
// const square = x => multiply(x, x);

// const isRightTriangle = (a, b, c) => {
//   return square(a) + square(b) === square(c);
// };

// isRightTriangle(3, 4, 5); //true

//? Becuase each function is calling on another function, they are then stacked.
//? multiply <> square <> isRightTriangle
//? isRIghtTriangle is called, which calls on square(), when then calls on multiply()
//? Once multiply() finishes (once value is returned), its removed from the call stack
//? The Stack Runs for EVERY Argument in the function call (this runs 3 times here)
//!===============
//* Call Stack Debugging w/ Dev Tools
//? Learned about Debugger/Breakpoints
//!===============
//* JS is Single Threaded
//? At any given point in time, that single JS thread is running at most one line of JS code
//? This means JS only does one thing at a time
//!===============
//* How Asynchronous Callbacks Actually Work

// console.log("I happen first!");
// setTimeout(() => {
//   console.log("i happen third");
// }, 3000);
// console.log("I happen second");

//! How Does this work?
//? Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimout)
//? The JS call stack recognizes these web API functions and passes them off to the browser to take care of
//? Once The Browser finishes those tasks, they return and are pushed onto the stack as a callback

//? So setTimeout() is treated like an API, gets pushed to the browser to run until its time is complete. At that point it gets sent to Callback Queue for which JS can grab from and run

//!===============
//* Welcome to Callback Hell

// const btn = document.querySelector("button");

////Nested setTimeout()
// setTimeout(() => {
//   btn.style.transition = "all 0.3s ease-in-out";
//   btn.style.transform = "translateX(100px)";
//   setTimeout(() => {
//     btn.style.transform = "translateX(200px)";
//   }, 1000);
// }, 1000);

//==================

// const moveX = function(el, amount, timeout, onSuccess, onFailure) {
//   const boundry = document.body.clientWidth;
//   const elLocation = el.getBoundingClientRect().right;
//   const currLeft = el.getBoundingClientRect().left;
//   if (elLocation + amount > boundry) {
//     onFailure();
//     console.log("El too far");
//     el.innerText = "The End";
//     el.style.backgroundColor = "red";
//     el.style.color = "#fff";
//     el.style.padding = "5px 10px";
//   } else {
//     setTimeout(() => {
//       el.style.transform = `translateX(${currLeft + amount}px)`;
//       onSuccess();
//     }, timeout);
//   }
//   console.log(elLocation, currLeft);
// };

// // console.log(btn.getBoundingClientRect());

// // moveX(btn, 100, 1000, () => moveX(btn, 200, 1000));

// // moveX(btn, 100, 1000, () =>
// //   moveX(btn, 100, 1000, () =>
// //     moveX(btn, 100, 1000, () =>
// //       moveX(btn, 100, 1000, () => {
// //         moveX(btn, 100, 1000);
// //       })
// //     )
// //   )
// // );

// moveX(
//   btn,
//   100,
//   1000,
//   () => {
//     //success
//     moveX(
//       btn,
//       200,
//       1000,
//       () => {
//         moveX(
//           btn,
//           200,
//           1000,
//           () => {
//             console.log("Really?! We Still Have Screen Left!?");
//           },
//           () => {
//             alert("cannot move further");
//           }
//         );
//       },
//       () => {
//         //fail
//         alert("cannot move further!");
//       }
//     );
//   },
//   () => {
//     //fail
//     alert("cannot move further!");
//   }
// );

//!===============
//* Introducing Promises!
//* Returning Promises from Functions
//? A promise is an object representing the eventual completion or failure of an asynchronous operation

// Here we will take the code from above and turn it into a more readable version with way less lines of code

// //copied from above
// const btn = document.querySelector("button");
// const moveXPromise = function(el, amount, timeout, onSuccess, onFailure) {
//   const boundry = document.body.clientWidth;
//   const elLocation = el.getBoundingClientRect().right;
//   const currLeft = el.getBoundingClientRect().left;
//   if (elLocation + amount > boundry) {
//     // onFailure();
//     console.log("El too far");
//     el.innerText = "The End";
//     el.style.backgroundColor = "red";
//     el.style.color = "#fff";
//     el.style.padding = "5px 10px";
//   } else {
//     setTimeout(() => {
//       el.style.transform = `translateX(${currLeft + amount}px)`;
//       // onSuccess();
//     }, timeout);
//   }
//   console.log(elLocation, currLeft);
// };

// // setup new promise
// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.floor(Math.random() * 10);
//       if (rand < 5) {
//         // console.log(rand);
//         resolve();
//       } else {
//         // console.log(rand);
//         reject();
//       }
//     }, 5000);
//   });
// };
// makeDogPromise()
//   .then(() => {
//     //called when resolved
//     console.log("Resolved, Congrats! You got a dog!");
//   })
//   .catch(() => {
//     //called when rejected
//     console.log("Rejected, no dog for you");
//   });

//!===============
//* Resolving/Rejecting w/Values

// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, username: "Bilbo" },
//           { id: 5, username: "Esmerelda" }
//         ],
//         "/users/1": {
//           id: 1,
//           username: "Bilbo",
//           upvotes: 360,
//           city: "Lisbon",
//           topPostId: 454321
//         },
//         "/users/5": {
//           id: 5,
//           username: "Esmerelda",
//           upvotes: 571,
//           city: "Honolulu",
//           topPostId: 123456
//         },
//         "/posts/454321": {
//           id: 454321,
//           title: "Ladies and Gentlemen, may I have your attention"
//         },
//         "/about": "This is about page"
//       };
//       const data = pages[url];
//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         resolve({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/about")
//   .then(res => {
//     console.log("request completed");
//     console.log("Status: ", res.status);
//     console.log("Data: ", res.data);
//   })
//   .catch(res => {
//     console.log("request failed");
//     console.log("status: ", res.status);
//   });

// setTimeout(() => {
//   console.log("//===================================");
// }, 1000);

// fakeRequest("/dogs")
//   .then(res => {
//     console.log("request completed");
//     console.log("Status: ", res.status);
//     console.log("Data: ", res.data);
//     console.log(res);
//   })
//   .catch(res => {
//     console.log("request failed");
//     console.log("status: ", res.status);
//   });

//!===============
//* The Delights of Promise Chaining

// fakeRequest("/users")
//   .then(res => {
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`);
//   })
//   .then(res => {
//     const postId = res.data.topPostId;
//     return fakeRequest(`/posts/${postId}`);
//   })
//   .then(res => {
//     const title = res.data.title;
//     console.log(title);
//   })
//   .catch(err => {
//     console.log("error found: ", err);
//   });

//!=======================================
//!=======================================
//* Section 17: Making HTTP Requests (172-180)
//* Intro to AJAX
//? Asynchronous Javascript & XML
//!===============
//*JSON & XML
//? JSON = Java Script Object Notation
//! XML is outdated. So we now use JSON
//? - JSON is a format for sending data
//! JSON cannot hold functions

//!===============
//* XMLHttpRequests: The Basics
//? The "Original" way of sending requests via JS
//? DOes Not Support promises, so... lots of callbacks
//? WTF is going on with the weird Capitalization?
//? Clunky syntax that I rind difficult to remember

//===============================
//* Working with Star Wars API
//* XMLHttpRequests: Chaining
//! now using Event Listeneres intead of onload/onerror

// const arrNames = [];

// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function() {
//   const data = JSON.parse(this.responseText);
//   // const dataResults = JSON.parse(this.responseText).results;
//   // const firstPlanet = JSON.parse(this.responseText).results[0].name;
//   const filmURL = data.results[0].films[0];
//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", function() {
//     console.log(this);
//   });
//   filmReq.addEventListener("error", function(e) {
//     console.log("error!", e);
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
//   // for (let planet of dataResults) {
//   //   const planetNames = planet.name;
//   //   arrNames.push(planetNames);
//   // }
// });

// // console.log("planet names: ", arrNames);

// firstReq.addEventListener("error", () => {
//   console.log("Error");
// });

// firstReq.open("get", "https://swapi.co/api/planets/");
// // firstReq.setRequestHeader("Accept", " application/json");
// firstReq.send();
// console.log("Request Sent!");
//!===============
//* A Better Way: Fetch!
//* Fetch API
//? The Newer way of making requests via JS
//? Supports promises!
//? NOT Supported in IE (Internet Expolorer)

//* Dad Joke Machine (The old way)
// const myReq = new XMLHttpRequest();

// myReq.onload = function() {
//   const data = JSON.parse(this.responseText);
//   console.log("Old Way: ", data.joke);
//   document.body.append(data.joke);
// };

// myReq.onerror = function(err) {
//   console.log("error", err);
// };

// myReq.open("get", "https://icanhazdadjoke.com/", true);
// myReq.setRequestHeader("Accept", " application/json");
// myReq.send();

//====================================
//* Dad Joke Machine with Fetch()
// fetch("https://icanhazdadjoke.com/", {
//   headers: { Accept: "application/json" }
// })
//   .then(res => {
//     if (res.status !== 200) {
//       console.log("problem!", res.status);
//       return;
//     }
//     res.json().then(data => {
//       console.log("Fetch(): ", data.joke);
//     });
//   })
//   .catch(function(err) {
//     console.log("Fetch Error: ", err);
//   });

//====================================
//* W/ Starwars API
//* Chaining Fetch Requests
//* Refactoring Fetch Chains
//? - Refactoring broke it down into seperate functions

// const checkStatusAndParse = response => {
//   if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
//   return response.json();
// };

// const printPlanets = data => {
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };

// const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
//   return fetch(url);
// };

// const error = err => {
//   console.log("Something Went Wrong");
//   console.log(err);
// };

// fetchNextPlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .catch(error);

//!===============
//* An Even Better Way: Axios
//? A Library for making HTTP requests

// axios
//   .get("https://swapi.co/api/planets/")
//   .then(res => {
//     for (let planet of res.data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });
//!===============
//* Sequential Axios Requests

// const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
//   return axios.get(url);
// };
// const printPlanets = ({ data }) => {
//   for (let planet of data.results) {
//     console.log(planet.name);
//   }
//   return Promise.resolve(data.next);
// };
// fetchNextPlanets()
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(printPlanets)
//   .then(fetchNextPlanets)
//   .then(printPlanets)
//   .catch(err => {
//     console.log(err);
//   });

//!=======================================
//!=======================================
//* Section 18: Async & Await: JS Magic (181-187)
//* Async Function Overview

// const getData = () => {
//   axios.get("https://swapi.co/api/planets/").then(res => {
//     for (let planet of res.data.results) {
//       console.log(planet.name);
//     }
//   });
// };

// getData();
//!===============
//* Async Keyword
//! When you add 'async' infront of a function, it will return a promise (followed by the value of the function)
//? If the function returns a value, the promise will be resolved with that value
//? If the Function throws an exeption, the promise will be rejected
//! Async is an Easy Way of wrapping a function in a promise

// async function hello() {
//   return "Hey!";
// }
// hello();
// async function uhOh() {
//   throw new Error("oh No!");
// }
// uhOh();

// function add(a, b) {
//   return new Promise((resolve, reject) => {
//     if (typeof a !== "number" || typeof b !== "number") {
//       reject(`A and B must be numbers`);
//     }
//     resolve(a + b);
//   });
// }

// add(1, 2)
//   .then(val => {
//     console.log(`promise resolved with: `, val);
//   })
//   .catch(err => {
//     console.log(`promise rejected with: `, err);
//   });

//!===============
//* Await keyword
//? We can only use the await keyword inside of function declared with async***
//? await will pause the execution of the function, waiting for a promise to be resolved
//! Instead of using .next() && without having to nest with callbacks

// async function getPlanets() {
//   const res = await axios.get("https://swapi.co/api/planets/");
//   console.log(res.data);
//   for (let planet of res.data.results) {
//     console.log(`${planet.name} has ${planet.climate} climate`);
//   }
// }

// getPlanets();

//! .then() is NO LONGER NEEDED with await
// getPlanets().then(res => {
//   console.log(res.data);
// });

//!===============
//* Error Handling in Async Function
//? Above shows what happens when the async promise gets resolved
//? Here we show what happens when the promise gets rejected

// async function getPlanets() {
//   try {
//     const res = await axios.get("https://swapi.co/api/planets/");
//     // console.log(res.data);
//     for (let planet of res.data.results) {
//       console.log(`${planet.name} has ${planet.climate} climate`);
//     }
//   } catch (err) {
//     console.log("error! ", err);
//   }
// }
// getPlanets();

//! Backup to catch multiple errors (old way)
// getPlanets().catch(err => {
//   console.log("error! ", err);
// });

//!===============
//* Multiple Awaits

// const btn = document.querySelector("button");
// const moveX = function(el, amount, timeout, resolve, reject) {
//   const boundry = document.body.clientWidth;
//   const elLocation = el.getBoundingClientRect().right;
//   const currLeft = el.getBoundingClientRect().left;
//   if (elLocation + amount > boundry) {
//     reject({ boundry, elLocation, amount });
//   } else {
//     setTimeout(() => {
//       el.style.transform = `translateX(${currLeft + amount}px)`;
//       resolve();
//     }, timeout);
//   }
//   console.log(elLocation, currLeft);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000);
//   });
// });

//! Refactor with async await

// async function animate(el) {
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
//   await moveX(el, 100, 1000);
// }

// animate(btn);

//!===============
//* Parallel Vs. Sequential Requests
//* + Refactoring with Promise.all

// // Sequential Requests (run one after the other)
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data.species.name);
//   console.log(poke2.data.species.name);
//   console.log(poke3.data.species.name);
// }

// // Parallel Requests (run one after the other)
// async function get3Pokemon() {
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   const results = await Promise.all([prom1, prom2, prom3]);
//   //! below is all replaced by above (results)
//   // const poke1 = await prom1;
//   // const poke2 = await prom2;
//   // const poke3 = await prom3;
//   // console.log(prom1.data.species.name);
//   // console.log(poke2.data.species.name);
//   // console.log(poke3.data.species.name);
//   //? Promise.all takes an array, you await that array and store it in a variable (results). You then run a loop to pull out what you need from the array.
//   printPokemon(results);

//   console.log(results[1].data.name); // select single ELement in Array
// }

// function printPokemon(results) {
//   for (let pokemon of results) {
//     // select as group
//     console.log(pokemon.data.name);
//   }
// }

// get3Pokemon();

//!=======================================
//!=======================================
//* Section 19: Prototypes, Classes, & The New Operator (188-194)
//!===============
//* Factory Functions

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r},${g},${b})`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   return color;
// }

// const firstColor = makeColor(333, 3, 2);
// console.log(firstColor.rgb());
//!===============
//* Constructor Function
//? NEW
//! new is an operator

// function color(r, g, b, a) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   this.a = a;
//   // this.rgb = function() {
//   //   const { r, g, b } = this;
//   //   return `rgb(${r},${g},${b})`;
//   // };
//   // console.log(this);
// }

//! Best to place prototypes outside of THIS function
// color.prototype.rgb = function() {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };
// color.prototype.hex = function() {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// color.prototype.rgba = function(a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new color(0, 255, 0);

//! Now we can access out new (rgb & hex) methods we created above with prototype
// console.log("RGB: ", color1.rgb());
// console.log("HEX:", color1.hex());
// console.log("RGBA:", color1.rgba(0.2));

// Change background color of DOM
// document.body.style.backgroundColor = color1.rgb();
// document.body.style.backgroundColor = color1.rgba(0.5);
// document.body.style.backgroundColor = color1.rgba(0.2);

//! Creates a blank, plain javascript object
//! Links (sets the constructor of) this object to another object
//! Passes the newly created object from Step 1 as the THIS context
//! Returns THIS if the function doesn't return its own object

//===========================
// Bitwise Operators
// The left shift operator moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros.Shifting a value left by one position is equivalent to multiplying it by 2, shifting two positions is equivalent to multiplying by 4, and so on.

// var a = 2; // Bit presentation 10
// var b = 3; // Bit presentation 11
// document.write("(a << b) => ");
// result = a << b;
// document.write(result); //16
//!===============
//* JS Classes - Syntactical Sugar
//? Classes take what we built above, but w/ cleaner syntax

//!===============
//* A Big More Practice With Classes

//!===============
//* Extends, Super, and Subclasses
//!======================================
//* Closure

// const createCounter = (count = 0) => () => ++count;

// const counter = createCounter();

// console.log("counter1", counter());
// console.log("counter2", counter());
// console.log("counter3", counter());

//===========================================================
//!DOM MANIPULATIONS (Google Twist)

// var myImg = document.createElement("img");
// myImg.src =
//   "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

// myImg.style.width = "200px";
// document.body.append(myImg);
// myImg.style.transform = 'translate(300px,200px)'
// myImg.style.transition = "all 2s";

//! Make Webpage jump around
// const sheet = new CSSStyleSheet();
// sheet.replaceSync("* {transition: all 2s}");
// document.adoptedStyleSheets = [sheet];
// // const allEls = document.body.children;

// const sheet = new CSSStyleSheet();
// sheet.replaceSync("* {transition: all 2s}");
// document.adoptedStyleSheets = [sheet];
// // const allEls = document.body.children;

// // Seperates Elements for Transition
// const allEls = document.getElementById("viewport").children;

// setInterval(() => {
//   for (let el of allEls) {
//     const rotation = Math.floor(Math.random() * 360);
//     const x = Math.floor(document.body.clientWidth * Math.random());
//     const y = Math.floor(document.body.clientHeight * Math.random());
//     el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
//   }
// }, 2000);

//====================================================
//! Finding Pokemon Images and Print to DOM

//? Connect to pokeapi
//? Find bulbasaur
//? Find sprite image
//? Create img element
//? Set attribute to and JS link
//? Append to DOM
//! Added arrow functions to move pokemon around the DOM

const body = document.body;
const img = document.createElement("img");
body.appendChild(img);
img.style.position = "relative";
img.style.left = "0px";
img.style.top = "0px";

async function getPokemon() {
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  img.setAttribute("src", poke1.data.sprites.front_default);
}
getPokemon();

if (typeof window.innerWidth != "undefined") {
  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
}
console.log(viewportWidth);
console.log(viewportHeight);

const move = {
  right: function(current) {
    img.style.left = parseInt(img.style.left) + current + "px";
    img.style.transform = "rotateY(180deg)";
    body.style.backgroundColor = "blueviolet";
  },
  left: function(current) {
    img.style.left = parseInt(img.style.left) - current + "px";
    img.style.transform = "rotateY(0deg)";
    // body.style.backgroundColor = "green";
  },
  up: function(current) {
    img.style.top = parseInt(img.style.top) - current + "px";
    img.style.transform = "rotateY(0deg)";
  },
  down: function(current) {
    img.style.top = parseInt(img.style.top) + current + "px";
    img.style.transform = "rotateY(180deg)";
  }
};

body.addEventListener("keyup", e => {
  const rect = img.getBoundingClientRect();
  if (rect.x >= viewportWidth - 50 || rect.x < 0) {
    console.log("too far");
    img.style.left = `${viewportWidth - 100}px`;
  } else if (rect.y >= viewportHeight - 50 || rect.y < 0) {
    console.log("too far south");
    img.style.top = `${viewportHeight - 100}px`;
  }
  switch (e.key) {
    case "ArrowLeft":
      move.left(25);
      break;
    case "ArrowRight":
      move.right(25);
      break;
    case "ArrowUp":
      move.up(25);
      break;
    case "ArrowDown":
      move.down(25);
      break;
  }
});
