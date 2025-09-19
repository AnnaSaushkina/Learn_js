// Задача 1: Что выведет этот код?
// Что выведет код ниже?
console.log(undefined ?? NaN ?? null ?? '' ?? ' '); // NaN

// Задача 2: Какой будет результат выполнения этого кода?
// Что будет выведено в итоге?

let city = null;

city ??= 'Берлин';
city ??= null;
city ??= 'Кёльн';
city ??= 'Гамбург';

console.log(city); //"Берлин"

// Задача 3: Перепишите код используя операторы ??, ??=
// Перепишите этот код используя операторы нулевого слияния и присваивания.

let num1 = 10,
  num2 = 20,
  result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

// Задача 4: Проверка значений

// Создайте функцию getValue, которая принимает два параметра: value1 и value2. Функция должна возвращать value1, если оно не равно null или undefined, в противном случае возвращать value2.

function getValue(value1, value2) {
  if (value1 != null ?? undefined) {
    return value1
  } else return value2
}

// Примеры вызова функции
console.log(getValue(null, 'default')); // "default"
console.log(getValue(undefined, 'default')); // "default"
console.log(getValue('Hello', 'default')); // "Hello"

// ▎Задача 5: Установка значений по умолчанию

// Напишите функцию setDefault, которая принимает объект и устанавливает значение по умолчанию для свойства name. Если name отсутствует или равно null, то оно должно быть установлено в "Anonymous".

function setDefault(obj) {
  if (obj != "" ?? null) { 
    return obj.name ??= "Anonymous" 
   }
  else return obj.name
}

// Примеры вызова функции
let user1 = { name: null };
let user2 = { name: 'Alice' };

setDefault(user1);
setDefault(user2);

console.log(user1.name); // "Anonymous"
console.log(user2.name); // "Alice"
