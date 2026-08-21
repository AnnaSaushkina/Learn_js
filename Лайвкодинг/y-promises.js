const { resolve } = require('node:dns');

// ════════════════════════════════════════════════════════
// СДЕЛАНО
// ════════════════════════════════════════════════════════

// Y1. sleep(ms)  [x] 20.08 · 15м
// Промис, который резолвится через ms миллисекунд.

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

// Y2. wait(ms, cb)  [x] 20.08 · 5м
// То же самое на колбэках, без промисов.

function wait(ms, cb) {
  return setTimeout(cb, ms);
}

// Y3. runParallel и runQueque  [x] 21.08 · 90м
// Три задачи с задержкой. Два запускателя: параллельный и последовательный.
// Замерить время каждого.

function delay(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, ms);
  });
}

const names = ['Аня', 'Кристина', 'Райан Гослинг'];

async function runParallel(delayCallback, delayMs, names) {
  const start = Date.now();

  const promises = names.map((name) => {
    return delayCallback(name, delayMs);
  });

  for (const promise of promises) {
    console.log(await promise);
  }
  const end = Date.now() - start;
  console.log('паралелльно: ', end, 'мс');
}

async function runQueque(delayCallback, delayMs, names) {
  const start = Date.now();

  for (const name of names) {
    await delayCallback(name, delayMs);
  }
  const end = Date.now() - start;
  console.log('последовательно: ', end, 'мс');
}

runParallel(delay, 1000, names);
runQueque(delay, 1000, names);

// M1. Промис, который падает  [x] 21.08 · 20м
// Написать промис, завершающийся ошибкой, и обработать её так,
// чтобы в консоль попал текст ошибки.

function m1() {
  new Promise((resolve, reject) => {
    reject(new Error('все сломалось'));
  }).catch((error) => {
    console.log('поймали ошибку: ' + error.message);
  });
}
// m1();

// M2. То же через async/await.  [x] 21.08 · 15м

async function m2() {
  try {
    throw new Error('все сломалось, но без обработки');
  } catch (error) {
    console.log('поймано', error.message);
  }
}
// m2();

// M3. Promise.all и падающий промис  [x] 21.08 · 40м
// Дождаться двух промисов одним вызовом, затем заменить второй на Promise.reject.

async function m3() {
  try {
    const result = await Promise.all([delay('Аня', 200), Promise.reject(new Error('500'))]);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
m3();

async function m4() {
  let result = await Promise.allSettled([
    delay('Кристина', 300),
    delay('Саня', 200),
    Promise.reject(new Error('500')),
  ]);
  console.log(result);
}
m4();
