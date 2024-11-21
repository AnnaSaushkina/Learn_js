// Задача 1: if (строка с нулём)
//     Выведется ли alert?

if ('0') {
  alert('Привет');
} // выведется поскольку строка в условии это true

//Задача 2:  Название JavaScript

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

function showRightNaming(userEnter) {
  console.log('Какое «официальное» название JavaScript?');
  return userEnter === 'ECMAScript' ? 'Верно' : 'Не знаете? ECMAScript!';
}

let userEnter = 'ECMAScript';
console.log(showRightNaming(userEnter));

// Задача 3: Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

function alertNumber(newNum) {
  return newNum > 0 ? 1 : newNum < 0 ? -1 : 0;
}

console.log(alertNumber(5));
console.log(alertNumber(0));
console.log(alertNumber(-5));

// Задача 4: Перепишите 'if' в '?'
// Перепишите конструкцию if с использованием условного оператора '?':

let result;
let a = 5;
let b = 10;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

a + b < 4 ? (result = 'Мало') : (result = 'Много');
console.log(result);

//Задача 5: Перепишите 'if..else' в '?'
// Перепишите if..else с использованием нескольких операторов '?'.

// Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let login = 'Сотрудник';
login == 'Сотрудник'
  ? (message = 'Привет')
  : login == 'Директор'
    ? (message = 'Здравствуйте')
    : login == ''
      ? (message = 'Нет логина')
      : (message = '');

console.log(message);

// Задача 6: Проверка четности числа

// Напишите функцию isEven, которая принимает число и возвращает true, если число четное, и false, если нечетное.

function isEven(num) {
  return num % 2 ? false : true;
}

// Примеры вызова функции
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// ▎Задача 7: Оценка по баллам

// Создайте функцию getGrade, которая принимает число (баллы) от 0 до 100 и возвращает оценку по следующему критерию:

// • 90-100: "A"

// • 80-89: "B"

// • 70-79: "C"

// • 60-69: "D"

// • 0-59: "F"

function getGrade(score) {
  let result;
  score >= 90 && score <= 100
    ? (result = 'A')
    : score >= 80 && score <= 89
      ? (result = 'B')
      : score >= 70 && score <= 79
        ? (result = 'C')
        : score >= 60 && score <= 69
          ? (result = 'D')
          : score >= 0 && score <= 59
            ? (result = 'F')
            : (result = '');
  return result;
}

// Примеры вызова функции
console.log(getGrade(95)); // "A"
console.log(getGrade(85)); // "B"
console.log(getGrade(75)); // "C"
console.log(getGrade(65)); // "D"
console.log(getGrade(50)); // "F"

// ▎Задача 8: Определение дня недели

// Напишите функцию getDayType, которая принимает номер дня недели (от 1 до 7) и возвращает строку "Рабочий день" для понедельника-пятницы и "Выходной" для субботы и воскресенья.

function getDayType(day) {
  let whichDay;
  day >= 6 && day < 7
    ? (whichDay = 'Выходноой')
    : day <= 5 && day > 0
      ? (whichDay = 'Рабочий день')
      : (whichDay = '');
  return whichDay;
}

// Примеры вызова функции
console.log(getDayType(1)); // "Рабочий день"
console.log(getDayType(6)); // "Выходной"

// ▎Задача 9: Определение возраста

// Создайте функцию checkAge, которая принимает возраст и возвращает:

// • "Доступ разрешен", если возраст больше или равен 18,

// • "Доступ запрещен", если возраст меньше 18.

function checkAge(age) {
  let access;
  age >= 18 ? (access = 'Доступ разрешен') : (access = 'Доступ запрещен');
  return access;
}
// Примеры вызова функции
console.log(checkAge(20)); // "Доступ разрешен"
console.log(checkAge(16)); // "Доступ запрещен"

// ▎Задача 10: Порядок чисел

// Напишите функцию compareNumbers, которая принимает два числа и возвращает строку:

// • "Первое число больше",

// • "Второе число больше",

// • "Числа равны".

function compareNumbers(num1, num2) {
  let result;
  num1 > num2
    ? (result = 'Первое число больше')
    : num2 > num1
      ? (result = 'Второе число больше')
      : (result = 'Числа равны');
  return result;
}

// Примеры вызова функции
console.log(compareNumbers(5, 10)); // "Второе число больше"
console.log(compareNumbers(15, 10)); // "Первое число больше"
console.log(compareNumbers(10, 10)); // "Числа равны"

// ▎Задача 11: Проверка на диапазон

// Создайте функцию isInRange, которая принимает число и проверяет, находится ли оно в диапазоне от 10 до 20 (включительно). Возвращайте true или false.

function isInRange(num) {
  return (result = num >= 10 && num <= 20 ? true : false);
}

// Примеры вызова функции
console.log(isInRange(15)); // true
console.log(isInRange(25)); // false

// ▎Задача 12: Определение сезона

// Напишите функцию getSeason, которая принимает номер месяца (от 1 до 12) и возвращает название сезона:

// • Зима: декабрь (12), январь (1), февраль (2)

// • Весна: март (3), апрель (4), май (5)

// • Лето: июнь (6), июль (7), август (8)

// • Осень: сентябрь (9), октябрь (10), ноябрь (11)

function getSeason(month) {
  let result;
  month == 12 || (month <= 2 && month > 0)
    ? (result = 'Зима')
    : month >= 3 && month <= 5
      ? (result = 'Весна')
      : month >= 6 && month <= 8
        ? (result = 'Лето')
        : month >= 9 && month <= 11
          ? (result = 'Осень')
          : (result = 'В году всего 12 месяцев');
  return result;
}

// Примеры вызова функции
console.log(getSeason(1)); // "Зима"
console.log(getSeason(4)); // "Весна"
console.log(getSeason(7)); // "Лето"
console.log(getSeason(10)); // "Осень"

// ▎Задача 13: Проверка на високосный год

// Создайте функцию isLeapYear, которая принимает год и возвращает true, если год является високосным, и false в противном случае. Високосный год — это год, который делится на 4, но не делится на 100, или делится на 400.

function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 !== 0) || year % 400 == 0;
}

// Примеры вызова функции
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true




