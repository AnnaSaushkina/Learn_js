// Задача: написать алгоритм сортировки слиянием

const myArray = [3, 5, 7, 2, 5, 0, 10, 4, 1];

function mergeSort(array, start, end, result) {
  // отрезок длиной 0 или 1
  if (end - start <= 1) {
    return;
  }

  const middle = Math.floor((start + end) / 2);

  // рекурсивно сортируем левую и правую половины
  mergeSort(array, start, middle, result);
  mergeSort(array, middle, end, result);

  // сливаем две отсортированные половины а потом копируем результат обратно в исходный массив
  merge(array, start, middle, end, result);
}

function merge(array, start, middle, end, result) {
  let i = start; // левая половина
  let j = middle; // правая половина
  let k = start;

  // сливаем пока в обеих половинах еще есть элементы
  while (i < middle && j < end) {
    if (array[i] <= array[j]) {
      result[k] = array[i];
      i++;
    } else {
      result[k] = array[j];
      j++;
    }
    k++;
  }

  // если в левой половине остались элементы докидываем их
  while (i < middle) {
    result[k] = array[i];
    i++;
    k++;
  }

  // если в правой половине остались элементы докидываем их
  while (j < end) {
    result[k] = array[j];
    j++;
    k++;
  }

  // копируем отсортированный отрезок обратно в исходный массив
  for (let index = start; index < end; index++) {
    array[index] = result[index];
  }
}

function mergeSortWrapper(array) {
  const result = new Array(array.length);
  mergeSort(array, 0, array.length, result);
  return array;
}

// тест
console.log(mergeSortWrapper([1, 3, 5, 2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortWrapper([5, 1, 9, 2])); // [1, 2, 5, 9]
console.log(mergeSortWrapper([])); // []
console.log(mergeSortWrapper([7])); // [7]
