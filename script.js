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

let num = 7

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

let ingredients = [
  'water',
  'corn starch',
  'flour',
  'cheese',
  'brown sugar',
  'shrimp',
  'eel',
  'butter'
]

console.log(ingredients.includes('water')) // true
console.log(ingredients.includes('poop')) // false
