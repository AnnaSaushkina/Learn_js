// node Лайвкодинг/x-quickwins.js

// 1. once(fn)
// Вызывает fn только при первом обращении. Дальше отдаёт результат первого вызова.

function once(fn) {
  let isCalled;
  let firstResult;

  return function result(...args) {
    if (isCalled) return firstResult;
    isCalled = true;
    firstResult = fn.apply(this, args);

    return firstResult;
  };
}

const init = once((x) => {
  console.log('РАБОТАЮ');
  return x * 2;
});
console.log(init(5));
console.log(init(9));
console.log(init(1));

// 2. createCounter()
// Возвращает функцию. Каждый вызов увеличивает счётчик на 1 и отдаёт значение.
// Два счётчика независимы.

function createCounter() {
  let counter = 1;

  return function count() {
    return counter++;
  };
}

const a = createCounter();
const b = createCounter();
console.log(a(), a(), a());
console.log(b());

// 3. add(2)(3) === 5
// Принимает первое число и возвращает функцию, принимающую второе.

function add(firstNum) {
  return function result(secondNum) {
    return firstNum + secondNum;
  };
}

console.log(add(2)(3));
console.log(add(10)(-4));

// 4. memoize(fn)
// Кэширует результат по аргументам. Повторный вызов с теми же аргументами
// не вызывает fn заново.

function memoize(fn) {
  const cache = new Map();

  return function memo(...arg) {
    let key = JSON.stringify(arg);

    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = fn.apply(this, arg);
    cache.set(key, result);
    return result;
  };
}

function fibRec(n) {
  if (n <= 1) return n;
  return fibRec(n - 1) + fibRec(n - 2);
}

const test = memoize(fibRec);
test(5);
test(5);
test(10);
