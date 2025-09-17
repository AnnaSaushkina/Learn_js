/* -------------------- Задача 1 -------------------- */
/**
 * Возвращает число, составленное из цифр входного числа, отсортированных в убывающем порядке.
 *
 * @param {number} numbers - Число, цифры которого нужно отсортировать.
 * @returns {number} Число, состоящее из цифр входного числа, отсортированных в убывающем порядке.
 */
const descendingOrder = (numbers) => {
  return +numbers
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
};

console.log(descendingOrder(42145) === 54421); // true
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321

/* -------------------- Задача 2 -------------------- */
/**
 * Находит наибольшее и наименьшее числа в строке, разделённой пробелами.
 *
 * @param {string} numbers - Строка чисел, разделённых пробелами.
 * @returns {string} Строка, содержащая наибольшее и наименьшее число: "max min".
 */
const highAndLow = (numbers) => {
  const sortNums = numbers.split(' ').sort((a, b) => b - a);
  return `${sortNums[0]} ${sortNums[sortNums.length - 1]}`;
};

console.log(highAndLow('1 2 3 4 5')); // return "5 1"
console.log(highAndLow('1 2 -3 4 5')); // return "5 -3"
console.log(highAndLow('1 9 3 4 -5')); // return "9 -5"

/* -------------------- Задача 3 -------------------- */
/**
 * Возвращает максимальное значение, которое можно получить, переставив цифры в числе.
 *
 * @param {number} number - Число, из цифр которого нужно получить максимальное значение.
 * @returns {number} Максимальное значение, составленное из цифр числа.
 */
const getNumMax = (number) => {
  return +number
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
};

console.log(getNumMax(12)); // 21
console.log(getNumMax(111111119)); // 911111111
console.log(getNumMax(1798)); // 9871

/* -------------------- Задача 4 -------------------- */
/**
 * Добавляет метод last к массиву, который возвращает последний элемент массива,
 * или -1, если массив пуст.
 *
 * @returns {number} Последний элемент массива, или -1, если массив пуст.
 */
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

console.log([].last()); // -1
console.log([1].last()); // 1
console.log([1, 2, 3].last()); // 3

/* -------------------- Задача 5 -------------------- */
/**
 * Возвращает массив чисел, кратных заданному числу.
 *
 * @param {number} number - Число, к которому должны быть кратны элементы массива.
 * @param {number} length - Длина массива, который нужно вернуть.
 * @returns {number[]} Массив чисел, кратных number, длиной length.
 */
const arrayOfMultiples = (number, length) => {
  const result = [];
  for (let i = 1; i <= length; i++) {
    result.push(number * i);
  }

  return result;
  return Array.from({ length }, (_, i) => number * (i + 1));
};

console.log(arrayOfMultiples(7, 5)); // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); // [17, 34, 51, 68, 85, 102]

/* -------------------- Задача 6 -------------------- */
/**
 * Возвращает третий по величине уникальный элемент из массива чисел.
 * Если третий по величине элемент не существует, возвращает наибольший элемент.
 *
 * @param {number[]} numbers - Массив чисел.
 * @returns {number} Третий по величине уникальный элемент или наибольший элемент, если третьего нет.
 */
const getThirdMaxNum = (numbers) => {
  const uniqNumbers = Array.from(new Set(numbers));
  uniqNumbers.sort((a, b) => a - b);
  return uniqNumbers.length >= 3
    ? uniqNumbers[2]
    : uniqNumbers[uniqNumbers.length - 1];
};

console.log(getThirdMaxNum([3, 1, 2, 4, 5])); // 3
console.log(getThirdMaxNum([1, 2, 2, 3, 4])); // 3
console.log(getThirdMaxNum([10, 10, 10])); // 10
console.log(getThirdMaxNum([7, 1, 3])); // 7
console.log(getThirdMaxNum([1, 2])); // 2
console.log(getThirdMaxNum([10, 1])); // 10

/* -------------------- Задача 7 -------------------- */
/**
 * Заменяет слова 'zero' и 'one' на '0' и '1' соответственно (регистр не важен),
 * игнорируя остальные слова. Возвращает строку, длина которой кратна 8.
 *
 * @param {string} str - Строка, содержащая слова "zero", "one", которые нужно заменить на '0' и '1'.
 * @returns {string} Строка, содержащая только '0' и '1', длина которой кратна 8.
 */
