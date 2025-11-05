// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

const calculator = {
    read(a, b) {
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b
        
    },
    mul(a, b) {
         return this.a * this.b
    }
}

calculator.read(5, 6);
console.log( calculator.sum() );
console.log( calculator.mul() );



// У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:

let ladder = {
  step: 0,
  up() {
    this.step++;
   return this
},
  down() {
    this.step--;
   return this
  },
  showStep: function() { // показывает текущую ступеньку
   console.log(this.step);
    return this
  }
};
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0




const group2 = {
  title: "Our Group",
  students: ["John", "Alice"],
  
  showList() {
    this.students.forEach(function(student) {
      console.log(this.title + ': ' + student);
    });
  }
};

group2.showList(); // Что выведет?
//undefined вместо this.title, потому что внутри обрасти видимости функции forEach потерян контекст, а this.students находит контекст из ближайшей внешней области видимости



// ###Потеря контекста**
const user = {
  name: 'Mike',
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
};

const hi = user.sayHi;
hi(); // Что выведет?
// при перезаписи ссылки в другую переменную контекст будет потерян. выведется undefined.





// ###Стрелочная функция vs Обычная
const group3 = {
  title: "Our Group",
  students: ["John", "Alice"],
  showList() {
    this.students.forEach(function(student) {
      console.log(this.title + ': ' + student);
    });
  }
};
group3.showList(); // Что выведет?
// title не будет найден, тк функциф forEach создают свою собственную область видимости, в которой у нас нет объекта на который ссылается .title?



// ### Стрелочная функция решение
const group4 = {
  title: "Our Group", 
  students: ["John", "Alice"],
  
  showList() {
    this.students.forEach(student => {
      console.log(this.title + ': ' + student);
    });
  }
};
group4.showList(); // Что выведет?
// из-за того что стрелочная функция не имеет свого this, она ссылается на внешнюю область видимости где this.title находит значение.
// Поэтому: 
// Our Group: John
// Our Group: Alice





// ### call, apply, bind
function introduce(age, city) {
  console.log(`I'm ${this.name}, ${age} years old, from ${city}`);
}
const person = { name: 'Sarah' };

// Что выведут эти вызовы?
introduce.call(person, 25, 'Moscow');
//I`m Sarah, 25 years old, from Moscow

introduce.apply(person, [25, 'Moscow']);
//I`m Sarah, 25 years old, from Moscow

const bound = introduce.bind(person, 25);
bound('Moscow');
//I`m Sarah, 25 years old, from Moscow




function calculate2(a, b, c) {
  return this.base + a + b + c;
}
const context2 = { base: 10 };
const bound3 = calculate2.bind(context2, 1, 2);
console.log(bound3(3)); // Что выведет?
//16. Создается новая функция bound3, аргументами которой становятся параметры context2, 1, 2;
//При вызове bound3 к функции выше добавляется еще один аргумент - 3
//новая функция bound3 возвращает 10 + 1 + 2 + 3



