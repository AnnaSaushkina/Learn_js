
// 1. Базовое преобразование:
// Преобразуйте следующие функции в стрелочные
function add(a, b) {
    return a + b;
}

function greet(name) {
    return Hello, ${name}!
}

function square(x) {
    return x * x;
}

// Решение должно выглядеть примерно так:
const add = (a, b) => a + b;


// 2. Работа с массивами:
// Используйте стрелочные функции с методами массивов
const numbers = [1, 2, 3, 4, 5];

// Создайте новый массив, где каждый элемент умножен на 2
const doubled = numbers.map(/* ваш код */);

// Отфильтруйте только четные числа
const evenNumbers = numbers.filter(/* ваш код */);

// Найдите сумму всех элементов
const sum = numbers.reduce(/* ваш код */);

console.log(doubled);     // Должно вывести: [2, 4, 6, 8, 10]
console.log(evenNumbers); // Должно вывести: [2, 4]
console.log(sum);         // Должно вывести: 15


// 3. Контекст this:
// Создайте объект с методами, используя обычные и стрелочные функции
// Объясните разницу в поведении this
const person = {
    name: "John",
    friends: ["Mary", "Peter"],
    printFriends() {
        // Используйте стрелочную функцию внутри метода
        this.friends.forEach(/* ваш код */);
    }
};

person.printFriends(); // Должно вывести список друзей с именем person


// 4. Немедленно вызываемые функции:
// Создайте IIFE, используя стрелочную функцию
/* ваш код */(() => {
    console.log("IIFE with arrow function");
})();


// 5. Замыкания:
// Создайте функцию-фабрику, использующую стрелочные функции
const multiply = (x) => {
    // Верните стрелочную функцию, которая умножает свой аргумент на x
};

const multiplyByTwo = multiply(2);
const multiplyByThree = multiply(3);

console.log(multiplyByTwo(4));   // Должно вывести: 8
console.log(multiplyByThree(4)); // Должно вывести: 12


// 6. Цепочки промисов:
// Используйте стрелочные функции в цепочке промисов
const fetchUser = (id) => {
    return new Promise((resolve) => {
        // Имитация запроса к серверу
        setTimeout(() => {
            resolve({ id: id, name: "User" + id });
        }, 1000);
    });
};

// Создайте цепочку промисов, используя стрелочные функции
fetchUser(1)
    .then(/* ваш код */)
    .then(/* ваш код */)
    .catch(/* ваш код */);


// 7. Параметры по умолчанию:
// Создайте стрелочную функцию с параметрами по умолчанию
const createUser = /* ваш код */

console.log(createUser());                    // Должно вывести: { name: "Anonymous", age: 0 }
console.log(createUser("John"));              // Должно вывести: { name: "John", age: 0 }
console.log(createUser("John", 25));          // Должно вывести: { name: "John", age: 25 }


// 8. Композиция функций:
// Создайте функцию compose, которая принимает несколько стрелочных функций
const compose = /* ваш код */

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composed = compose(square, double, addOne);
console.log(composed(2)); // Должно вывести результат: square(double(addOne(2)))


// 9. Обработка событий:
// Создайте обработчики событий, используя стрелочные функции
const button = document.querySelector('#myButton');

button.addEventListener('click', /* ваш код */);

// Создайте debounced версию обработчика
const debounce = (fn, delay) => {
    // Ваш код
};

const debouncedHandler = debounce(/* ваш код */, 1000);


// 10. Функциональное программирование:
// Используйте стрелочные функции для создания функциональных утилит
const pipe = (...fns) => /* ваш код */

const capitalize = str => /* ваш код */
const addExclamation = str => /* ваш код */
const reverse = str => /* ваш код */

const transform = pipe(capitalize, addExclamation, reverse);
console.log(transform("hello")); // Должно вывести: "!OLLEH"


// 11. Условное выполнение:
// Создайте стрелочную функцию, которая использует тернарный оператор
const getStatus = /* ваш код */

console.log(getStatus(true));  // Должно вывести: "Active"
console.log(getStatus(false)); // Должно вывести: "Inactive"


// 12. Деструктуризация в параметрах:
// Создайте стрелочную функцию, использующую деструктуризацию параметров
const formatUser = /* ваш код */

const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(formatUser(user)); // Должно вывести: "John is 30 years old"

