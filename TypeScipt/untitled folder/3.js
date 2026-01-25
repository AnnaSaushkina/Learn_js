// const array = [5, 6, 7]
// array.forEach((x) => console.log(x))

const { log } = require("console");


// myForeach(array, x => console.log(x))

// function myForeach() {
//  for (i = 0; array.length; i++) {
//     function action() {
//       return i
//     }
//  }
// }


const one = 1

const x2 = 10 > 15
console.log(x2);

// i = 3
//                   |
const array = [5, 6, 7]
console.log(array[0]);
console.log(array[one]);
console.log(array[7]);
array.forEach((x) => console.log(x))


myForeach(array, x => console.log(x))

const myForeach = (arr, fn) => {
 for (let i = 0; i < 3; i++) {
  fn(arr[i])
 }
}

function action() {
  return i
}


function print(getValue) {
  const value = getOneHundred();
  console.log(`Value = ${value}`);
}

function getOneHundred() {
  return 100
}
const getOneHundred = (getValue) => {

}

function getSeven() {
  return 7
}

print(getOneHundred)
print(getSeven)

function sum(a, b) {
  console.log(a+ b)
}

const t1 = 1;
const t2 = 2;

sum(t1, t2)


function createButton(text, onClick) {

}

createButton("Обновить страницу", () => {})
createButton("Добавить в корзину", () => {})