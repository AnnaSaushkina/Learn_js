// Задача 1: Что выведут следующие сравнения? Объясните почему.
console.log('1 ===', [] == false); // true
console.log('2 ===', [] == ![]); // true
console.log('3 ===', null == undefined); // true
console.log('4 ===', null === undefined); // false
console.log('5 ===', [1, 2] == [1, 2]); // false

// Задача 2: Расположите следующие значения в порядке возрастания
// null, 0, '0', false, NaN, -1, '', undefined
// Объясните логику сортировки

// Задача 3: Какой результат будет у следующих выражений?
console.log('6 ===', NaN === NaN); // false
console.log('7 ===', Object.is(NaN, NaN)); // true
console.log('8 ===', Number.isNaN(NaN)); // true
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true

// Какие значения выведут эти проверки?
console.log(isNaN('hello')); // true

console.log(Number.isNaN('hello')); //false
console.log(isNaN(undefined)); // true

console.log(Number.isNaN(undefined)); // false
console.log(isNaN({})); // true

console.log(Number({})); //NaN
console.log(Number([])); //0
console.log(Number(function foo() {})); //NaN
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number('')); //0

console.log(Number.isNaN({})); //false

// Задача 4: Что выведут следующие сравнения?
console.log('9 ===', '2' > '12'); // true
console.log('10 ===', '2' > 12); // false
console.log('11 ===', 2 > '12'); // false

// Задача 5: Объясните результаты следующих сравнений
console.log('12 ===', {} == {}); // false
console.log('13 ===', {} == '[object Object]');
console.log('14 ===', {}.toString() == '[object Object]');

// Задача 6: Что выведут следующие сравнения с null?
console.log('15 ===', null > 0); // false
console.log('16 ===', null == 0); // false
console.log('17 ===', null >= 0); // true

// Задача 7: Сравнение массивов и строк
console.log('18 ===', [1] == '1'); // false
console.log('19 ===', ['1'] == '1');
console.log('20 ===', [1, 2] == '1,2');

// Задача 8: Сложные преобразования типов
console.log('21 ===', true + false > 1);
console.log('22 ===', '2' + 1 > 3);
console.log('23 ===', '2' - 1 > 3);

// Задача 9: Особые случаи с Boolean
console.log('24 ===', Boolean([]));
console.log('25 ===', Boolean(''));
console.log('26 ===', Boolean([].length));

// Задача 10: Напишите функцию, которая корректно сравнивает версии
// например: '1.2.3' > '1.2.2' // true
function compareVersions(v1, v2) {
  // Ваш код
}

// Тесты для задачи 10
console.log('27 ===', compareVersions('1.2.3', '1.2.2')); // true
console.log('28 ===', compareVersions('1.3.0', '1.2.9')); // true
console.log('29 ===', compareVersions('1.10.0', '1.9.9')); // true
console.log('30 ===', compareVersions('2.0.0', '1.9999.9999')); // true

NaN ** 0; //1
isNaN('1'); // true
null >= 0; // true
Number([]); // 0
Number([1]); // 1
Number([1, 2]); // NaN
!!new Boolean(0);

// 1. Базовое сравнение с ==:
/*
Напишите функцию looseCompare, которая принимает два значения и возвращает true,
если они равны с использованием нестрогого сравнения (==).
Объясните результат в комментариях.
*/

// Примеры:
console.log(looseCompare(5, '5')); // true
console.log(looseCompare(0, false)); // true
console.log(looseCompare(null, undefined)); // true
console.log(looseCompare([], '')); // true

// 2. Строгое сравнение с ===:
/*
Создайте функцию strictCompare, которая сравнивает два значения,
используя строгое сравнение (===).
Верните объект с результатами сравнения == и ===
*/

// Пример:
console.log(strictCompare(5, '5'));
// { loose: true, strict: false }
console.log(strictCompare(null, undefined));
// { loose: true, strict: false }

// 3. Сравнение объектов:
/*
Напишите функцию compareObjects, которая сравнивает два объекта.
Функция должна возвращать объект с результатами различных типов сравнения
*/

// Пример:
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(compareObjects(obj1, obj2));
// { loose: false, strict: false, sameContent: true }
console.log(compareObjects(obj1, obj3));
// { loose: true, strict: true, sameContent: true }

// 4. Сравнение с нулевыми значениями:
/*
Создайте функцию isZeroLike, которая определяет, является ли значение
"нулевым" (0, null, undefined, false, '') используя различные типы сравнений.
Верните объект с результатами сравнений.
*/

// Пример:
console.log(isZeroLike(0));
// { isZero: true, isNull: false, isUndefined: false, isFalsy: true }
console.log(isZeroLike(null));
// { isZero: false, isNull: true, isUndefined: false, isFalsy: true }

// 5. Object.is():
/*
Напишите функцию compareWithObjectIs, которая сравнивает два значения
используя Object.is() и возвращает объект с результатами разных типов сравнений
*/

// Пример:
console.log(compareWithObjectIs(NaN, NaN));
// { loose: false, strict: false, objectIs: true }
console.log(compareWithObjectIs(0, -0));
// { loose: true, strict: true, objectIs: false }

// 6. Практическое применение:
/*
Создайте функцию findInArray, которая ищет элемент в массиве,
используя разные типы сравнений. Функция должна возвращать объект
с индексами, найденными разными способами сравнения
*/

// Пример:
const arr = [0, '0', false, null, undefined, NaN];
console.log(findInArray(arr, 0));
// { looseIndex: [0, 1], strictIndex: [0], objectIsIndex: [0] }

// 7. Сравнение с приведением типов:
/*
Напишите функцию compareWithCoercion, которая демонстрирует
результаты сравнения значений с приведением типов и без.
Объясните каждый результат в комментариях.
*/

// Пример:
console.log(compareWithCoercion(1, true));
// { loose: true, strict: false, explanation: "1 == true (true преобразуется в 1)" }

// 8. Edge cases:
/*
Создайте функцию edgeCaseCompare, которая проверяет специальные случаи
сравнений в JavaScript. Функция должна возвращать объект с результатами
и объяснениями.
*/

// Пример:
console.log(edgeCaseCompare(NaN, NaN));
console.log(edgeCaseCompare(0, -0));
console.log(edgeCaseCompare([], ![]));
