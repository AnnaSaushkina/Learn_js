// Задача 1.2: Напишите функцию, которая принимает объект товара и возвращает строку: "Товар [name] стоит [price] руб.
function getProductInfo(product) {
  return `Товар ${product.name} стоит ${product.price} руб.`
}

const product = { name: "Phone", price: 50000 };
console.log(getProductInfo(product)); // "Товар Phone стоит 50000 руб."



// **Задача 2.2:** Создайте глубокую копию объекта:
const company = {
  name: "Tech Corp",
  employees: [
    { name: "John", skills: ["JS", "React"] },
    { name: "Alice", skills: ["Python", "Django"] }
  ]
};

const copy = structuredClone(company)
console.log(copy)
console.log(copy === company) //false



// **Задача 2.3:** Напишите функцию, которая сравнивает два объекта по структуре и значениям:
// ```javascript
// function deepEqual(obj1, obj2) {
//   // ваш код
// }

// console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2})); // true
// console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 3})); // false
// ```

// ### **3. Сборка мусора**

// **Задача 3.1:** В каком случае объект будет удален сборщиком мусора?
// ```javascript
// function createUser() {
//   const user = { name: "John" };
//   return user;
// }

// let userRef = createUser();
// userRef = null; // что происходит с объектом?
// ```

// **Задача 3.2:** Создайте циклическую ссылку и объясните проблему:
// ```javascript
// let objA = { name: "A" };
// let objB = { name: "B" };

// objA.ref = objB;
// objB.ref = objA;

// objA = null;
// objB = null;

// // Будет ли удален объект? Почему?
// ```

// ### **4. Методы объекта, "this"** 

// **Задача 4.1:** Создайте объект калькулятора с методами:
// ```javascript
// const calculator = {
//   // ваш код
// };

// calculator.read(5, 3);
// console.log(calculator.sum()); // 8
// console.log(calculator.mul()); // 15
// ```

// **Задача 4.2:** Потеря контекста - исправьте код:
// ```javascript
// const user = {
//   name: "John",
//   sayHi() {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// setTimeout(user.sayHi, 1000); // выведет "Hello, undefined" - исправьте
// ```

// **Задача 4.3:** Цепочка вызовов (chaining):
// ```javascript
// const ladder = {
//   step: 0,
//   up() {
//     // ваш код
//   },
//   down() {
//     // ваш код  
//   },
//   showStep() {
//     console.log(this.step);
//   }
// };

// ladder.up().up().down().showStep(); // 1
// ```

// ## **Отдельный блок: THIS (рекомендую изучить отдельно)**

// ### **Задачи на понимание `this`**

// **Задача 5.1:** Что выведет код и почему?
// ```javascript
// function showThis() {
//   console.log(this);
// }

// const obj = { name: "Obj", showThis };

// showThis();       // ?
// obj.showThis();   // ?
// ```

// **Задача 5.2:** Стрелочные функции vs обычные:
// ```javascript
// const obj = {
//   name: "Test",
//   regular() {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };

// obj.regular(); // ?
// obj.arrow();   // ?
// ```

// **Задача 5.3:** Привязка контекста:
// ```javascript
// const user = {
//   name: "John",
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// const greet = user.greet;
// greet(); // как исправить чтобы работало?
// ```

// **Задача 5.4:** `this` в конструкторах:
// ```javascript
// function User(name) {
//   this.name = name;
//   this.sayHi = function() {
//     console.log(`Hi, I'm ${this.name}`);
//   };
// }

// const user1 = new User("Alice");
// user1.sayHi(); // ?
// ```


// Отличная идея! Вот подборка более сложных и интересных задач:

// ## **1. Объекты (Продвинутый уровень)**

// **Задача 1.1:** Динамическое создание свойств

// Создайте функцию, которая принимает массив ключей и массив значений
// и возвращает объект с соответствующими свойствами
function createObject(keys, values) {
  let myObj = new Object()
  
  keys.forEach((keys, index) => {
    myObj[keys] = values[index]
  })
  
  return myObj
}

