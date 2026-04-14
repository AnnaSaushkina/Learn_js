// Задача 1: Базовый декоратор

function wrapWithLogs(func) {
  return function (name) {
    console.log('До вызова');
    let result = func(name);
    console.log('После вызова');
    return result;
  };
}

function greet(name) {
  return `Привет, ${name}`;
}

greet = wrapWithLogs(greet);
console.log(greet('Иван'));

// Задача 2: Счетчик вызовов

function makeCounter(func) {
  function wrapper() {
    wrapper.callCount++;
    return func();
  }

  wrapper.callCount = 0;
  return wrapper;
}

function sayHi() {
  console.log('Hi!');
}

sayHi = makeCounter(sayHi);
sayHi();
sayHi();
sayHi();
console.log(sayHi.callCount);

// Задача 3: Передача контекста

let user = {
  name: 'Мария',
  greet(phrase) {
    return `${phrase}, меня зовут ${this.name}`;
  },
};

function addExclamation(func) {
  return function (phrase) {
    let result = func.call(this, phrase); // передаем this
    return result;
  };
}

user.greet = addExclamation(user.greet);
console.log(user.greet('Привет'));

// Задача 4: Множественные аргументы

function multiplyDecorator(func) {
  return function (...args) {
    // собираем все аргументы
    let result = func(...args); // передаем все аргументы
    return result * 2;
  };
}

function sum(a, b, c) {
  return a + b + c;
}

sum = multiplyDecorator(sum);
console.log(sum(1, 2, 3));

// Задача 5: Простой кеш

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x); // возвращаем из кеша
    }

    let result = func(x);
    cache.set(x, result); // сохраняем в кеш
    return result;
  };
}

function slow(x) {
  console.log(`Вычисления для ${x}`);
  return x * 2;
}

slow = cachingDecorator(slow);
slow(5);
slow(5);
slow(3);
