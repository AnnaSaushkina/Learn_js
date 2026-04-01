// ЗАДАЧА 1: Учитывает ли функция последние изменения?
let name = 'John';

function sayHi() {
  console.log('Hi, ' + name);
}
name = 'Pete';
sayHi(); //  функция берет переменную в момент вызова,
// а не в момент создания. name уже Pete

// ЗАДАЧА 2: Какие переменные доступны?
function makeWorker() {
  let name = 'Pete';
  return function () {
    console.log(name); // замкнулась на name из makeWorker
  };
}

let name2 = 'John';
let work = makeWorker();
work(); //  функция помнит окружение места создания, не места вызова

// ЗАДАЧА 3: Независимы ли счетчики?
function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter(); // свое лексическое окружение со своим count
let counter2 = makeCounter(); // свое лексическое окружение со своим count

counter(); // 0
counter(); // 1
counter2(); // 0 независимы. Каждый вызов makeCounter() создает новое окружение
counter2(); // 1

// ЗАДАЧА 4: Объект счетчика
function Counter() {
  let count = 0; // одна переменная, общая для up и down

  this.up = function () {
    return ++count; // увеличивает общий count
  };
  this.down = function () {
    return --count; // уменьшает общий count
  };
}

let counter3 = new Counter();
counter3.up(); // 1
counter3.up(); // 2
counter3.down(); // 1 - оба метода замкнуты на один и тот же count

// ЗАДАЧА 5: Функция внутри if
('use strict');

let phrase = 'Hello';

if (true) {
  let user = 'John';
  function sayHi2() {
    console.log(`${phrase}, ${user}`);
  }
}

// sayHi2(); // ошибка
// В строгом режиме функция внутри блока {} видна только внутри блока
// user тоже не видна снаружи (let - блочная)

// ЗАДАЧА 6: Сумма с помощью замыканий - sum(a)(b)
function sum(a) {
  return function (b) {
    // замыкание: внутренняя функция помнит a
    return a + b;
  };
}

sum(1)(2); // 3
sum(5)(-1); // 4

// Как это работает:
// sum(1)  возвращает function(b) { return 1 + b }
// (2)  вызывает эту функцию с b=2  1+2 = 3

// ЗАДАЧА 7: Видна ли переменная?
function func() {
  console.log(x); // ошибка!
  let x = 2;
}
// func();

// Почему? let x поднимается в начало блока,
// но остается в мертвой зоне до строки объявления.
// JS знает что x есть, но обращаться нельзя - это ошибка.

// ЗАДАЧА 8: inBetween и inArray - фильтры через замыкание

function inBetween(a, b) {
  return function (x) {
    // замыкание: помним a и b
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    // замыкание
    return arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.filter(inBetween(3, 6)); // [3, 4, 5, 6]
arr.filter(inArray([1, 2, 10])); // [1, 2]

// ЗАДАЧА 9: Сортировка по полю через замыкание

function byField(field) {
  return function (a, b) {
    // замыкание
    return a[field] > b[field] ? 1 : -1;
  };
}

let users = [
  { name: 'Иван', age: 20 },
  { name: 'Петр', age: 18 },
  { name: 'Анна', age: 19 },
];

users.sort(byField('name')); // [Анна, Иван, Петр]
users.sort(byField('age')); // [Петр, Анна, Иван]

// ЗАДАЧА 10: Армия функций

// сломанная версия:
function makeArmyBroken() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
    i++;
  }
  return shooters; // когда вызовем - i уже = 10, поэтому все выводят 10
}

// исправление 1 - let в for (создает новый i на каждой итерации):
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    // let  каждая итерация = свое окружение со своим i
    shooters.push(function () {
      console.log(i); // каждый замкнут на свой i
    });
  }

  return shooters;
}

let army = makeArmy();
army[0](); // 0
army[5](); // 5

// исправление 2 - создать новую переменную вручную:
function makeArmy2() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let j = i; // новая переменная на каждой итерации = свое замыкание
    shooters.push(function () {
      console.log(j);
    });
    i++;
  }
  return shooters;
}