console.log(createObject(['name', 'age'], ['John', 25])); 
// { name: "John", age: 25 }

function createByCycle(keys, values) {
  let myObj = {}
  
  for (let i = 0; i < keys.length; i++) {
    myObj[keys[i]] = values[i]
  }
  
  return myObj
}
console.log(createByCycle(['name', 'age'], ['John', 25])); 


// **Задача 1.2:** Трансформация объекта
// ```javascript
// // Напишите функцию, которая преобразует объект:
// // { a: 1, b: 2, c: 3 } → { 1: 'a', 2: 'b', 3: 'c' }
function invertObject(obj) {
  const myObj = {}
  
 return Object.entries(obj).reduce((acc, [key, value]) => { 
   acc[value] = key
   return acc
}, {})
}
console.log(invertObject({ a: 1, b: 2, c: 3 }))

// ```

// **Задача 1.3:** Глубокое слияние объектов
// ```javascript
// // Напишите функцию deepMerge, которая объединяет два объекта рекурсивно
// function deepMerge(obj1, obj2) {
//   // ваш код
// }

// const obj1 = { a: 1, b: { x: 10, y: 20 } };
// const obj2 = { b: { y: 30, z: 40 }, c: 3 };
// console.log(deepMerge(obj1, obj2));
// // { a: 1, b: { x: 10, y: 30, z: 40 }, c: 3 }
// ```

// ## **2. Копирование объектов (Сложные случаи)**

// **Задача 2.1:** Умное клонирование с обработкой циклических ссылок
// ```javascript
// function deepClone(obj, visited = new WeakMap()) {
//   // ваш код (обработать циклические ссылки!)
// }

// const obj = { a: 1 };
// obj.self = obj;
// const cloned = deepClone(obj);
// console.log(cloned.self === cloned); // должно быть true
// ```

// **Задача 2.2:** Селективное копирование
// ```javascript
// // Создайте функцию, которая копирует только определенные свойства
// function selectiveClone(obj, props) {
//   // ваш код
// }

// const user = { name: "John", age: 30, password: "123", email: "john@test.com" };
// console.log(selectiveClone(user, ['name', 'email']));
// // { name: "John", email: "john@test.com" }
// ```

// **Задача 2.3:** Копирование с трансформацией
// ```javascript
// // Напишите функцию, которая копирует объект, применяя функцию к каждому значению
// function mapObject(obj, mapper) {
//   // ваш код
// }

// const numbers = { a: 1, b: 2, c: 3 };
// console.log(mapObject(numbers, x => x * 2));
// // { a: 2, b: 4, c: 6 }
// ```

// ## **3. Методы объектов (Практические кейсы)**

// **Задача 3.1:** Объект-валидатор форм
// ```javascript
// const formValidator = {
//   errors: [],
  
//   validateEmail(email) {
//     // валидация email
//   },
  
//   validatePassword(password) {
//     // валидация пароля (мин 6 символов)
//   },
  
//   validateForm(data) {
//     this.errors = [];
//     // ваша логика валидации
//     return this.errors.length === 0;
//   },
  
//   getErrors() {
//     return this.errors;
//   }
// };

// // Использование:
// formValidator.validateForm({ email: "test", password: "123" });
// console.log(formValidator.getErrors());
// ```

// **Задача 3.2:** Система плагинов
// ```javascript
// const pluginSystem = {
//   plugins: [],
  
//   register(plugin) {
//     // регистрирует плагин (объект с методом execute)
//   },
  
//   unregister(pluginName) {
//     // удаляет плагин по имени
//   },
  
//   executeAll(data) {
//     // выполняет все зарегистрированные плагины
//   }
// };

// // Тестовые плагины:
// const logger = { name: 'logger', execute: (data) => console.log('Log:', data) };
// const transformer = { name: 'transformer', execute: (data) => ({ ...data, processed: true }) };
// ```

