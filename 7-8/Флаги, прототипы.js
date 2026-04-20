//  ЗАДАЧА 1. Что выведет код?

let animal = { jumps: null };
let rabbit = { __proto__: animal, jumps: true };

console.log(rabbit.jumps); // ? → напиши ответ
delete rabbit.jumps;
console.log(rabbit.jumps); // ? → напиши ответ
delete animal.jumps;
console.log(rabbit.jumps); // ? → напиши ответ

// ЗАДАЧА 2. Выстрой цепочку прототипов

let head = { glasses: 1 };
let table = { pen: 3 };
let bed = { sheet: 1, pillow: 2 };
let pockets = { money: 2000 };

// TODO: расставь __proto__ чтобы цепочка работала
// ...

console.log(pockets.pen); // должно быть 3
console.log(bed.glasses); // должно быть 1

// Вопрос: pockets.glasses или head.glasses — что быстрее?

// ЗАДАЧА 3. Куда запишется свойство?
let animal2 = {
  eat() {
    this.full = true;
  },
};

let rabbit2 = { __proto__: animal2 };

rabbit2.eat();

// TODO: раскомментируй и проверь — где появилось свойство full?
// console.log(rabbit2.full);  // ?
// console.log(animal2.full);  // ?

// ЗАДАЧА 4. Почему наедаются оба хомяка? Исправь.

let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food); // <-- проблема здесь
  },
};

let speedy = { __proto__: hamster };
let lazy = { __proto__: hamster };

speedy.eat('apple');
console.log(speedy.stomach); // ["apple"]
console.log(lazy.stomach); // ["apple"] ← BUG: не должно быть!

// TODO: исправь hamster.eat так, чтобы желудки были раздельными

// ЗАДАЧА 5*. Геттер + флаги
// Создай объект user с полями name и birthday (Date).
// Добавь геттер age, который считает возраст автоматически.
// Сделай birthday неизменяемым (writable: false).

function User(name, birthday) {
  this.name = name;

  // TODO: сохрани birthday как writable: false
  Object.defineProperty(this, 'birthday', {
    value: birthday,
    // ...допиши флаги
  });

  // TODO: добавь геттер age
  Object.defineProperty(this, 'age', {
    get() {
      // возраст = текущий год - год рождения
    },
    enumerable: true,
    configurable: false,
  });
}

const john = new User('John', new Date(1992, 6, 1));
console.log(john.age);
console.log(john.birthday);
john.birthday = new Date();
console.log(john.birthday);
