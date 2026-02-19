// Задача: написать алгоритм сортировки слиянием

const myArray = [3, 5, 7, 2, 5, 0, 10, 4, 1];

function mergeSort(array, start, end, temp) {
  // отрезок длиной 0 или 1
  if (end - start <= 1) {
    return;
  }

  // находим середину отрезка
  const mid = Math.floor((start + end) / 2);

  // рекурсивно сортируем левую и правую половины
  mergeSort(array, start, mid, temp);
  mergeSort(array, mid, end, temp);

  // сливаем две отсортированные половины а потом копируем результат обратно в исходный массив
  merge(array, start, mid, end, temp);
}

function merge(array, start, mid, end, temp) {
  let i = start; // указатель по левой половине
  let j = mid; // указатель по правой половине
  let k = start; // указатель позиции в temp, куда пишем результат

  // сливаем пока в обеих половинах еще есть элементы
  while (i < mid && j < end) {
    if (array[i] <= array[j]) {
      temp[k] = array[i];
      i++;
    } else {
      temp[k] = array[j];
      j++;
    }
    k++;
  }

  // если в левой половине остались элементы докидываем их
  while (i < mid) {
    temp[k] = array[i];
    i++;
    k++;
  }

  // если в правой половине остались элементы докидываем их
  while (j < end) {
    temp[k] = array[j];
    j++;
    k++;
  }

  // копируем отсортированный отрезок обратно в исходный массив
  for (let idx = start; idx < end; idx++) {
    array[idx] = temp[idx];
  }
}

function mergeSortWrapper(array) {
  const temp = new Array(array.length); // один вспомогательный массив на все время работы
  mergeSort(array, 0, array.length, temp);
  return array;
}

// тест
console.log(mergeSortWrapper([1, 3, 5, 2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortWrapper([5, 1, 9, 2])); // [1, 2, 5, 9]
console.log(mergeSortWrapper([])); // []
console.log(mergeSortWrapper([7])); // [7]
