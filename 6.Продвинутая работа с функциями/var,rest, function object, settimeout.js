// ============================================================
// 1. VAR
// ============================================================
// - var не имеет блочной области видимости (только функциональная)
// - var допускает повторное объявление
// - var "всплывает" (hoisting) в начало функции — объявление, но не значение
// - IIFE — паттерн для эмуляции блочной видимости в старом коде: (function(){})()

// Задача: что выведет этот код и почему?
function task1() {
  console.log(phrase); // ?
  var phrase = 'Привет';
  console.log(phrase); // ?
}
task1();

// Задача: что выведет?
for (var i = 0; i < 3; i++) {}
console.log(i); // ?

// Задача: что выведет?
if (true) {
  var test = true;
}
console.log(test); // ?

// ============================================================
// 2. ОБЪЕКТ ФУНКЦИИ, NFE
// ============================================================
// - Функция — это объект
// - func.name — имя функции
// - func.length — количество параметров (rest не считается)
// - Можно добавлять свои свойства: func.counter = 0
// - NFE (Named Function Expression) — имя доступно только внутри функции

// Задача: доработай makeCounter — добавь методы set и decrease
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  // TODO: добавь counter.set(value) — устанавливает значение
  // TODO: добавь counter.decrease() — уменьшает на 1

  return counter;
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
// counter.set(10);
// console.log(counter()); // 10
// counter.decrease();
// console.log(counter()); // 10 (уменьшился до 10, потом увеличился)

// Задача: напиши функцию sum с произвольным количеством скобок
// sum(1)(2) == 3
// sum(1)(2)(3) == 6
// sum(5)(-1)(2) == 6
function sum(a) {
  // TODO
}
// console.log(sum(1)(2) == 3); // true
// console.log(sum(1)(2)(3) == 6); // true

// ============================================================
// 3. SETTIMEOUT / SETINTERVAL
// ============================================================
// - setTimeout(func, delay) — вызвать один раз через delay мс
// - setInterval(func, delay) — вызывать каждые delay мс
// - clearTimeout(id) / clearInterval(id) — отмена
// - setTimeout(func, 0) — выполнить после текущего кода
// - Вложенный setTimeout точнее setInterval по задержке
// - НЕ передавай func() со скобками — передавай ссылку func

// Задача: что выведет код?
let i = 0;
setTimeout(() => console.log('setTimeout i =', i), 0);
for (let j = 0; j < 1000000; j++) {
  i++;
}
console.log('sync i =', i);

// Задача: напиши printNumbers(from, to) двумя способами
// Вариант 1 — через setInterval
function printNumbersInterval(from, to) {
  // TODO
}

// Вариант 2 — через рекурсивный setTimeout
function printNumbersTimeout(from, to) {
  // TODO
}

// printNumbersInterval(1, 5);
// printNumbersTimeout(1, 5);

// ============================================================
// 4. REST ПАРАМЕТРЫ И SPREAD ОПЕРАТОР
// ============================================================
// - ...rest в параметрах функции — собирает остаток в массив
// - ...spread при вызове — разворачивает массив в аргументы
// - rest должен быть последним параметром
// - arguments — псевдомассив, устарел, нет в стрелочных функциях
// - Array.from работает и с псевдомассивами, spread — только с итерируемыми

// Задача: напиши функцию sumAll которая принимает любое кол-во чисел
function sumAll(...args) {
  // TODO
}
// console.log(sumAll(1, 2, 3)); // 6
// console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Задача: найди максимум в массиве через spread
const arr = [3, 1, 7, 2, 9, 4];
// const max = ? // используй Math.max и spread
// console.log(max); // 9

// Задача: объедини два массива через spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const merged = ? // без concat, через spread
// console.log(merged); // [1, 2, 3, 4, 5, 6]

// ============================================================
// 5. СТРЕЛОЧНЫЕ ФУНКЦИИ
// ============================================================
// - Нет своего this — берёт из внешнего контекста
// - Нет arguments
// - Нельзя использовать с new
// - Нет super
// - Подходят для коллбэков где нужен внешний this

// Задача: что выведет?
const group = {
  title: 'Группа',
  students: ['Аня', 'Паша'],
  showList() {
    this.students.forEach((student) => {
      console.log(this.title + ': ' + student); // ?
    });
  },
};
group.showList();

// Задача: что выведет и почему?
const group2 = {
  title: 'Группа 2',
  students: ['Аня', 'Паша'],
  showList() {
    this.students.forEach(function (student) {
      console.log(this.title + ': ' + student); // ?
    });
  },
};
// group2.showList(); // раскомментируй и объясни ошибку

// ============================================================
// БОНУС: задача из нашего Task Board
// ============================================================
const tasks = [
  { id: '1', title: 'Починить баг', assignee: 'Аня', priority: 'high' },
  { id: '2', title: 'Написать тесты', assignee: 'Паша', priority: 'low' },
  { id: '3', title: 'Ревью PR', assignee: 'Аня', priority: 'medium' },
  { id: '4', title: 'Деплой', assignee: 'Олег', priority: 'high' },
  { id: '5', title: 'Документация', assignee: 'Паша', priority: 'low' },
];

// Задача 1: сгруппируй задачи по исполнителю через Map
function groupByAssignee(tasks) {
  // TODO
}
// console.log(groupByAssignee(tasks));

// Задача 2: получи уникальных исполнителей через Set
// const uniqueAssignees = ?
// console.log(uniqueAssignees); // ["Аня", "Паша", "Олег"]

// Задача 3: найди все задачи с high приоритетом через filter + rest
function getHighPriority(tasks, ...priorities) {
  // TODO — верни задачи у которых priority входит в ...priorities
}
// console.log(getHighPriority(tasks, "high")); // 2 задачи
// console.log(getHighPriority(tasks, "high", "medium")); // 3 задачи
