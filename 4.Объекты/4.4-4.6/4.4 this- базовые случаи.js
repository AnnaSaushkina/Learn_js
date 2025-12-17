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
console.log(calculator.sum());
console.log(calculator.mul());



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
  showStep: function () { // показывает текущую ступеньку
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
    this.students.forEach(function (student) {
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
    this.students.forEach(function (student) {
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






