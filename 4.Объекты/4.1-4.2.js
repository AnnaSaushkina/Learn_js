// апишите функцию, которая принимает объект товара и возвращает строку: "Товар [name] стоит [price] руб.
function getProductInfo(product) {
  return `Товар ${product.name} стоит ${product.price} руб.`
}

const product = { name: "Phone", price: 50000 };
console.log(getProductInfo(product)); // "Товар Phone стоит 50000 руб."



// Создайте глубокую копию объекта:
const company = {
  name: "Tech Corp",
  employees: [
    { name: "John", skills: ["JS", "React"] },
    { name: "Alice", skills: ["Python", "Django"] }
  ]
};

const copy = structuredClone(company)
console.log(copy)
console.log(copy === company) //false


//  Динамическое создание свойств

// Создайте функцию, которая принимает массив ключей и массив значений
// и возвращает объект с соответствующими свойствами
function createObject(keys, values) {
  let myObj = new Object()
  
  keys.forEach((keys, index) => {
    myObj[keys] = values[index]
  })
  
  return myObj
}

console.log(createObject(['name', 'age'], ['John', 25])); 
// { name: "John", age: 25 }

function createByCycle(keys, values) {
  let myObj = {}
  
  for (let i = 0; i < keys.length; i++) {
    myObj[keys[i]] = values[i]
  }
  
  return myObj
}
console.log(createByCycle(['name', 'age'], ['John', 25])); 


// **Трансформация объекта
// ```javascript
// // Напишите функцию, которая преобразует объект:
// // { a: 1, b: 2, c: 3 } → { 1: 'a', 2: 'b', 3: 'c' }
function invertObject(obj) {
  const myObj = {}
  
 return Object.entries(obj).reduce((acc, [key, value]) => { 
   acc[value] = key
   return acc
}, {})
}
console.log(invertObject({ a: 1, b: 2, c: 3 }))
