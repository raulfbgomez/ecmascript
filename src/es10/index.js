/** 
 * ECMAScript 10
 * Junio 2019
*/

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.flat(2))

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value, value * 2]))

let hello = '           hello  world'
console.log(hello)
console.log(hello.trimStart())

let hello = 'hello    world      '
console.log(hello)
console.log(hello.trimEnd())

// Manejo de errores
try {
  
} catch {
  // Aqui ya esta disponible error sin pasarlo como parametro
}

// from entries
let entries = [['name', 'Daniel'], ['age', 43]]
console.log(Object.fromEntries(entries))

// Symbol
let mySymbol = 'My symbol'
let symbol = Symbol(mySymbol)
console.log(symbol.description)