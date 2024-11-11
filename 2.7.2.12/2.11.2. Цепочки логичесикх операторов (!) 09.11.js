// Задача 1: Что вернут следующие выражения? Объясните почему.
console.log('1 ===', null || undefined || 0 || '' || NaN || false); // false
console.log('2 ===', 'hello' && 123 && {} && [] && true); //true
console.log('3 ===', null && undefined); // null
console.log('4 ===', undefined || null); //  undefined

// Задача 2: Короткое замыкание. Что будет выведено?
let a = 0;
console.log('5 ===', true || a++); //
console.log('6 ===', a); //

let b = 0;
console.log('7 ===', false && b++); //
console.log('8 ===', b); //

// Задача 3: Сложные цепочки. Определите результат:
console.log('9 ===', 1 && 2 || 3 && 4); //
console.log('10 ===', 1 || 2 && 3 || 4);//
console.log('11 ===', (1 || 2) && (3 || 4));//

// Задача 4: Работа с объектами
const obj = {
    name: '',
    age: 0,
    address: null
};

console.log('12 ===', obj.name || 'Unnamed');//
console.log('13 ===', obj.age || 18);//
console.log('14 ===', obj.address && obj.address.street);//

// Задача 5: Напишите функцию, которая безопасно извлекает вложенное значение из объекта
function safeGet(obj, path) {
    // Ваш код
}

const data = {
    user: {
        address: {
            street: 'Main'
        }
    }
};

console.log('15 ===', safeGet(data, 'user.address.street')); // 'Main'
console.log('16 ===', safeGet(data, 'user.contacts.phone')); // undefined

// Задача 6: Работа с массивами
const arr1 = [];
const arr2 = [1, 2, 3];

console.log('17 ===', arr1.length && arr1[0]);//
console.log('18 ===', arr2.length && arr2[0]);//
console.log('19 ===', arr1[0] || 'empty');//

// Задача 7: Условные операции
function checkValue(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
}

console.log('20 ===', checkValue({}));//
console.log('21 ===', checkValue([]));//
console.log('22 ===', checkValue(null));//

// Задача 8: Напишите функцию, которая возвращает первое истинное значение из массива
function findFirstTruthy(arr) {
    // Ваш код
}

console.log('23 ===', findFirstTruthy([0, '', false, 'hello', null])); // 'hello'
console.log('24 ===', findFirstTruthy([0, '', false])); // undefined

// Задача 9: Комбинирование с тернарным оператором
// const value = null;
// console.log('25 ===', value && value.length ? value.length : value || 'default');

// Задача 10: Создайте функцию, которая проверяет все аргументы на истинность
function areAllTruthy(...args) {
    // Ваш код
}

console.log('26 ===', areAllTruthy(1, 'hello', true, [])); // true
console.log('27 ===', areAllTruthy(1, 'hello', false, [])); // false

// Задача 11: Сложные преобразования
console.log('28 ===', !!'0' && !!'false' && !!'');//
console.log('29 ===', [] && {} && [0]);//
console.log('30 ===', NaN || null || undefined || 0);//


// Задача 1
console.log(1 && 2 && null && 0);//

// Задача 2
console.log(1 || 0 || false || {});//

// Задача 3
console.log(null || 2 && 3 || 4);//

// Задача 4
console.log(null && undefined || false || "" || 0);//

// Задача 5
console.log({} && [] && true && 1);//


// Задача 6
console.log(Boolean([]));//
console.log(!![]);//
console.log([] == false);//
console.log(Boolean({}) == Boolean([]));//

// Задача 7
console.log("" || 2 || undefined);//
console.log(1 && null && 2);//

// Задача 8
console.log(null || 2 && 3 || 4);//


// Задача 9
console.log([] + false - null + true);//

// Задача 10
console.log([] + 1 + 2);//

// Задача 11
console.log("1" + 2 + 3);//
console.log(1 + 2 + "3");//


// Задача 12
console.log(2 > 1 > 1);//
console.log(null >= 0);//
console.log(null == 0);//

// Задача 13
console.log(undefined == null);//
console.log(undefined === null);//


// Задача 14
console.log([] == ![]); //

// Задача 15
console.log("" + 1 + 0);//
console.log("" - 1 + 0);//
console.log(true + false);//
console.log(6 / "3");//


// Задача 16
let value = null;
console.log(value ?? "default");//

// Задача 17
let height = 0;
console.log(height || 100);//
console.log(height ?? 100);//

// Задача 18
let user = {
    name: "John",
    age: 0
};
console.log(user.age ?? 18);//
console.log(user.height ?? 180);//

// Задача 19
console.log(true && false || true && true);//

// Задача 20
// console.log(null || undefined ?? "default");
