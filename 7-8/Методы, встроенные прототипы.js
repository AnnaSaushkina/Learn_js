// ЗАДАЧА 1: Работа с прототипами
let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps);
delete rabbit.jumps;
console.log(rabbit.jumps);
delete animal.jumps;
console.log(rabbit.jumps);

// true, null, undefined

// ЗАДАЧА 2: Алгоритм поиска
let head = { glasses: 1 };
let table = { pen: 3 };
let bed = { sheet: 1, pillow: 2 };
let pockets = { money: 2000 };

// Выстраиваем цепочку: pockets - bed - table - head
pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1

// head.glasses быстрее - прямой доступ из 0 шагов
// pockets.glasses медленнее - цепочка из 3 шагов
console.log(head.glasses); // быстрее
console.log(pockets.glasses); // медленнее

// ЗАДАЧА 3: Куда будет произведена запись?
let animal3 = {
  eat() {
    this.full = true; // this = rabbit
  },
};

let rabbit3 = {
  __proto__: animal3,
};

rabbit3.eat();
console.log(rabbit3.full); // true
console.log(animal3.full); // undefined

// ЗАДАЧА 4: Почему наедаются оба хомяка?

let hamster = {
  stomach: [], // проблема - общий массив для всех хомяков
  eat(food) {
    this.stomach.push(food); // this.stomach ищется в прототипе
  },
};

let speedy = { __proto__: hamster };
let lazy = { __proto__: hamster };

speedy.eat('apple');
console.log(speedy.stomach); // ['apple']
console.log(lazy.stomach); // ['apple']  едят из одного желудка

// решение 1: Дать каждому свой желудок
let hamster2 = {
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy2 = {
  __proto__: hamster2,
  stomach: [], // свой желудок
};

let lazy2 = {
  __proto__: hamster2,
  stomach: [], // свой желудок
};

speedy2.eat('apple');
console.log(speedy2.stomach); // ['apple']
console.log(lazy2.stomach); // []

// решение 2: Через конструктор
function Hamster(name) {
  this.name = name;
  this.stomach = []; // каждому свой желудок
}

Hamster.prototype.eat = function (food) {
  this.stomach.push(food);
};

let speedy3 = new Hamster('Speedy');
let lazy3 = new Hamster('Lazy');

speedy3.eat('apple');

// F.PROTOTYPE
// ЗАДАЧА 5: Изменяем prototype
function Rabbit() {}
Rabbit.prototype = { eats: true };

let rabbit5 = new Rabbit();

// изменен Rabbit.prototype после создания
Rabbit.prototype = {};
console.log(rabbit5.eats); // true
// изменено свойство в прототипе
Rabbit.prototype = { eats: true };
let rabbit5b = new Rabbit();
Rabbit.prototype.eats = false;
console.log(rabbit5b.eats); // false

// удалено свойство из rabbit
Rabbit.prototype = { eats: true };
let rabbit5c = new Rabbit();
delete rabbit5c.eats;
console.log(rabbit5c.eats); // true

// удалено свойство из прототипа
Rabbit.prototype = { eats: true };
let rabbit5d = new Rabbit();
delete Rabbit.prototype.eats;
console.log(rabbit5d.eats); // undefined

// ЗАДАЧА 6: Создайте новый объект с помощью уже существующего
// сохранение конструктора:
function User(name) {
  this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');
console.log(user2.name); // Pete - работает

// потеря конструктора
function User2(name) {
  this.name = name;
}
User2.prototype = {}; // потеряли конструктор

let user3 = new User2('John');
let user4 = new user3.constructor('Pete'); // конструктор = Object
console.log(user4.name); // undefined - не работает

// НАТИВНЫЕ ПРОТОТИПЫ
// ЗАДАЧА 7: Добавить функциям метод f.defer(ms)
Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f7() {
  console.log('Hello');
}

f7.defer(1000); // выведет Hello через 1 секунду

// ЗАДАЧА 8: Добавьте функциям декорирующий метод defer()
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f8(a, b) {
  console.log(a + b);
}

f8.defer(1000)(1, 2); // выведет 3 через 1 секунду

// МЕТОДЫ ПРОТОТИПОВ
// ЗАДАЧА 9: Добавьте toString в словарь
let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
  value: function () {
    return Object.keys(this).join(',');
  },
  enumerable: false, // не показывать в for in
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
  console.log(key); // apple, __proto__
}

console.log(dictionary.toString()); // apple, __proto__

// ЗАДАЧА 10: Разница между вызовами
function Rabbit10(name) {
  this.name = name;
}
Rabbit10.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit10 = new Rabbit10('Rabbit');

rabbit10.sayHi(); // Rabbit
Rabbit10.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit10).sayHi(); // undefined
rabbit10.__proto__.sayHi(); // undefined