// **Задача 3.3:** Кэширующий калькулятор
// ```javascript
// const smartCalculator = {
//   cache: new Map(),
  
//   calculate(key, operation) {
//     // если результат в кэше - возвращает его
//     // иначе вычисляет, сохраняет в кэш и возвращает
//   },
  
//   clearCache() {
//     // очищает кэш
//   },
  
//   getCacheStats() {
//     // возвращает статистику кэша
//   }
// };

// // Использование:
// smartCalculator.calculate('square_5', () => 5 * 5); // вычисляет
// smartCalculator.calculate('square_5', () => 5 * 5); // берет из кэша
// ```

// ## **4. Комбинированные задачи**

// **Задача 4.1:** Система наблюдения (Observer Pattern)
// ```javascript
// const observable = {
//   observers: [],
  
//   subscribe(observer) {
//     // подписывает наблюдателя
//   },
  
//   unsubscribe(observer) {
//     // отписывает наблюдателя
//   },
  
//   notify(data) {
//     // уведомляет всех наблюдателей
//   },
  
//   // Дополнительно: сделать observable из любого объекта
//   makeObservable(target) {
//     // ваш код
//   }
// };
// ```

// **Задача 4.2:** Иммутабельные обновления
// ```javascript
// // Создайте функцию, которая возвращает новый объект 
// // с обновленным свойством по пути (path)
// function setIn(obj, path, value) {
//   // ваш код
// }

// const state = { user: { profile: { name: "John", age: 25 } } };
// const newState = setIn(state, ['user', 'profile', 'age'], 26);
// console.log(newState.user.profile.age); // 26
// console.log(state.user.profile.age);    // 25 (оригинал не изменился)
// ```

// **Задача 4.3:** Динамический конструктор объектов
// ```javascript
// function createConfigurableObject(blueprint) {
//   // blueprint: { properties: {}, methods: {}, computed: {} }
//   // Создает объект с указанными свойствами, методами и вычисляемыми свойствами
  
//   // Пример использования:
//   const personBlueprint = {
//     properties: { firstName: '', lastName: '' },
//     methods: {
//       getFullName() { return `${this.firstName} ${this.lastName}`; }
//     },
//     computed: {
//       fullName: {
//         get() { return this.getFullName(); },
//         set(value) { 
//           const [first, last] = value.split(' ');
//           this.firstName = first;
//           this.lastName = last;
//         }
//       }
//     }
//   };
  
//   return // ваш объект
// }
// ```

// ## **5. Реальные практические задачи**

// **Задача 5.1:** Нормализация данных API
// ```javascript
// // Преобразуйте массив пользователей в объект для быстрого доступа по ID
// function normalizeUsers(usersArray) {
//   // ваш код
// }

// const users = [
//   { id: 1, name: "John", department: "IT" },
//   { id: 2, name: "Alice", department: "HR" },
//   { id: 3, name: "Bob", department: "IT" }
// ];

// console.log(normalizeUsers(users));
// // {
// //   1: { id: 1, name: "John", department: "IT" },
// //   2: { id: 2, name: "Alice", department: "HR" },
// //   3: { id: 3, name: "Bob", department: "IT" }
// // }
// ```

// **Задача 5.2:** Дифф объектов (сравнение изменений)
// ```javascript
// function objectDiff(oldObj, newObj) {
//   // возвращает объект с изменениями
//   // { added: {}, modified: {}, deleted: {} }
// }

// const oldData = { a: 1, b: 2, c: 3 };
// const newData = { a: 1, b: 20, d: 4 };
// console.log(objectDiff(oldData, newData));
// // { added: { d: 4 }, modified: { b: 20 }, deleted: { c: 3 } }
// ```

// Эти задачи покрывают реальные сценарии работы с объектами и помогут глубоко понять тему! Какая из них кажется самой интересной?