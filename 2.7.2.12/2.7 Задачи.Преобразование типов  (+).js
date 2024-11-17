// ▎Задача 1: Преобразование строки в число

// Напишите функцию stringToNumber, которая принимает строку, представляющую число, и возвращает его числовое значение. Если строка не может быть преобразована, функция должна возвращать NaN.

function stringToNumber(str) {
  if (str != Number(str)) {
    return NaN;
  }
  return Number(str);
}
console.log(stringToNumber('2')); // 2
console.log(stringToNumber('строка')); // NaN

// Задача 2: Преобразование числа в строку
// Создайте функцию numberToString, которая принимает число и возвращает его строковое представление.

function numberToString(num) {
  if (num !== Number(num)) {
    return 'Введите число';
  } else return String(num);
}
console.log(numberToString(2)); // "2"
console.log(numberToString('строка')); // "Введите число"
console.log(numberToString(true)); // "Введите число"

// ▎Задача 3: Преобразование булевого значения в строку
// Напишите функцию booleanToString, которая принимает булевое значение (true или false) и возвращает его строковое представление.

function booleanToString(bool) {
  if (bool !== Boolean(bool)) {
    return 'Введите true / false';
  } else return typeof bool + ' ' + Boolean(bool);
}
console.log(booleanToString(true)); // true
console.log(booleanToString(false)); // false
console.log(booleanToString(2)); // Введите true / false
console.log(booleanToString('строка')); // Введите true / false

// ▎Задача 4: Преобразование строки в булевое значение
// Создайте функцию stringToBoolean, которая принимает строку и возвращает true, если строка равна "true", и false в противном случае.

function stringToBoolean(str) {
  if (str === Boolean(str)) {
    return '1.' + typeof str + ' ' + Boolean(str);
  } else if (str === 'true') {
    let newType = Boolean(str);
    return '2. основной ответ: ' + typeof newType + ' ' + newType;
  } else if (str === 'false') {
    let newType = !Boolean(str);
    return '3. основной ответ: ' + typeof newType + ' ' + newType;
  } else return '4. иной ответ: ' + typeof str + ' Введите true или false';
}

console.log(stringToBoolean(false)); // 1.boolean false
console.log(stringToBoolean(true)); // 1.boolean true
console.log(stringToBoolean('false')); // 3. основной ответ: boolean false
console.log(stringToBoolean('true')); // 2. основной ответ: boolean true
console.log(stringToBoolean(1)); // 4. иной ответ: number Введите true или false

// ▎Задача 5: Преобразование массива в строку

// Напишите функцию arrayToString, которая принимает массив и возвращает строку, состоящую из элементов массива, разделенных запятыми.

function arrayToString(arr) {
  return String(arr);
}
console.log(arrayToString([1, 2, 3, 4])); // 1,2,3,4

// ▎Задача 6: Преобразование строки в массив

// Создайте функцию stringToArray, которая принимает строку и возвращает массив, состоящий из символов этой строки.

function stringToArray(str) {
  return str.split('');
}
console.log(stringToArray('строка')); // [ 'с', 'т', 'р', 'о', 'к', 'а' ]

// ▎Задача 7: Преобразование числа в булевое значение

// Напишите функцию numberToBoolean, которая принимает число и возвращает true, если число не равно нулю, и false, если равно.

function numberToBoolean(num) {
  if (num <= 0) {
    return false;
  } else return true;
}
console.log(numberToBoolean(1)); // true
console.log(numberToBoolean(0)); //false
console.log(numberToBoolean(-1)); //false
