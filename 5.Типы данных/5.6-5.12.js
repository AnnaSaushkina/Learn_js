// Задача 1 — Подсчёт посещений страницы (Map)

function countVisits(pages) {
  const counts = new Map();

  for (const page of pages) {
    const current = counts.get(page) || 0;
    counts.set(page, current + 1);
  }

  return counts;
}

const pages = ['home', 'about', 'home', 'cart', 'home', 'about'];
// console.log(countVisits(pages));

// ### Задача 2 — Напиши функцию `getUniqueUsers(logins)`, которая:
// - принимает массив логинов, где один пользователь может встречаться много раз:
// - возвращает **массив уникальных логинов** с помощью `Set`

const logins = ['ann', 'bob', 'ann', 'kate', 'bob'];

function getUniqueUsers(array) {
  return [...new Set(array)];
}

// console.log(getUniqueUsers(logins));

// ### Задача 3 — Хранение “метаданных” для объектов (WeakMap)
// Создай `WeakMap`, в которой:
// - ключ — объект пользователя `user`,
// - значение — дата последнего логина, например `new Date()`.

// Напиши две функции:
// - `setLastLogin(user)` — кладёт/обновляет запись в `WeakMap`;
// - `getLastLogin(user)` — возвращает дату или `null`, если записи нет.

const lastLoginMap = new WeakMap();

function setLastLogin(user) {
  lastLoginMap.set(user, new Date());
}

function getLastLogin(user) {
  return lastLoginMap.get(user) ?? null;
}

const user2 = { name: 'Kristina' };

// console.log(getLastLogin(user2));
// setLastLogin(user2);
// console.log(getLastLogin(user2));

// ### Задача 4 — Множество только объектов (WeakSet)

// Сделай `WeakSet` `visitedUsers` и функцию:

// - `markVisited(user)` — помечает пользователя как “зашёл на страницу”;
// - `isVisited(user)` — возвращает `true/false`, был ли пользователь помечен.

const visitedUsers = new WeakSet();

function markVisited(user) {
  visitedUsers.add(user);
}

function isVisited(user) {
  return visitedUsers.has(user);
}

// const user3 = { name: 'Ivan' };
// console.log(isVisited(user3));
// markVisited(user3);
// console.log(isVisited(user3));

// ### Задача 5 — Преобразовать объект в массив пар

const user = {
  name: 'Ann',
  age: 25,
  city: 'Moscow',
};

function toPairs(obj) {
  const result = Object.entries(obj);
  console.log(result);
}
// toPairs(user);

// ### Задача 6 — Сумма значений объекта

const salaries = {
  ann: 1000,
  bob: 1500,
  kate: 1300,
};

function sumSalaries(obj) {
  const result = Object.values(obj).reduce((el) => el + el);
  console.log(result);
}
sumSalaries(salaries);

// есть объекты пользователей, надо хранить для них секретные данные, которые автоматически очищаются, когда пользователь больше не нужен
