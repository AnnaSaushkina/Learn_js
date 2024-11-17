// Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?

let a1 = 1,
  b1 = 1; // 1; 1;

let c = ++a1; // 2
let d = b1++; // 1

// Результат присваивания
// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a2 = 2; // 2
let x = 1 + (a2 *= 2); // 5

// Преобразование типов
// Какой результат будет у выражений ниже?

'' + 1 + 0; // 10 // String
'' - 1 + 0; // -1 // Number
true + false; // 1
6 / '3'; // 2 // Number
'2' * '3'; // 6 // Number
4 + 5 + 'px'; // 9px // String
'$' + 4 + 5; // $45 // String
'4' - 2; // 2 // Number
'4px' - 2; // 2 // String
'  -9  ' + 5; //  -9  5 // String
'  -9  ' - 5; // -14 // Number
null + 1; // 1 // Number
undefined + 1; // NaN
' \t \n' - 2; // -2 // Number

// Исправьте сложение
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

// В чём ошибка? Исправьте её. Результат должен быть 3.

let a3 = prompt('Первое число?', 1);
let b2 = prompt('Второе число?', 2);

alert(+a3 + +b2); // 3

// ▎Задача 1: Приведение к числу

// Напишите функцию toNumber, которая принимает строку и возвращает её числовое значение. Если строка не может быть преобразована в число, функция должна возвращать null.

function toNumber(str) {
  // Ваш код здесь
}

// Примеры вызова функции
console.log(toNumber('42')); // 42
console.log(toNumber('3.14')); // 3.14
console.log(toNumber('abc')); // null

// ▎Задача 2: Сложение строк и чисел

// Создайте переменные a и b, где a — число, а b — строка, содержащая число. Сложите их и выведите результат в консоль. Объясните, почему результат будет именно таким.

let a4 = 5;
let b3 = '10';

// Ваш код здесь

// ▎Задача 3: Неявное приведение типов

// Напишите код, который использует неявное приведение типов, чтобы показать, как JavaScript обрабатывает логические операции с разными типами данных. Например, сравните число с булевым значением.

let num = 1;
let bool = true;

// Ваш код здесь

// ▎Задача 4: Проверка на NaN

// Создайте функцию isNaNValue, которая принимает значение и возвращает true, если это значение является NaN, и false в противном случае. Используйте оператор typeof для проверки.

function isNaNValue(value) {
  // Ваш код здесь
}

// Примеры вызова функции
console.log(isNaNValue(NaN)); // true
console.log(isNaNValue(5)); // false

// ▎Задача 5: Конкатенация массивов и строк

// Создайте массив с числами и строку. Попробуйте объединить их с помощью оператора +. Выведите результат в консоль и объясните, что происходит.

let arr = [1, 2, 3];
let str = ' numbers';

// Ваш код здесь

// ▎Задача 6: Логические операции

// Создайте две переменные x и y, где x — это число, а y — булевое значение. Используйте оператор логического И (&&) и логического ИЛИ (||) для проверки различных условий. Выведите результаты в консоль.

let x2 = 0; // или любое другое число
let y = false;

// Ваш код здесь

// ▎Задача 7: Приведение к строке

// Напишите функцию toString, которая принимает любое значение и возвращает его строковое представление. Используйте метод String() для преобразования.

function toString(value) {
  // Ваш код здесь
}

// Примеры вызова функции
console.log(toString(123)); // "123"
console.log(toString(true)); // "true"
console.log(toString(null)); // "null"

// ▎Задача 8: Сравнение с нулем

// Создайте переменную со значением 0 (число) и переменную со значением "0" (строка). Сравните их с помощью операторов == и ===, затем выведите результаты в консоль.

let numZero = 0;
let strZero = '0';

// Ваш код здесь
