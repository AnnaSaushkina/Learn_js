
// ### Задача 1: Проверка возраста и гражданства
// Создайте функцию `canVote`, которая принимает два параметра: `age` (возраст) и `isCitizen` (гражданство, булевое значение). Функция должна возвращать `true`, если человек может голосовать (возраст 18 лет или старше и является гражданином), и `false` в противном случае.


function canVote(age, isCitizen) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(canVote(20, true)); // true
console.log(canVote(17, true)); // false
console.log(canVote(20, false)); // false


// ### Задача 2: Проверка доступа
// Напишите функцию `hasAccess`, которая принимает три параметра: `isAdmin` (булевое значение), `isMember` (булевое значение) и `isGuest` (булевое значение). Функция должна возвращать `true`, если пользователь имеет доступ (если он администратор или член), и `false`, если это гость.


function hasAccess(isAdmin, isMember, isGuest) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(hasAccess(true, false, false)); // true
console.log(hasAccess(false, true, false)); // true
console.log(hasAccess(false, false, true)); // false


// ### Задача 3: Определение выходного дня
// Создайте функцию `isWeekend`, которая принимает номер дня недели (от 1 до 7) и возвращает `true`, если это выходной (суббота или воскресенье), и `false` в противном случае.


function isWeekend(day) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(isWeekend(6)); // true (суббота)
console.log(isWeekend(7)); // true (воскресенье)
console.log(isWeekend(3)); // false (вторник)


// ### Задача 4: Проверка на правильный ввод
// Напишите функцию `isValidInput`, которая принимает три параметра: `input1`, `input2` и `input3`. Функция должна возвращать `true`, если хотя бы один из входов является положительным числом, и `false` в противном случае.


function isValidInput(input1, input2, input3) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(isValidInput(-1, 0, 5)); // true
console.log(isValidInput(-1, -2, -3)); // false
console.log(isValidInput(0, 0, 0)); // false


// ### Задача 5: Проверка на четность и нечетность
// Создайте функцию `isEvenOrOdd`, которая принимает число и возвращает строку "Четное", если число четное; "Нечетное", если число нечетное; и "Не число", если передано нечисловое значение.


function isEvenOrOdd(num) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(isEvenOrOdd(4)); // "Четное"
console.log(isEvenOrOdd(7)); // "Нечетное"
console.log(isEvenOrOdd("текст")); // "Не число"


// ### Задача 6: Проверка на диапазон значений
// Напишите функцию `isInRange`, которая принимает число и проверяет, находится ли оно в диапазоне от 10 до 20 (включительно). Функция должна возвращать `true`, если число в диапазоне, и `false` в противном случае.


function isInRange(num) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(isInRange(15)); // true
console.log(isInRange(9)); // false
console.log(isInRange(20)); // true
console.log(isInRange(21)); // false


// ### Задача 7: Определение типа пользователя
// Создайте функцию `userType`, которая принимает два параметра: `isSubscriber` (булевое значение) и `isPremium` (булевое значение). Функция должна возвращать строку:
// - "Премиум подписчик", если это премиум подписчик,
// - "Обычный подписчик", если это обычный подписчик,
// - "Не подписчик", если не подписчик.


function userType(isSubscriber, isPremium) {
    // Ваш код здесь
}

// Примеры вызова функции
console.log(userType(true, true)); // "Премиум подписчик"
console.log(userType(true, false)); // "Обычный подписчик"
console.log(userType(false, false)); // "Не подписчик"


// ### Задача 8: Проверка на наличие хотя бы одного условия
// Напишите функцию `checkConditions`, которая принимает три булевых параметра: `condition1`, `condition2`, и `condition3`. Функция должна возвращать `true`, если хотя бы одно из условий истинно.


function checkConditions(condition1, cond) {

    // Ваш код здесь
}

// Примеры вызова функции
console.log(checkConditions(false, false, true)); // true
console.log(checkConditions(false, false, false)); // false
