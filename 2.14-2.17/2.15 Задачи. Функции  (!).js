
// 1. Базовая функция с параметрами:
/*
Создайте функцию greeting, которая принимает имя и возраст человека 
и возвращает приветственное сообщение в формате:
"Привет, {имя}! Тебе {возраст} лет."
Если возраст не передан, использовать значение по умолчанию: 18
*/

function greeting(a, b) {
  if( b === undefined) {
      return `Привет, ${a}! Тебе 18 лет.`
  } else  return `Привет, ${a}! Тебе ${b} лет.`
}

// Пример:++
console.log(greeting('Анна', 25)); // "Привет, Анна! Тебе 25 лет."
console.log(greeting('Петр')); // "Привет, Петр! Тебе 18 лет."


// 2. Функция с возвратом значения:
/*
Напишите функцию calculateArea, которая рассчитывает площадь прямоугольника.
Функция принимает ширину и высоту, и возвращает площадь.
Если параметры не являются числами или отрицательные - вернуть null
*/
function calculateArea(a, b) {
  if (a < 0 || a < b ||!Number.isFinite(a) || !Number.isFinite(b)) {
      return null
  } 
  else return a * b
}
// Пример:
console.log(calculateArea(5, 3)); // 15
console.log(calculateArea(-5, 3)); // null
console.log(calculateArea('5', 3)); // null



// 3. Функция как параметр:
/*
Создайте функцию operate, которая принимает два числа и функцию-операцию,
и выполняет эту операцию над числами.
Создайте также функции add, subtract, multiply для передачи в operate
*/

function multiply(a, b) {
  return a * b
}

function add(a, b) {
  return a + b
}
function subtract(a, b) {
  return a / b
}

function operate(a, b, func) {
  return func(a, b)
}


// Пример:
console.log(operate(5, 3, add)); // 8
console.log(operate(5, 3, multiply)); // 15
console.log(operate(8, 2, subtract)); // 4


// 4. Замыкания:
/*
Создайте функцию createCounter, которая создает счетчик.
Функция должна возвращать другую функцию, которая при вызове
увеличивает счетчик на 1 и возвращает текущее значение.
*/

function createCounter() {
  let count = 1
 return function() {
  return count++
 }
}


// Пример:
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter2()); // 1


