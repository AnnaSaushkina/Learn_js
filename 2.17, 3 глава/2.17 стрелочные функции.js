
let ask2 = (question, yes, no) => {
  if (confirm(question)) yes() 
  else no();
}

ask2(
    'Вы согласны2?',
    function() { console.log('Мы согласились')},
    function() { console.log('Мы отменились');}
)


// Напиши функцию, которая принимает радиус и возвращает площадь круга
let calculateCircleArea = (radius) => {
  return radius *= radius * 3.14
}

console.log(calculateCircleArea(5)); // 78.5398...
console.log(calculateCircleArea(10)); // 314.159...-


// Напиши функцию, которая проверяет, является ли строка палиндромом
let isPalindrome = (str) => {
  const noSpacesStr = str.replaceAll(' ', '').toLowerCase().split("");
  
  const strLetters = noSpacesStr.toString()
  const reversedString = Array.from(noSpacesStr).reverse().toString()
    
   return (strLetters === reversedString) ? true : false;
}

console.log(isPalindrome("топот")); // true
console.log(isPalindrome("привет")); // false
console.log(isPalindrome("А роза упала на лапу Азора")); // true


// Напиши функцию, которая фильтрует массив чисел, оставляя только четные
let filterEvenNumbers = (numbers) => {
  let newArray = numbers.filter((number) => number % 2 == 0)
  return newArray
 }
 
 console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
 console.log(filterEvenNumbers([1, 3, 5])); // []


 // Напиши функцию, которая находит максимальное число в массиве
 let findMaxNumber = (numbers) => {
  return result = Math.max.apply(null, numbers)
}

console.log(findMaxNumber([1, 5, 2, 9, 3])); // 9
console.log(findMaxNumber([-10, -5, -1])); // -1


// Параметры по умолчанию
// Напиши функцию formatMessage(text, prefix = "Info:", suffix = "!")
// которая возвращает отформатированное сообщение
let formatMessage = (text, prefix = 'Info:', suffix = '!') => {
  return prefix + text + suffix
}

console.log(formatMessage('Некое сообщение')) //"Info:Некое сообщение!"


// Rest параметры
// Напиши функцию calculateAverage(...numbers), которая возвращает
// среднее арифметическое всех переданных чисел

let calculateAverage = (...numbers) => {

  let totalSum = 0;
  for (const nums of numbers) {
    totalSum += nums;
  }
  
  return totalSum / numbers.length
}

console.log(calculateAverage(2, 5, 4))


// Задача 4: Счетчик
// Создай функцию createCounter(), которая возвращает функцию.
// Каждый вызов возвращаемой функции должен увеличивать счетчик на 1
// Начальное значение = 0

let createCounter = () => {
  let total = 0
  return function(sum) {
      total += sum
      console.log(total)
 }
}

let result = createCounter()
result(1)
result(1)
result(1)


// Лексическое окружение
// Что выведет этот код и почему?
function outer() {
  let x = 10;
  return function inner() {
      console.log(x);
      let x = 20;
  };
}
const test = outer();
test();// ошибку, потому что код ищет переменную x сначала во внутреннемокружении функции inner, там она еще не объявлена


// Задача 7: Фильтрация массива
// Напиши функцию filterArray(arr, callback), которая принимает массив
// и функцию-колбэк, и возвращает новый массив с элементами,
// для которых callback возвращает true

// Задача 8: Композиция функций
// Напиши функцию compose(f, g), которая возвращает новую функцию,
// применяющую сначала g, потом f: compose(f, g)(x) = f(g(x))

// Задача 9: Рекурсия
// Напиши рекурсивную функцию для подсчета суммы чисел от 1 до n