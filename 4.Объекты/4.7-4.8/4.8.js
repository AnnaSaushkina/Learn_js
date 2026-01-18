// ### ** Задача A: Калькулятор в объекте **

// Создай объект calculator, который:
// 1. Хранит значение в свойстве value
// 2. При преобразовании в строку показывает "Значение: X"
// 3. При преобразовании в число показывает X
// 4. При сложении с числом добавляет его к value

const calculator = {
    value: 10,
    toString() {
        return "Значение: " + this.value;
    },
    valueOf() {
        return this.value;
    }
};

console.log(String(calculator)); // "Значение: 10"
console.log(Number(calculator)); // 10
console.log(calculator + 5);     // 15
console.log(`${calculator} `);    // "Значение: 10"


// ### ** Задача B: Объект - перевёртыш **

// Создай объект, который:
// - При преобразовании в строку возвращает своё числовое значение как строку
// - При преобразовании в число возвращает длину строки

const reverser = {
    str: "hello",
    num: 42,
    toString() {
        return String(this.num);
    },
    valueOf() {
        return this.str.length;
    }
};

console.log(String(reverser)); // "42"
console.log(Number(reverser)); // 5 (длина "hello")


// ### ** Задача C: Использование Symbol.toPrimitive **

// Создай объект с Symbol.toPrimitive, который:
// - Для 'string': возвращает "🐱"
// - Для 'number': возвращает 3
// - Для 'default': возвращает "meow"

const cat = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return "🐱";
        } else if (hint === 'number') {
            return 3;
        } else {
            return "meow";
        }
    }
};

console.log(String(cat)); // "🐱"
console.log(Number(cat)); // 3
console.log(cat + "!");   // "meow!"

