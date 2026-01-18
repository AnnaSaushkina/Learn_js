// Задача 1: Создание и сравнение символов

// Создаем два символа с одинаковым описанием
const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2); // false - каждый символ уникален

// Создаем символ через Symbol.for() - ищет в глобальном реестре
const sym3 = Symbol.for('key');
const sym4 = Symbol.for('key');

console.log(sym3 === sym4); // true - одинаковые символы из реестра
console.log(Symbol.keyFor(sym3)); // 'key' - получаем ключ символа из реестра


// #### Задача 2: Использование символов как ключей объектов

// Создаем символ для скрытого свойства
const user = {
    name: 'Alex',
    age: 25
};

const idSymbol = Symbol('id');
user[idSymbol] = 12345;

// Свойство не видно в обычных итерациях
console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.getOwnPropertyNames(user)); // ['name', 'age']

// Но доступно через специальные методы
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]
console.log(user[idSymbol]); // 12345

// И в цикле for...in тоже не показывается
for(let key in user) {
    console.log(key); // name, age
}


// #### Задача 3: Well-known symbols

const myObject = {
    value: 42,
    
    // Используем Symbol.iterator для создания итератора
    [Symbol.iterator]: function*() {
        for(let key in this) {
            yield this[key];
        }
    },
    
    // Используем Symbol.toStringTag для настройки вывода
    get [Symbol.toStringTag]() {
        return 'MyCustomObject';
    }
};

// Проверяем итератор
for(let value of myObject) {
    console.log(value); // 42
}

// Проверяем toStringTag
console.log(Object.prototype.toString.call(myObject)); // [object MyCustomObject]