const textToBinary = (str) => {
  const testStr = str
    .toLowerCase()
    .split(' ')
    .map((word) => {
      if (word === 'zero') return '0';
      if (word === 'one') return '1';
    })
    .join('');

  const lth = Math.floor(testStr.length / 8) * 8;

  return testStr.slice(0, lth);
};

const textToBinary = (str) => {
  let ar = [];
  str.split(' ').forEach((item) => {
    if (item.toLowerCase() === 'zero') {
      ar.push(0);
    }
    if (item.toLowerCase() === 'one') {
      ar.push(1);
    }
  });
  if (ar.length % 8 === 0) {
    return ar;
  } else {
    return '';
  }
};

console.log(textToBinary('zero one zero one zero one zero one')); //  "01010101"
console.log(textToBinary('Zero one zero ONE zero one zero one')); //  "01010101"
console.log(textToBinary('zero one zero one zero one zero one one two')); //  ""
console.log(textToBinary('zero one zero one zero one zero three')); // ""
console.log(textToBinary('one on')); // ""

console.log(textToBinary('zero one zero one zero one zero one')); //  "01010101"
console.log(textToBinary('Zero one zero ONE zero one zero one')); //  "01010101"
console.log(textToBinary('zero one zero one zero one zero one one two')); //  ""
console.log(textToBinary('zero one zero one zero one zero three')); // ""
console.log(textToBinary('one on')); // ""

/* -------------------- Задача 8 -------------------- */
/**
 * Возвращает максимальный чётный или нечётный элемент массива в зависимости от количества
 * чётных и нечётных чисел. Если чётных чисел не меньше, чем нечётных, возвращает
 * максимальное чётное число. Если нечётных больше — возвращает максимальное нечётное.
 *
 * @param {number[]} arr - Массив неотрицательных целых чисел.
 * @returns {number} - Максимальный элемент согласно условиям задачи.
 */
constfindMaxByParityCount = (arr) => {};
console.log(findMaxByParityCount([1, 3, 5, 7, 8])); // 7
console.log(findMaxByParityCount([4, 6, 12, 17, 3, 8])); // 12
console.log(findMaxByParityCount([4, 6, 12, 17, 3, 8])); // 12
console.log(findMaxByParityCount([1, 5, 3, 9, 11])); // 11
console.log(findMaxByParityCount([9, 1, 8, 3, 5, 2, 4])); // 8

/* -------------------- Задача 9 -------------------- */
/**
 * Находит сумму всех чисел в массиве, исключая те, что указаны в массиве исключений.
 *
 * @param {number[]} arr - Массив чисел, для которых нужно вычислить сумму.
 * @param {number[]} exclusions - Массив чисел, которые должны быть исключены из суммы.
 * @returns {number} Сумма чисел, за исключением тех, что указаны в exclusions.
 */
const sumWithExclusions = (arr, exclusions) => {};

console.log(sumWithExclusions([1, 2, 3, 4, 5], [2, 4])); // 9 (1 + 3 + 5)
console.log(sumWithExclusions([1, 2, 3, 4, 5], [2, 4])); // 9 (1 + 3 + 5)
console.log(sumWithExclusions([10, 20, 30], [])); // 60 (10 + 20 + 30)
console.log(sumWithExclusions([1, 2, 3, 4], [1, 2, 3, 4])); // 0

/* -------------------- Задача 10 -------------------- */
/**
 * Находит наиболее часто встречающийся элемент в массиве.
 * Если несколько элементов встречаются одинаковое количество раз, возвращает любой из них.
 *
 * @param {Array} arr - Массив элементов, для которых нужно найти наиболее частый.
 * @returns {any} Элемент, который встречается чаще всего.
 */
const mostFrequent = (arr) => {};

console.log(mostFrequent([1, 2, 3, 1, 2, 1])); // 1
console.log(
  mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'banana']),
); // 'banana'
console.log(mostFrequent([5, 10, 15, 5, 10, 15])); // 5
console.log(mostFrequent([7, 8, 9, 10])); // 7

/*  Задача 11 */
// [1, 2, 3, 4, 5]
// Cдвинуть массив вправо или влево в зависимости от значения,
// которое прилетает на вход:
// 2  —> [4, 5, 1, 2, 3]
// -2 —> [3, 4, 5, 1, 2]
