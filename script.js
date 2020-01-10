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

const sheet = new CSSStyleSheet();
sheet.replaceSync("* {transition: all 2s}");
document.adoptedStyleSheets = [sheet];
// const allEls = document.body.children;

const sheet = new CSSStyleSheet();
sheet.replaceSync("* {transition: all 2s}");
document.adoptedStyleSheets = [sheet];
// const allEls = document.body.children;

// Seperates Elements for Transition
const allEls = document.getElementById("viewport").children;

setInterval(() => {
  for (let el of allEls) {
    const rotation = Math.floor(Math.random() * 360);
    const x = Math.floor(document.body.clientWidth * Math.random());
    const y = Math.floor(document.body.clientHeight * Math.random());
    el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
  }
}, 2000);
