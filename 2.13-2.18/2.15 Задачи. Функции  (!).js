
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




// 5. Рекурсия:
/*
Напишите функцию factorial, которая вычисляет факториал числа.
Факториал числа n - это произведение всех положительных целых чисел от 1 до n.
Использовать рекурсию.
*/

// Пример:
console.log(factorial(5)); // 120 (1 * 2 * 3 * 4 * 5)
console.log(factorial(0)); // 1

// 6. Функция с переменным числом аргументов:
/*
Создайте функцию findMax, которая находит максимальное число 
среди всех переданных аргументов.
Использовать оператор rest.
*/
function findMax(...args) {
  return Math.max(...args)
}

// Пример:
console.log(findMax(1, 5, 2, 9, 3)); // 9
console.log(findMax(1, 2)); // 2
console.log(findMax(1)); // 1

/// 7. Композиция функций:
/*
Создайте функции:
- double (умножает число на 2)
- addOne (прибавляет к числу 1)
- compose (принимает массив функций и возвращает функцию, 
  которая выполняет все функции последовательно)
*/
function double() {
    
}

// Пример:
const transform = compose([double, addOne, double]);
console.log(transform(2)); // 10 ((2 * 2 + 1) * 2)

// 8. Каррирование:
/*
Создайте функцию curry, которая принимает функцию с тремя параметрами
и возвращает каррированную версию этой функции.
*/

function sum(a, b, c) {
  return a + b + c;
}

// Пример:
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6

// 9. Мемоизация:
/*
Создайте функцию memoize, которая принимает функцию и возвращает её 
мемоизированную версию. Мемоизированная версия должна кэшировать 
результаты вызовов с одинаковыми аргументами.
*/

// Пример:
const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10)); // Быстрое вычисление
console.log(memoizedFib(10)); // Мгновенный ответ из кэша

// 10. Функция-декоратор:
/*
Создайте декоратор logExecutionTime, который измеряет и выводит 
время выполнения декорируемой функции.
*/

// Пример:
const slowFunction = logExecutionTime(function () {
  // какой-то медленный код
});
slowFunction(); // "Время выполнения: XX мс"

// Вот решения некоторых задач для примера:

// Задача 1
function greeting(name, age = 18) {
  return `Привет, ${name}! Тебе ${age} лет.`;
}

// Задача 2
function calculateArea(width, height) {
  if (
    typeof width !== 'number' ||
    typeof height !== 'number' ||
    width < 0 ||
    height < 0
  ) {
    return null;
  }
  return width * height;
}

// Задача 4
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

// Задача 5
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Задача 6
function findMax(...numbers) {
  return Math.max(...numbers);
}

// Эти задачи помогут лучше понять различные аспекты работы с функциями в JavaScript, включая:
// - Параметры по умолчанию
// - Возврат значений
// - Функции высшего порядка
// - Замыкания
// - Рекурсию
// - Rest-параметры
// - Композицию функций
// - Каррирование
// - Мемоизацию
// - Декораторы
