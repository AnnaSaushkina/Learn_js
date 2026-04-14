function arrayDiff(a, b) {
  const result = new Set(b);
  return a.filter((num) => !result.has(num));
  //   console.log("тест")
}

console.log(arrayDiff([1, 2, 2, 2, 3, 5, 6, 7], [1, 2, 3]));

// Панграмма — это предложение, содержащее каждую букву алфавита хотя бы один раз.
// Например, предложение «Быстрая коричневая лиса перепрыгивает через ленивую собаку»
// — это панграмма, потому что в нём хотя бы один раз используется буква AZ
// (регистр не имеет значения).

// Дана строка. Определите, является ли она панграммой.
// Верните True, если является панграммой, False, если нет.
// Цифры и знаки препинания игнорируются.

function doPangram(input) {
  const alphabet = 'abcdefghijklmnopqrstuvwxy';
  const str = input.toLowerCase();

  for (let letter of alphabet) {
    if (!str.includes(letter)) return false;
  }
  return true;
}

const string = 'The quick brown fox jumps over the lazy dog';

console.log(doPangram(string));
