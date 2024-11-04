
// Задача 1: Проверка значений

// Создайте функцию getValue, которая принимает два параметра: value1 и value2. Функция должна возвращать value1, если оно не равно null или undefined, в противном случае возвращать value2.

function getValue(value1, value2) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(getValue(null, "default")); // "default"
console.log(getValue(undefined, "default")); // "default"
console.log(getValue("Hello", "default")); // "Hello"


// ▎Задача 2: Установка значений по умолчанию

// Напишите функцию setDefault, которая принимает объект и устанавливает значение по умолчанию для свойства name. Если name отсутствует или равно null, то оно должно быть установлено в "Anonymous".

function setDefault(obj) {
    // Ваш код здесь
}

// Примеры вызова функции
let user1 = { name: null };
let user2 = { name: "Alice" };

setDefault(user1);
setDefault(user2);

console.log(user1.name); // "Anonymous"
console.log(user2.name); // "Alice"


// ▎Задача 3: Объединение значений

// Создайте функцию combineValues, которая принимает три параметра: a, b и c. Функция должна возвращать первое значение, которое не является null или undefined. Используйте оператор нулевого слияния.

function combineValues(a, b, c) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(combineValues(null, undefined, "Hello")); // "Hello"
console.log(combineValues(null, "World", "Hello")); // "World"
console.log(combineValues("Hi", null, "Hello")); // "Hi"


// ▎Задача 4: Присвоение значений по умолчанию

// Напишите функцию assignDefaults, которая принимает объект и устанавливает значения по умолчанию для свойств width и height, если они отсутствуют или равны null. Значения по умолчанию должны быть 100 и 200 соответственно.

function assignDefaults(rect) {
    // Ваш код здесь
}

// Примеры вызова функции
let rect1 = { width: null, height: 150 };
let rect2 = { height: null };

assignDefaults(rect1);
assignDefaults(rect2);

console.log(rect1.width); // 100
console.log(rect1.height); // 150
console.log(rect2.width); // 100
console.log(rect2.height); // 200


// ▎Задача 5: Обработка пользовательского ввода

// Создайте функцию getUserInput, которая принимает объект с пользовательским вводом и возвращает значение свойства input, если оно не равно null или undefined. Если же значение равно null или undefined, функция должна возвращать строку "No input provided".

function getUserInput(userInput) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(getUserInput({ input: null })); // "No input provided"
console.log(getUserInput({ input: undefined })); // "No input provided"
console.log(getUserInput({ input: "User data" })); // "User data"


// ▎Задача 6: Сложная проверка значений

// Напишите функцию checkSettings, которая принимает объект настроек. Если значение свойства theme равно null или undefined, установите его в "light". Если значение свойства fontSize равно null или undefined, установите его в 16. Верните обновленный объект.

function checkSettings(settings) {
    // Ваш код здесь
}

// Примеры вызова функции
let userSettings = { theme: null, fontSize: undefined };
let updatedSettings = checkSettings(userSettings);

console.log(updatedSettings); // { theme: "light", fontSize: 16 }


// ▎Задача 7: Условное присваивание

// Создайте функцию conditionalAssign, которая принимает два параметра: value и defaultValue. Если value равно null или undefined, функция должна присвоить переменной result значение defaultValue. В противном случае переменной result должно быть присвоено значение value. Верните результат.

function conditionalAssign(value, defaultValue) {
    let result = value ?? defaultValue;
    return result;
}

// Примеры вызова функции
console.log(conditionalAssign(null, "Default")); // "Default"
console.log(conditionalAssign(undefined, "Default")); // "Default"
console.log(conditionalAssign("Value", "Default")); // "Value"

