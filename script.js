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

const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5
};

// console.log(movieReviews);

// console.log(Object.keys(movieReviews));
// console.log(Object.values(movieReviews));

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

// for (let x in movieReviews) {
//   console.log(x);
// }
