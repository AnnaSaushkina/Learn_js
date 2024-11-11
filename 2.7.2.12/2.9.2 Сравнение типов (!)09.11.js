// Задача 1: Что выведут следующие сравнения? Объясните почему.
console.log('1 ===', [] == false); // true
console.log('2 ===', [] == ![]); // true
console.log('3 ===', null == undefined); // true
console.log('4 ===', null === undefined); // false
console.log('5 ===', [1,2] == [1,2]); // false

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
console.log(isNaN("hello")); // true

console.log(Number.isNaN("hello")); //false
console.log(isNaN(undefined)); // true

console.log(Number.isNaN(undefined)); // false
console.log(isNaN({}));  // true

console.log(Number({})) //NaN
console.log(Number([])) //0
console.log(Number(function foo() {})) //NaN
console.log(Number(undefined)) //NaN
console.log(Number(null)) //0
console.log(Number("")) //0

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
console.log('18 ===', [1] == '1');
console.log('19 ===', ['1'] == '1');
console.log('20 ===', [1,2] == '1,2');

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
