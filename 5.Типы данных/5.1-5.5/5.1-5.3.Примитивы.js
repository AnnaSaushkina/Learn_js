'use strict';

/*
ЗАДАЧИ ПО МЕТОДАМ ПРИМИТИВОВ 
*/

// ------------------------------------------------------------
// 1) Свойство на строке
// Что выведет код и почему?
// ------------------------------------------------------------
function task1() {
  let str = 'Привет';
  str.test = 5;
  console.log(str.test);
  console.log(typeof str);

  // TODO:
  // 1. ошибка
  // 2. объекта str не сущесвует
}
task1();

// ------------------------------------------------------------
// 2) Свойство на числе
// Аналогичный вопрос для числа: что выведет и почему?
// ------------------------------------------------------------
function task2() {
  let n = 123;
  n.x = 10;
  console.log(n.x);

  // TODO:
  // 1. ошибка
  // 2. объекта n не существует. про создание временного объекта не понимаю
}
// task2();

// ------------------------------------------------------------
// 3) safeUpper(value)
// Требования:
// - если value — строка, вернуть value.toUpperCase()
// - если value — null или undefined, вернуть "нет значения"
// - иначе вернуть String(value).toUpperCase()
// ------------------------------------------------------------
function task3() {
  function safeUpper(value) {
    if (typeof value === 'string') {
      return value.toUpperCase();
    } else if (value === null || value === undefined) {
      return 'нет значения';
    } else return String(value).toUpperCase();
  }

  console.log("safeUpper('hi')        =", safeUpper('hi'));
  console.log('safeUpper(null)        =', safeUpper(null));
  console.log('safeUpper(undefined)   =', safeUpper(undefined));
  console.log('safeUpper(12.3)        =', safeUpper(12.3));
  console.log('safeUpper(false)       =', safeUpper(false));
}
// task3();

// ------------------------------------------------------------
// 4) Опасный Boolean-объект
// Объясни поведение и сделай два "правильных" варианта.
// ------------------------------------------------------------
function task4() {
  const flag = new Boolean(false);
  if (flag) console.log('зашёл (new Boolean(false))');
  let test;

  console.log(Boolean(test));

  // - if(flag) заходит внутрь потому что переменная непустая, поэтому true
  // - объект-Boolean отличается от примитива boolean тем что преобразует вводимое значение к булевому, а примитив это уже само значение.

  // Вариант А: использовать примитив, чтобы условие НЕ сработало
  const flagA = false;
  if (flagA) console.log('зашёл A');

  // Вариант B: явно получить примитив из объекта-обёртки
  const flagB = true;
  if (flagB) console.log('зашёл B');
}
// task4();

// ------------------------------------------------------------
// 5) isPrimitive(value)
// Требования:
// - вернуть true, если value — примитив
// - вернуть false, если это объект (включая обёртки)
// ------------------------------------------------------------
function task5() {
  function isPrimitive(value) {
    return value !== Object(value) ? true : false;
  }

  console.log("isPrimitive('x')              =", isPrimitive('x'));
  console.log('isPrimitive(1)                =', isPrimitive(1));
  console.log('isPrimitive(true)             =', isPrimitive(true));
  console.log("isPrimitive(Symbol('s'))      =", isPrimitive(Symbol('s')));
  console.log('isPrimitive(10n)              =', isPrimitive(10n));
  console.log('isPrimitive(null)             =', isPrimitive(null));
  console.log('isPrimitive(undefined)        =', isPrimitive(undefined));
  console.log('isPrimitive(new Number(1))    =', isPrimitive(new Number(1)));
  console.log("isPrimitive(Object('x'))      =", isPrimitive(Object('x')));
}
// task5();
