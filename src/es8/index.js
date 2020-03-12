/** 
 * ECMAScript 8
 * Junio 2017
*/

const data = {
  frontend: 'Amairani',
  backend: 'Michel',
  design: 'Itzel'
}
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// Object Values
const values = Object.values(data)
console.log(values)
console.log(values.length)

// padding
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(10, 'estaesunacadena'))

// Trailing comma
const obj = {
  name: 'Arturo',
}

// Async Await
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const message = await helloWorld()
    console.log(message)
  } catch (error) {
    console.log(error)
  }
}
anotherFunction()