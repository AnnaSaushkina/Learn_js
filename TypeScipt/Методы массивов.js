// forEach
// Проходит по массиву и вызывает функцию для каждого существующего элемента; ничего не возвращает. 

function forEach(arr, fn, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) fn.call(thisArg, arr[i], i, arr);
  }
}


// map
// Создаёт новый массив той же длины и кладёт туда результат функции для каждого элемента.

function map(arr, fn, thisArg) {
  const res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) res[i] = fn.call(thisArg, arr[i], i, arr);
  }
  return res;
}


// filter
// Создаёт новый массив и добавляет туда только элементы, для которых функция вернула true 
const arr = []
function filter(arr, fn, thisArg) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      const result = arr[i];
      if (fn.call(thisArg, result, i, arr)) res.push(result);
    }
  }
  return res;
}


// reduce
// Сворачивает массив в одно значение: аккумулятор обновляется на каждом элементе. Если стартовое значение не передали и массив пустой — будет ошибка. 

function reduce(arr, fn, initialValue) {
  let i = 0;
  let acc;

  if (arguments.length >= 3) {
    acc = initialValue;
  } else {
    while (i < arr.length && !(i in arr)) i++;
    if (i >= arr.length) throw new TypeError("Reduce of empty array with no initial value");
    acc = arr[i];
    i++;
  }

  for (; i < arr.length; i++) {
    if (i in arr) acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}


// find и findIndex
// возвращает первый элемент, который подходит; findIndex его индекс (или -1 если не нашли).

function find(arr, predicate, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate.call(thisArg, arr[i], i, arr)) return arr[i];
  }
  return undefined;
}

function findIndex(arr, predicate, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate.call(thisArg, arr[i], i, arr)) return i;
  }
  return -1;
}


// some и every
// some есть ли хотя бы один подходящий элемент; everyподходят ли все. 

function some(arr, predicate, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && predicate.call(thisArg, arr[i], i, arr)) return true;
  }
  return false;
}

function every(arr, predicate, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && !predicate.call(thisArg, arr[i], i, arr)) return false;
  }
  return true;
}


// includes (и SameValueZero)
// includes проверяет, есть ли значение в массиве; особенность NaN тоже находится

function sameValueZero(a, b) {
  return a === b || (Number.isNaN(a) && Number.isNaN(b));
}

function includes(arr, search, fromIndex = 0) {
  const len = arr.length >>> 0;
  let i = fromIndex >= 0 ? fromIndex : Math.max(len + fromIndex, 0);

  for (; i < len; i++) {
    const v = (i in arr) ? arr[i] : undefined;
    if (sameValueZero(v, search)) return true;
  }
  return false;
}


// slice
// Возвращает новый массив копию части исходного (исходный массив не меняет). 

function slice(arr, start = 0, end = arr.length) {
  const len = arr.length >>> 0;

  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
  let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);

  const res = [];
  for (let i = s; i < e; i++) res.push((i in arr) ? arr[i] : undefined);
  return res;
}


// splice 
// Удаляет часть массива и  вставляет новые элементы; меняет исходный массив и возвращает удалённые элементы. 

function splice(arr, start, deleteCount, ...items) {
  const removed = arr.slice(start, start + deleteCount);
  const head = arr.slice(0, start);
  const tail = arr.slice(start + deleteCount);

  const next = head.concat(items, tail);

  arr.length = 0;
  for (const x of next) arr.push(x);

  return removed;
}


// join
// Склеивает элементы массива в строку через разделитель. 

function join(arr, sep = ",") {
  if (arr.length === 0) return "";

  let out = "";
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) out += String(sep);
    const v = (i in arr) ? arr[i] : undefined;
    out += v == null ? "" : String(v);
  }
  return out;
}


// sort 
// Сортирует массив; без функции сравнения сравнивает как строки. 

function sort(arr, compareFn) {
  const cmp = compareFn ?? ((a, b) => String(a).localeCompare(String(b)));

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (cmp(arr[j], arr[j + 1]) > 0) {
        const t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  return arr;
}


// reverse
// Разворачивает массив 

function reverse(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const lHas = l in arr;
    const rHas = r in arr;
    const lv = arr[l];
    const rv = arr[r];

    if (rHas) arr[l] = rv; else delete arr[l];
    if (lHas) arr[r] = lv; else delete arr[r];

    l++;
    r--;
  }
  return arr;
}

