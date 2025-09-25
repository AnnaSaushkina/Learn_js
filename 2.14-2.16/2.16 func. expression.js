// 2. Напиши функцию подсчета суммы массива тремя способами
const numbers = [1, 2, 3, 4, 5];

function sumDeclaration(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

console.log(sumDeclaration(numbers))



let sum2 = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}

console.log(sum2(numbers))


let sum3 = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}
console.log(sum3(numbers))