// ### Контекст в конструкторе
function Person(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const anna = new Person('Anna');
anna.sayHi(); // Что выведет?
// Hi, I'm Anna
//Контекст сохранится потому что мы создаем конструктор




// ### Таймеры и контекст
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
// у нас запустится счетчик setInterval, но Контекст из конструктора потеряется потому что функция создает свой контекст. this.second не ссылается на глобальный контекст и равняется undefined. Затем Инкремент приводит свойство к числу. Поэтому нам выводится раз в секунду NaN





// ### Решение с стрелочной функцией
class Timer4 {
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
const timer4 = new Timer4();
timer4.start(); // Что произойдет?
// Стрелочная функция ссылается ко внешнему контексту и находит его в constructor. Раз в секунду счетчик будет увеличивать значение Timer2.seconds




// ### Сложный случай с вложенностью
const obj3 = {
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
obj3.outerMethod(); // Что выведет?
//Outer
// Undefined
//Outer





// ### Исправь код**
const button = {
  title: 'My Button',
  handleClick() {
    console.log('Clicked:', this.title);
  }
};
// Почему не работает? Исправь.
document.addEventListener('click', button.handleClick);





// ### Создай цепочку методов**

// Создай объект counter с методами:
// add(n) - увеличивает значение на n
// subtract(n) - уменьшает на n  
// multiply(n) - умножает на n
// getValue() - возвращает текущее значение
// Все методы должны поддерживать чейнинг
let counter2 = {
  start: 0,
  add(n) {
    this.start += n
    return this
  },
  subtract(n) {
    this.start -= n
    return this
  },
  multiply(n) {
    this.start *= n
    return this
  },
  getValue() {
    return this.start
  }
}
console.log(counter2.add(5).multiply(2).subtract(3).getValue()); // 7



// 4. **"Что выведет этот код и почему?"**
const obj2 = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
const greet = obj2.greet;
greet();
// Undefined потому что внешняя переменная не сохраняет контекст




// "Почему здесь разный результат?"**
function User(name) {
  this.name = name;
}
const user1 = User('Anna');
const user2 = new User('Mike');
// Потому что мы создаем новый экземпляр класса который создает свой контекст. User2 выведет Mike



// 6. **"Объясни разницу между этими вызовами:"**
obj.method();
const method = obj.method;
method();
// Первый вызов напрямую обращается к методу объекта, а второй вызываемся с потерянным контекстом, записываясь во внешнюю переменную



// ## **Стрелочные функции**
// **"Чем отличается `this` в стрелочных и обычных функциях?"**
// **"Что выведет и почему?"**
const obj = {
  name: 'Test',
  regular: function() { console.log(this.name) },
  arrow: () => console.log(this.name)
};
obj.regular();
obj.arrow();
// Стрелочные функции не имеют своего контекста, поэтому ссылаются на глобальный контекст. То есть arrow обратится к window и вернется Undefined.
// Обычная функция обратится к контексту obj и вернет Test;



// Что происходит с `this` при вызове с `new`?"**
// This копирует родительский контекст для экземпляра класса, что позволяет сохранять контекст.



// В чем разница между `call`, `apply` и `bind`?"**
// Можно ли изменить `this` после `bind`?"**
// Что вернет этот код?"**
function show() { return this.name; }
const bound1 = show.bind({name: 'A'});
const bound2 = bound1.bind({name: 'B'});
console.log(bound2());
// Разница медлу колл и апплай в том, что апплай вторым параметром принимает массив аргументов, а колл принимает параметры через запятую. Возвращают один результат. Колл считается чуть быстрее. Вызываются позже. Bind же привязывает к функции контекст объекта.
// Код вернет  A  потому что bind создает неизменяемую приязку контекста и ее нельзя переопределить.


// "Почему теряется контекст в колбэках?"
const timer0 = {
  seconds: 0,
  start() {
    setInterval(function() {
      this.seconds++; // Почему не работает?
    }, 1000);
  }
};
// Потому что функция каждый раз создает свою новую область видимости


// 15. **"Как исправить потерю контекста? Назови 3 способа"**
const timer1 = {
  seconds: 0,
  start() {
    setInterval(function() {
      this.seconds++; // Почему не работает?
    }, 1000);
  }
};

const timer2 = {
  seconds: 0,
  start() {
    setInterval(() => {
      console.log(this.seconds++)
    }, 1000)
  }
}
timer2.start()


const timer3 = {
  second: 0,
  start() {
    let save = this.second;
     setInterval(function() {
     console.log(save++)
   }, 1000)
  }
}
timer3.start()




// **"Что выведет этот код?"**
const obj1 = {
  name: 'Obj1',
  method() {
    const inner = () => console.log(this.name);
    const inner2 = function() { console.log(this.name) };
    inner();
    inner2();
  }
};
obj1.method();
// Obj1
// undefined



