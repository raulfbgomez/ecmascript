/** 
 * ECMAScript 9
 * Junio 2018
*/

// Operador de reposo
const obj = {
  name: 'Daniel',
  age: 32,
  country: 'MX'
}
let { name, ...all } = obj
console.log(name, all)

// Propiedades de propagacion para crear un nuevo objeto
const obj = {
  name: 'Mariela',
  age: 25
}
const obj1 = {
  ...obj,
  country: 'MX'
}
console.log(obj1)

// Promise
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

helloWorld()
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo!'))

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2019-12-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)