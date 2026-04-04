// ЗАДАЧА 1: Сумма чисел до n
// sumTo(4) = 1 + 2 + 3 + 4 = 10

// Вариант 1 - цикл
function sumToLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Вариант 2 - рекурсия
function sumTo(n) {
  if (n === 1) return 1; // остановка
  return n + sumTo(n - 1);
}

// ЗАДАЧА 2: Факториал
// factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6

// ЗАДАЧА 3: Числа Фибоначчи
// fib(7) = 13
// Последовательность: 1, 1, 2, 3, 5, 8, 13, 21...
// Каждое число = сумма двух предыдущих

// Вариант 1 рекурсия
function fibSlow(n) {
  if (n <= 1) return n;
  return fibSlow(n - 1) + fibSlow(n - 2); // сумма двух предыдущих
}

// Вариант 2 цикл
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b; // следующее = сумма двух предыдущих
    a = b; // сдвигаемся вперед
    b = c;
  }
  return b;
}

console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

// ЗАДАЧА 4: Вывод односвязного списка
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null, // последний элемент
      },
    },
  },
};

// Вариант 1 цикл
function printList(list) {
  let current = list;
  while (current) {
    console.log(current.value); // выводим текущий
    current = current.next; // переходим к следующему
  }
}

// Вариант 2 рекурсия
// выводим текущий, потом рекурсивно выводим остаток
function printListRecursive(list) {
  console.log(list.value); // выводим текущий
  if (list.next) {
    printListRecursive(list.next); // идем дальше
  }
}

printList(list); // 1, 2, 3, 4
printListRecursive(list); // 1, 2, 3, 4

// ЗАДАЧА 5: Вывод списка в обратном порядке

// Вариант 1 рекурсия
function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next); // сначала идем вглубь до конца
  }
  console.log(list.value); // выводим уже на обратном пути
}

// Вариант 2 - цикл
function printReverseListLoop(list) {
  let arr = [];
  let current = list;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseList(list); // 4, 3, 2, 1
printReverseListLoop(list); // 4, 3, 2, 1
