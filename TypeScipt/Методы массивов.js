// forEach
// Идёт по массиву и просто запускает функцию для каждого элемента

function forEach(array, action, thisArg) {
  for (let index = 0; index < array.length; index++) {
    if (index in array) action.call(thisArg, array[index], index, array);
  }
}


// map
// Идёт по массиву и складывает результаты работы функции в новый массив

function map(array, transform, thisArg) {
  const result = new Array(array.length);

  for (let index = 0; index < array.length; index++) {
    if (index in array) result[index] = transform.call(thisArg, array[index], index, array);
  }

  return result;
}

// filter
// Идёт по массиву и складывает в новый массив только то, что прошло проверку
function filter(array, check, thisArg) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (!(index in array)) continue;

    const value = array[index];
    if (check.call(thisArg, value, index, array)) result.push(value);
  }

  return result;
}

// reduce
// Собирает массив в одно значение (например, сумма всех чисел). Если стартовое значение не дали и массив пустой будет ошибка

function reduce(array, combine, startValue) {
  let index = 0;
  let total;

  if (arguments.length >= 3) {
    total = startValue;
  } else {
    while (index < array.length && !(index in array)) index++;
    if (index >= array.length) throw new TypeError("Нельзя reduce для пустого массива без стартового значения");
    total = array[index];
    index++;
  }

  for (; index < array.length; index++) {
    if (index in array) total = combine(total, array[index], index, array);
  }

  return total;
}


// find и findIndex
// find ищет первый подходящий элемент, а findIndex  его индекс; если не нашли, find вернёт undefined

function find(array, check, thisArg) {
  for (let index = 0; index < array.length; index++) {
    if (index in array && check.call(thisArg, array[index], index, array)) return array[index];
  }
  return undefined;
}

function findIndex(array, check, thisArg) {
  for (let index = 0; index < array.length; index++) {
    if (index in array && check.call(thisArg, array[index], index, array)) return index;
  }
  return -1;
}


// some и every
// some: подходит хотя бы один? every: подходят все?

function some(array, check, thisArg) {
  for (let index = 0; index < array.length; index++) {
    if (index in array && check.call(thisArg, array[index], index, array)) return true;
  }
  return false;
}

function every(array, check, thisArg) {
  for (let index = 0; index < array.length; index++) {
    if (index in array && !check.call(thisArg, array[index], index, array)) return false;
  }
  return true;
}

// includes (и SameValueZero)
// includes проверяет, есть ли такое значение в массиве; NaN тоже считается нашлось.

function sameValueZero(a, b) {
  return a === b || (Number.isNaN(a) && Number.isNaN(b));
}

function includes(array, wanted, fromIndex = 0) {
  const length = array.length >>> 0;
  let index = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);

  for (; index < length; index++) {
    const value = (index in array) ? array[index] : undefined;
    if (sameValueZero(value, wanted)) return true;
  }

  return false;
}


// slice
// Возвращает новый массив: кусочек исходного 

function slice(array, from = 0, to = array.length) {
  const length = array.length >>> 0;

  const start = from < 0 ? Math.max(length + from, 0) : Math.min(from, length);
  const end = to < 0 ? Math.max(length + to, 0) : Math.min(to, length);

  const result = [];
  for (let index = start; index < end; index++) {
    result.push((index in array) ? array[index] : undefined);
  }

  return result;
}


// splice 
// Удаляет кусок массива и (если надо) вставляет новые элементы; сам массив меняется.

function splice(array, start, deleteCount, ...items) {
  const removed = array.slice(start, start + deleteCount);
  const left = array.slice(0, start);
  const right = array.slice(start + deleteCount);

  const next = left.concat(items, right);

  array.length = 0;
  for (const value of next) array.push(value);

  return removed;
}

// join
// Склеивает элементы массива в одну строку. 

function join(array, separator = ",") {
  if (array.length === 0) return "";

  let text = "";
  for (let index = 0; index < array.length; index++) {
    if (index > 0) text += String(separator);
    const value = (index in array) ? array[index] : undefined;
    text += value == null ? "" : String(value);
  }

  return text;
}


// sort 
// Сортирует массив на месте; если не дать сравнение  сортирует как строки 

function sort(array, compare) {
  const compareValues = compare ?? ((a, b) => String(a).localeCompare(String(b)));

  for (let pass = 0; pass < array.length - 1; pass++) {
    for (let index = 0; index < array.length - 1 - pass; index++) {
      if (compareValues(array[index], array[index + 1]) > 0) {
        const temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
      }
    }
  }

  return array;
}


// reverse
// Разворачивает массив 

function reverse(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const leftExists = left in array;
    const rightExists = right in array;

    const leftValue = array[left];
    const rightValue = array[right];

    if (rightExists) array[left] = rightValue; else delete array[left];
    if (leftExists) array[right] = leftValue; else delete array[right];

    left++;
    right--;
  }

  return array;
}

