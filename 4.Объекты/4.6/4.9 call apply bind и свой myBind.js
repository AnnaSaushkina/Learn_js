// 1. Потеря контекста при отрыве метода от объекта — три способа починить
const user = {
  name: "Аня",
  greet() {
    return "Привет, " + this.name;
  },
};
const g = user.greet;
console.log(g.bind(user)());
console.log(
  (function () {
    return user.greet();
  })(),
);
console.log(g.call(user));

// 2. Стрелка против обычной функции внутри метода — колбэк в setTimeout
const timer = {
  name: "таймер",
  startArrow() {
    setTimeout(() => console.log("стрелка:", this.name), 0);
  },
  startPlain() {
    setTimeout(function () {
      console.log("обычная:", this.name);
    }, 0);
  },
};
timer.startArrow();
timer.startPlain();

// 3. Стрелка как метод объекта — обратная ловушка, this берётся снаружи объекта
const obj = {
  name: "объект",
  plain() {
    console.log("plain:", this.name);
  },
  arrow: () => console.log("arrow:", this.name),
};
obj.plain();
obj.arrow();

// 4. this в колбэке map — теряется при голом вызове, чинится стрелкой или thisArg
const cart = {
  discount: 10,
  items: [100, 200],
  totalBroken() {
    return this.items.map(function (p) {
      return p - this.discount;
    });
  },
  totalFixed() {
    return this.items.map((p) => p - this.discount);
  },
};
console.log(cart.totalFixed());
console.log(cart.totalBroken());

const fixedTotalBroken = {
  num: 10,
  array: [100, 200],
  fixedMethod() {
    return this.array.map(function (p) {
      return p - this.num;
    }, this);
  },
};
console.log(fixedTotalBroken.fixedMethod());

// 5. call, apply, bind — три способа вызвать одну функцию с заданным this
function intro(greeting, punct) {
  console.log(greeting + ", " + this.name + punct);
}
const anna = { name: "Аня" };
const args = ["<3", " E>"];

intro.call(anna, "йоу", "!");
intro.apply(anna, args);
intro.bind(anna, "привет", "!")();

// 6. Свой bind через apply: замыкание хранит функцию и this, аргументы склеиваются
Function.prototype.myBind = function (ctx, ...bound) {
  const original = this;
  return function (...callArgs) {
    return original.apply(ctx, [...bound, ...callArgs]);
  };
};

intro.myBind(anna, "привет", "!")();
