// 6.2 REST И SPREAD

function sumAll(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName); // Юлий Цезарь
  console.log(titles[0]); // Консул
  console.log(titles[1]); // Император
  console.log(titles.length); // 2
}
showName('Юлий', 'Цезарь', 'Консул', 'Император');

let arr = [3, 5, 1];
console.log(Math.max(...arr)); // 5

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
let merged = [0, ...arr1, 2, ...arr2];
console.log(merged); // [0, 1, -2, 3, 4, 2, 8, 3, -8, 1]

let str = 'Привет';
console.log([...str]); // ['П','р','и','в','е','т']

// 6.4 VAR
// var не видит блок if, видна снаружи
if (true) {
  var test = true;
}
console.log(test); // true

// let, видит только свой блок
if (true) {
  let phrase = 'Привет';
}
// console.log(phrase); // ошибка

// var видна снаружи цикла
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

// hoisting: объявление var всплывает наверх функции, но не значение
function task() {
  console.log(phrase); // undefined
  var phrase = 'Привет';
  console.log(phrase); // Привет
}
task();

//  старый способ изолировать переменные
(function () {
  var local = 'недоступна снаружи';
  console.log(local);
})();
// console.log(local); // ошибка

// 6.5 ГЛОБАЛЬНЫЙ ОБЪЕКТ

var gVar = 5;
// console.log(window.gVar); // 5

let gLet = 5;
// console.log(window.gLet); // undefined

console.log(globalThis); // работает и в браузере и в Node.js

// 6.6 ОБЪЕКТ ФУНКЦИИ, NFE

// Задача 1: makeCounter с методами set и decrease
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => (count = value);
  counter.decrease = () => count--;

  return counter;
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
counter.set(10);
console.log(counter()); // 10
counter.decrease();
console.log(counter()); // 10

// Задача 2: sum с любым количеством скобок
// toString вызывается автоматически при сравнении
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log(sum(1)(2) == 3); // true
console.log(sum(1)(2)(3) == 6); // true
console.log(sum(5)(-1)(2) == 6); // true
console.log(sum(6)(-1)(-2)(-3) == 0); // true
console.log(sum(0)(1)(2)(3)(4)(5) == 15); // true

// 6.7 NEW FUNCTION

let func = new Function('a', 'b', 'return a + b');
console.log(func(1, 2)); // 3

function getFunc() {
  let value = 'тест';
  let func = new Function('alert(value)');
  return func;
}
// getFunc()(); // ошибка

// 6.8 SETTIMEOUT И SETINTERVAL

// Задача 1: setTimeout выполнится только после цикла
let i = 0;
setTimeout(() => console.log(i), 100);
for (let j = 0; j < 100000000; j++) {
  i++;
}
// 100000000

// Задача 2: printNumbers, выводить числа раз в секунду

// через setInterval
function printNumbersInterval(from, to) {
  let current = from;
  let timerId = setInterval(function () {
    console.log(current);
    if (current === to) clearInterval(timerId);
    current++;
  }, 1000);
}

// через рекурсивный setTimeout
function printNumbersTimeout(from, to) {
  let current = from;

  setTimeout(function go() {
    console.log(current);
    if (current < to) setTimeout(go, 1000);
    current++;
  }, 1000);
}

// printNumbersInterval(1, 5);
// printNumbersTimeout(1, 5);
