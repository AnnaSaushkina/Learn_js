
//  ### **Задача 1: Базовый контекст** 

const user = {
  name: 'Anna',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // Что выведет?



"Hello, Anna" 
// this = объект user, так как метод вызывается через точку



//  ### **Задача 2: Потеря контекста** 

const user = {
  name: 'Mike',
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
};

const hi = user.sayHi;
hi(); // Что выведет?



"Hi, undefined" 
// this потерян! Функция скопирована, вызывается без контекста



//  ### **Задача 3: Стрелочная функция vs Обычная** 

const group = {
  title: "Our Group",
  students: ["John", "Alice"],
  
  showList() {
    this.students.forEach(function(student) {
      console.log(this.title + ': ' + student);
    });
  }
};

group.showList(); // Что выведет?



"undefined: John"
"undefined: Alice"
// Обычная функция в forEach имеет свой this (undefined в strict mode)



//  ### **Задача 4: Стрелочная функция решение** 

const group = {
  title: "Our Group", 
  students: ["John", "Alice"],
  
  showList() {
    this.students.forEach(student => {
      console.log(this.title + ': ' + student);
    });
  }
};

group.showList(); // Что выведет?



"Our Group: John"
"Our Group: Alice" 
// Стрелочная функция берет this из внешней области (showList)



//  ### **Задача 5: call, apply, bind** 

function introduce(age, city) {
  console.log(`I'm ${this.name}, ${age} years old, from ${city}`);
}

const person = { name: 'Sarah' };

// Что выведут эти вызовы?
introduce.call(person, 25, 'Moscow');
introduce.apply(person, [25, 'Moscow']);
const bound = introduce.bind(person, 25);
bound('Moscow');



// Все вызовы выводят: "I'm Sarah, 25 years old, from Moscow"
// call - аргументы через запятую
// apply - аргументы массивом  
// bind - создает новую функцию с привязанным контекстом



//  ### **Задача 6: Контекст в конструкторе** 

function Person(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}

const anna = new Person('Anna');
anna.sayHi(); // Что выведет?



"Hi, I'm Anna"
// В конструкторе this = новый созданный объект



//  ### **Задача 7: Цепочка вызовов (chaining)** 

const calculator = {
  value: 1,
  
  add(num) {
    this.value += num;
    return this;
  },
  
  multiply(num) {
    this.value *= num;
    return this;
  },
  
  getValue() {
    return this.value;
  }
};

const result = calculator.add(5).multiply(2).add(10).getValue();
console.log(result); // Что выведет?



// Цепочка: 1 + 5 = 6 → 6 * 2 = 12 → 12 + 10 = 22
// Каждый метод возвращает this, позволяя строить цепочки



//  ### **Задача 8: Таймеры и контекст** 

class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  start() {
    setInterval(function() {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
}

const timer = new Timer();
timer.start(); // Что произойдет?


// Будет ошибка: Cannot read property 'seconds' of undefined
// Обычная функция в setInterval имеет свой this (не объект Timer)



//  ### **Задача 9: Решение с стрелочной функцией** 

class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  start() {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
}

const timer = new Timer();
timer.start(); // Что произойдет?



// Будет выводить: 1, 2, 3, 4... каждую секунду
// Стрелочная функция берет this из внешней области (объект Timer)



//  ### **Задача 10: Сложный случай с вложенностью** 

const obj = {
  name: 'Outer',
  
  outerMethod() {
    console.log('1:', this.name);
    
    const innerRegular = function() {
      console.log('2:', this.name);
    };
    
    const innerArrow = () => {
      console.log('3:', this.name);
    };
    
    innerRegular();
    innerArrow();
  }
};

obj.outerMethod(); // Что выведет?



"1: Outer"     // this = obj (вызов метода)
"2: undefined" // this потерян (обычная функция)
"3: Outer"     // this из outerMethod (стрелочная функция)





//  ### **Задание 1: Исправь код** 

const button = {
  title: 'My Button',
  handleClick() {
    console.log('Clicked:', this.title);
  }
};

// Почему не работает? Исправь.
document.addEventListener('click', button.handleClick);


//  ### **Задание 2: Создай цепочку методов** 

// Создай объект counter с методами:
// add(n) - увеличивает значение на n
// subtract(n) - уменьшает на n  
// multiply(n) - умножает на n
// getValue() - возвращает текущее значение
// Все методы должны поддерживать чейнинг

// Должно работать:
counter.add(5).multiply(2).subtract(3).getValue(); // 7


//  ### **Задание 3: Реализуй bind** 

// Напиши свою упрощенную версию функции bind
function myBind(fn, context) {
  // твой код здесь
}

// Проверка:
function test() { console.log(this.name); }
const bound = myBind(test, {name: 'Test'});
bound(); // должно вывести "Test"


