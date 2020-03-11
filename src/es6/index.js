/** 
 * ECMAScript 6
 * Junio 2015
*/

function newFunction(name, age, country) {
  var name = name || 'Daniel'
  var age = age || 30
  var country = country || 'MX'
  console.log(name, age, country)
}
// es6
function newFunction2(name = 'Daniel', age = 30, country = 'MX') {
  console.log(name, age, country)
}

newFunction2()
newFunction2('Maria', 22, 'CO')

// Template Literals
let hello = 'hello'
let world = 'world'
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
// es6
let apicPhrase2 = `${hello} ${world}`
console.log(apicPhrase2)

// Multi lines
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n'
+ 'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
console.log(lorem)
// es6
let lorem2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
console.log(lorem2)

// Destructuring
let person = {
  name: 'Leticia',
  age: 25,
  country: 'MX'
}
console.log(person.name, person.age)
// es6
let { name, age, country } = person
console.log(name, age, country)

// Operador de propagacion
let team = ['Manuel', 'Juanito', 'Sergio']
let team2 = ['Yesica', 'Daniela', 'Sandra']

let education = ['David', ...team, ...team2]
console.log(education)

// Propiedad de objetos
let name = 'Pablito'
let age = 32
obj = { name: name, age: age }
// es6
obj2 = { name, age }
console.log(obj)
console.log(obj2)

// Arrow function
const names = [
  { name: 'Jorge', age: 20 },
  { name: 'Samuel', age: 19 }
]
let listOfNames = names.map(function(item) {
  console.log(item.name)
})
// es6
let listOfNames2 = names.map(item => console.log(item.name))
const listOfNames3 = (name, age) => {
  // Code here
}
const listOfNames4 = item => {
  // Code here
}
const square = num => num * num

// Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('todo OK')
    } else {
      reject('Ops!!')
    }
  })
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error))

// Clases
class Calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  sum(valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new Calculator()
console.log(calc.sum(30, 30))

// Modules
import hello from './module.js'
hello()

// Generators
function* helloWorld() {
  if (true) {
    yield 'Hello, '
  }
  if (true) {
    yield 'World'
  }
}
const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)