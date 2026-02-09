// Задача: написать алгоритм сортировки слиянием
// Функция принимает два отсортированных по возрастанию массива чисел: left и right.
// Возвращает новый массив, в котором все элементы из left и right собраны вместе и тоже отсортированы по возрастанию.

function merge(left, right) {
  let result = [];

  // Сначала разбирала движение элементов через индексы и несколько while циклов
  //   let i = 0;
  //   let j = 0;

  //   while (i < left.length && j < right.length) {
  //     if (left[i] < right[j]) {
  //       result.push(left[i]);
  //       i++;
  //     } else {
  //       result.push(right[j]);
  //       j++;
  //     }
  //   }
  //   while (i < left.length) {
  //     result.push(left[i]);
  //     i++;
  //   }

  //   while (j < right.length) {
  //     result.push(right[j]);
  //     j++;
  //   }

  // После разработки работающего алгоритма решила написать на более читабельную версию через shift
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else result.push(right.shift());
  }

  return result.concat(left, right);
}

function mergeSort(array) {
  // случай массива из одного элемента
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  // разделение пополам
  let arrayCenter = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, arrayCenter);
  let rightHalf = array.slice(arrayCenter);

  // рекурсивное деление каждой половины
  let sorted1 = mergeSort(leftHalf);
  let sorted2 = mergeSort(rightHalf);

  // слияние двух разделенных половин
  return merge(sorted1, sorted2);
}

// Ожидаемое поведение:
console.log(mergeSort([1, 3, 5, 2, 4, 6])); // [1, 2, 3, 4, 5, 6]

console.log(mergeSort([5, 1, 9, 2])); //[1, 2, 5, 9]

console.log(mergeSort([])); // []

console.log(mergeSort([7])); // [7]

// Итого: берем массив, делим его на две части,
// к каждой половине, которая рекурсивно будет разделяться - применяем функцию слияния.
// проходимся по каждой половине, сравниваем первое число у каждого.
// если число меньше числа другого массива - удаляем его из исходной половины и добавляем в качестве первого числа нового массива.
// числа сравниваются и падают от меньшего к большему в новый массив пока две половины массивов не закончатся.
