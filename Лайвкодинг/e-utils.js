// node Лайвкодинг/e-utils.js

// E1. debounce(fn, delay)
// Вызов откладывается на delay. Каждый новый вызов сбрасывает отсчёт.
// Срабатывает один раз после паузы.

function debounce(myFn, delay) {
  let counterId;

  return function (...args) {
    clearTimeout(counterId);

    counterId = setTimeout(() => {
      myFn.apply(this, args);
    }, delay);
  };
}

const log = debounce((x) => console.log(x), 300);
log(1);
log(2);
log(3);

// E2. throttle(fn, delay)
// Первый вызов проходит сразу. Дальше вызовы игнорируются, пока не пройдёт delay.

function throttle(fn, delay) {
  let isWaiting;

  return function (...args) {
    if (isWaiting) return;
    isWaiting = true;
    fn.apply(this, args);
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
}

const t = throttle((x) => console.log(x), 3000);
t(1);
t(2);
t(3);
