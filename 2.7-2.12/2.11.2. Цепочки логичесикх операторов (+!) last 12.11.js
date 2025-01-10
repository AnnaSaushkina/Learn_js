// Задача 1: Что вернут следующие выражения? Объясните почему.
console.log('1 ===', null || undefined || 0 || '' || NaN || false); // false
console.log('2 ===', 'hello' && 123 && {} && [] && true); //true
console.log('3 ===', null && undefined); // null
console.log('4 ===', undefined || null); //  undefined

// Задача 2: Короткое замыкание. Что будет выведено?
let a = 0;
console.log('5 ===', true || a++); // true
console.log('6 ===', a); // 0

let b = 0;
console.log('7 ===', false && b++); // false
console.log('8 ===', b); // 0

// Задача 3: Сложные цепочки. Определите результат:
console.log('9 ===', (1 && 2) || (3 && 4)); // 2
console.log('10 ===', 1 || (2 && 3) || 4); // 1
console.log('11 ===', (1 || 2) && (3 || 4)); // 3

console.log('23 ===', findFirstTruthy([0, '', false, 'hello', null])); // 'hello'
console.log('24 ===', findFirstTruthy([0, '', false])); // undefined

console.log('26 ===', areAllTruthy(1, 'hello', true, [])); // true
console.log('27 ===', areAllTruthy(1, 'hello', false, [])); // false

// Задача 11: Сложные преобразования
console.log('28 ===', !!'0' && !!'false' && !!''); //
console.log('29 ===', [] && {} && [0]); //
console.log('30 ===', NaN || null || undefined || 0); //

// Задача 1
console.log(1 && 2 && null && 0); // null

// Задача 2
console.log(1 || 0 || false || {}); // 1

// Задача 3
console.log(null || (2 && 3) || 4); // 3

// Задача 4
console.log((null && undefined) || false || '' || 0); // 0

// Задача 5
console.log({} && [] && true && 1); // 1

// Задача 6
console.log(Boolean([])); // true
console.log(!![]); // true
console.log([] == false); // true
console.log(Boolean({}) == Boolean([])); // true

// Задача 7
console.log('' || 2 || undefined); //2
console.log(1 && null && 2); // null

// Задача 8
console.log(null || (2 && 3) || 4); // 3

// Задача 9
console.log([] + false - null + true); // NaN

// Задача 10
console.log([] + 1 + 2); // 12

// Задача 11
console.log('1' + 2 + 3); // 123
console.log(1 + 2 + '3'); // 33

// Задача 12
console.log(2 > 1 > 1); // false
console.log(null >= 0); // true
console.log(null == 0); // false

// Задача 13
console.log(undefined == null); // true
console.log(undefined === null); // false

// Задача 14
console.log([] == ![]); // true

// Задача 15
console.log('' + 1 + 0); // 10
console.log('' - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / '3'); // 2

// Задача 16
let value = null;
console.log(value ?? 'default'); // default

// Задача 17
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0

// Задача 18
let user = {
  name: 'John',
  age: 0,
};
console.log(user.age ?? 18); // 0
console.log(user.height ?? 180); // 180

// Задача 19
console.log((true && false) || (true && true)); // true

// Задача 20
console.log(null || (undefined ?? 'default')); // default

// 1. Сложное условие с комбинацией AND, OR и NOT:
let age = 25;
let hasLicense = true;
let experience = 3;
let violations = 0;
let isInsured = true;

let canDrive =
  age >= 21 &&
  hasLicense &&
  (experience >= 2 || violations === 0) &&
  !isInsured === false &&
  !(age > 65 && experience < 10);

console.log(canDrive); // true

// 2. Проверка диапазонов с множественными условиями:
let score = 75;
let attendance = 85;
let homework = 90;
let extraCredit = true;

let finalGrade =
  (score >= 70 && attendance >= 80 && homework >= 85) ||
  (score >= 65 && attendance >= 90 && homework >= 95) ||
  (score >= 60 && attendance >= 95 && homework >= 90 && extraCredit);
console.log(finalGrade); // true

// 3. Вложенные тернарные операторы:
let status = 'premium';
let points = 500;
let isVIP = true;
let hasPromo = false;

let discount =
  status === 'premium'
    ? points > 1000
      ? 30
      : 20
    : isVIP
      ? hasPromo
        ? 25
        : 15
      : points > 500
        ? 10
        : 0;
