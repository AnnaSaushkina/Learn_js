// Реализовать функцию each, которая будет циклически вызывать для каждого фрукта функции из functions
const fn1: Fn = (value: string) => console.log('f1', value);
const fn2: Fn = (value: string) => console.log('f2', value);
const fn3: Fn = (value: string) => console.log('f3', value);

//                           i = 0
const functions = [fn1, fn2, fn3];

const fruits = ['apple', 'potato', 'orange', 'melon', 'tomato'];

each(fruits, functions);

type Fn = (element: string) => void;

function each(fruits: string[], functions: Fn[]): void {
  let i = 0;

  for (const fruit of fruits) {
    if (i === functions.length) i = 0;

    const fn = functions[i];
    fn(fruit);
    i++;
  }
}

// Вывод должен быть таким:
// fn1 (apple)
// fn2 potato
// fn3 orange
// fn1 melon
// fn2 tomato
