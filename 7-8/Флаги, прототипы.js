// ЗАДАЧА 1
let animal = { jumps: null };
let rabbit = { __proto__: animal, jumps: true };

console.log(rabbit.jumps); // true есть в самом rabbit
delete rabbit.jumps;
console.log(rabbit.jumps); // null берется из animal
delete animal.jumps;
console.log(rabbit.jumps); // undefined нигде нет

// ЗАДАЧА 2
let head = { glasses: 1 };
let table = { pen: 3, __proto__: head };
let bed = { sheet: 1, pillow: 2, __proto__: table };
let pockets = { money: 2000, __proto__: bed };

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1

// ЗАДАЧА 3
let animal2 = {
  eat() {
    this.full = true;
  },
};
let rabbit2 = { __proto__: animal2 };
rabbit2.eat();

console.log(rabbit2.full); // true свойство записалось в rabbit2
console.log(animal2.full); // undefined animal2 остается

// ЗАДАЧА 4
let hamster = {
  eat(food) {
    this.stomach = this.stomach ? [...this.stomach, food] : [food];
  },
};
let speedy = { __proto__: hamster };
let lazy = { __proto__: hamster };

speedy.eat('apple');
console.log(speedy.stomach); // ['apple']
console.log(lazy.stomach); // undefined у lazy свой желудок не создавался

// ЗАДАЧА 5
function User(name, birthday) {
  this.name = name;

  Object.defineProperty(this, 'birthday', {
    value: birthday,
    writable: false,
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(this, 'age', {
    get() {
      return new Date().getFullYear() - this.birthday.getFullYear();
    },
    enumerable: true,
    configurable: false,
  });
}

const john = new User('John', new Date(1992, 6, 1));
console.log(john.age); // 33
console.log(john.birthday); // 1992-07-01
john.birthday = new Date(); // writable false
console.log(john.birthday); // все еще 1992-07-01