console.log(discount); // 20

// Задача 1: Определите результат выражений
console.log((null && undefined) || false || '' || 0); // 0
console.log(true || (false && null) || undefined); // true
console.log(('' && 0) || ('0' && 1)); // 1
console.log(null || ('' && false) || undefined); // undefined
console.log((0 && false) || (null && true) || ''); // ""

// Задача 2: Операторы с числами
console.log((1 && 2) || (0 && 3)); // 2
console.log((10 && 0) || ('' && 5)); // ""
console.log((1 + 2 && 3 + 4) || 5 + 6); // 7
console.log(0 || (2 && 3) || 4); // 3
console.log((1 && null) || (3 && 4)); // 4

// Задача 3: Строки и логические операторы
console.log(('hello' && 'world') || ''); //  "world"
console.log('' || ('test' && 'value')); // value
console.log(('0' && '') || 0); // 0
console.log(('false' && '0') || false); // "0"
console.log(('' && 'test') || (0 && '1')); // 0

// Задача 4: Смешанные типы
console.log(([] && {}) || ('' && true)); // {}
console.log({} || ([] && null) || undefined); // {}
console.log((false && null) || (undefined && true) || 0); // 0
console.log(0 || ('' && {}) || ([] && false)); // false
console.log((null && undefined) || (false && '') || 0); // 0

// Задача 5: С использованием сравнений
console.log((1 > 2 && 3 < 4) || 5 == '5'); // true
console.log((null === undefined && true) || false); // false
console.log(('0' == 0 && null) || (undefined && '')); // undefined
console.log(([] == false && {}) || null); // {}
console.log((typeof null && typeof undefined) || false); // "undefined"

// Задача 6: Сложные комбинации
console.log((!'' && !null) || !undefined); // true
console.log((!0 && !false) || !'0'); // true
console.log(!!null || (!![] && !!'')); // false
console.log(Boolean(0) || (Boolean('') && Boolean([]))); // false
console.log((!null && !undefined) || (!false && !'')); // true

// Задача 7: С числовыми операциями
console.log((1 + 2 && 3 * 4) || 5 % 2); //
console.log((0 / 1 && 2 ** 3) || 4 - 5); //
console.log((1 < 2 && 3 > 4) || 5 <= 5); //
console.log((1 + '' && 2 * '3') || 0); //
console.log((+'0' && +'1') || +''); //

// Задача 8: С условными выражениями
console.log(true ? null : undefined || false ? 0 : ''); //
console.log(false ? 1 : 2 && true ? 3 : 4); //
console.log(null || undefined ? true : false); //
console.log(0 && 1 ? 'yes' : 'no'); //
console.log('' || 0 ? [] : {}); //

// Задача 9: Приоритет операций
console.log((1 + 2 && 3 * 4) || 5 / 2); //
console.log((1 && 2) || (3 && 4) || (5 && 6)); //
console.log((1 && (2 || 3) && 4) || 5); //
console.log((null || undefined) && (false || true)); //
console.log((0 && (1 || 2)) || (3 && 4)); //

// Задача 10: Комплексные выражения
console.log((typeof null && typeof undefined) || typeof ''); //
console.log((Array.isArray([]) && null) || (undefined && {})); //
console.log((Object.is(NaN, NaN) && 0) || null); //
console.log((isNaN(undefined) && isFinite(null)) || false); //
console.log((Boolean(0) && Boolean([])) || Boolean({})); //

// Задача 11: Работа с массивами
const arr1 = [];
const arr2 = [1, 2, 3];

console.log('17 ===', arr1.length && arr1[0]); //
console.log('18 ===', arr2.length && arr2[0]); //
console.log('19 ===', arr1[0] || 'empty'); //

// Задача 12: Условные операции
function checkValue(value) {
  return value && typeof value === 'object' && !Array.isArray(value);
}

console.log('20 ===', checkValue({})); //
console.log('21 ===', checkValue([])); //
console.log('22 ===', checkValue(null)); //

// Задача 12: Напишите функцию, которая возвращает первое истинное значение из массива
function findFirstTruthy(arr) {
  // Ваш код
}

// Задача 13: Комбинирование с тернарным оператором
// const value = null;
// console.log('25 ===', value && value.length ? value.length : value || 'default');

// Задача 10: Создайте функцию, которая проверяет все аргументы на истинность
function areAllTruthy(...args) {
  // Ваш код
}
