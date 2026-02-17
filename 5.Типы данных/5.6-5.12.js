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

const user3 = { name: 'Ivan' };
console.log(isVisited(user3));
markVisited(user3);
console.log(isVisited(user3));

// ### Задача 5 — Преобразовать объект в массив пар

// **Цель:** потренироваться в `Object.entries`.

// Есть объект:

// const user = {
//   name: 'Ann',
//   age: 25,
//   city: 'Moscow',
// };

// Напиши функцию `toPairs(obj)`, которая:

// - возвращает массив вида:

//   [
//     ['name', 'Ann'],
//     ['age', 25],
//     ['city', 'Moscow'],
//   ];

// - использует `Object.entries`.

// ### Задача 6 — Сумма значений объекта

// **Цель:** потренироваться в `Object.values`.

// Есть объект:
// const salaries = {
//   ann: 1000,
//   bob: 1500,
//   kate: 1300,
// };

// Напиши функцию `sumSalaries(obj)`, которая возвращает сумму всех зарплат.

// ## 4. Деструктурирующее присваивание

// ### Задача 7 — Деструктурировать настройки

// **Цель:** потрогать деструктуризацию объекта с дефолтами.

// Есть функция `initSlider(options)`, которая ожидает объект:

// // options:
// // {
// //   speed: number (по умолчанию 300),
// //   autoPlay: boolean (по умолчанию false),
// //   delay: number (по умолчанию 5000)
// // }

// Сделай внутри деструктуризацию:

// const { speed = 300, autoPlay = false, delay = 5000 } = options;

// и выведи эти значения. А вызовы, например:

// initSlider({ speed: 1000 });
// initSlider({ autoPlay: true, delay: 2000 });

// ### Задача 9 — Поменять элементы местами через деструктуризацию

// **Цель:** применить деструктуризацию массива.

// Напиши функцию `swapFirstTwo(arr)`, которая:

// - принимает массив из минимум двух элементов,
// - меняет местами первые два элемента **через деструктуризацию**, а не через временную переменную.

// ## 5. Date

// ### Задача 10 — Вычислить возраст по дате рождения

// **Цель:** потрогать `Date`, `getFullYear`.

// Напиши функцию `getAge(birthDateString)`, которая:

// - принимает строку вида `"1995-06-10"`,
// - создаёт `Date` из неё,
// - по текущей дате считает возраст (в годах, округляя вниз).

// ### Задача 11 — Сколько дней осталось до даты

// **Цель:** поработать с разницей дат.

// Напиши функцию `daysUntil(dateString)`, которая:

// - принимает дату в будущем `"2026-12-31"`,
// - возвращает целое число дней до неё от “сегодня”.

// ## 6. JSON и toJSON

// ### Задача 12 — Сериализация и восстановление

// **Цель:** потрогать `JSON.stringify` и `JSON.parse`.

// Напиши функции:

// - `saveUser(user)` — принимает объект `user` и возвращает строку JSON;
// - `loadUser(json)` — принимает строку JSON и возвращает объект.

// Потренируйся с вложенными объектами, не только плоскими.

// ### Задача 13 — Кастомный `toJSON`

// **Цель:** понять, как `toJSON` влияет на `JSON.stringify`.

// Создай объект:

// const user = {
//   name: 'Ann',
//   password: 'secret',
//   toJSON() {
//     // тут нужно вернуть объект без пароля
//   },
// };

// Сделай так, чтобы `JSON.stringify(user)` **не включал пароль**, а только безопасные поля (например, `name`).
