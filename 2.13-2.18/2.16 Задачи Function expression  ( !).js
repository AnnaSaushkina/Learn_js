// 1. Базовое объявление:
// Создайте функцию-выражение multiply, которая принимает два параметра и возвращает их произведение
let multiply = function(a, b) {
    // Ваш код
};
console.log(multiply(4, 5)); // Должно вывести: 20


// 2. Hoisting (всплытие):
// Попробуйте вызвать функцию до её объявления. Объясните результат
console.log(sayHi());
let sayHi = function() {
    return "Hello!";
};


// 3. Функция как параметр:
// Создайте функцию-выражение operate, которая принимает два числа и функцию-операцию
// и выполняет переданную операцию над числами
let operate = function(a, b, operation) {
    // Ваш код
};

let addd = function(x, y) { return x + y; };
let subtract = function(x, y) { return x - y; };

console.log(operate(10, 5, addd));      // Должно вывести: 15
console.log(operate(10, 5, subtract)); // Должно вывести: 5


// 4. Немедленно вызываемое функциональное выражение (IIFE):
// Создайте IIFE, которая создаст счетчик с приватной переменной
let counter = (function() {
    // Ваш код должен вернуть объект с методами increment() и getValue()
})();

console.log(counter.getValue()); // Должно вывести: 0
counter.increment();
console.log(counter.getValue()); // Должно вывести: 1


// 5. Замыкания:
// Создайте функцию-фабрику, которая создает функции приветствия
let createGreeting = function(greeting) {
    // Ваш код
};

let sayHello = createGreeting("Hello");
let sayHii = createGreeting("Hi");

console.log(sayHello("John")); // Должно вывести: "Hello, John!"
console.log(sayHii("John"));    // Должно вывести: "Hi, John!"


// 6. Рекурсия:
// Создайте функцию-выражение для вычисления факториала числа
let factorial = function(n) {
    // Ваш код
};

console.log(factorial(5)); // Должно вывести: 120


// 7. Функция как метод объекта:
// Создайте объект calculator с методами add, subtract и multiply
let calculator = {
    add: function(a, b) {
        // Ваш код
    },
    subtract: function(a, b) {
        // Ваш код
    },
    multiply: function(a, b) {
        // Ваш код
    }
};

console.log(calculator.add(5, 3));      // Должно вывести: 8
console.log(calculator.subtract(5, 3)); // Должно вывести: 2
console.log(calculator.multiply(5, 3)); // Должно вывести: 15


// 8. Стрелочные функции:
// Перепишите следующую функцию-выражение в виде стрелочной функции
let square = function(x) {
    return x * x;
};

// Создайте массив чисел и используйте стрелочную функцию с методом map
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(/* Ваша стрелочная функция */);
console.log(squares); // Должно вывести: [1, 4, 9, 16, 25]


// 9. Функция высшего порядка:
// Создайте функцию-выражение, которая принимает массив и функцию-предикат
// и возвращает новый массив с элементами, удовлетворяющими предикату
let filter = function(arr, predicate) {
    // Ваш код
};

// let numbers = [1, 2, 3, 4, 5, 6];
let isEven = function(x) { return x % 2 === 0; };
console.log(filter(numbers, isEven)); // Должно вывести: [2, 4, 6]


// 10. Каррирование:
// Создайте функцию-выражение для каррированного сложения
let add = function(a) {
    // Ваш код
};

console.log(add(5)(3)); // Должно вывести: 8