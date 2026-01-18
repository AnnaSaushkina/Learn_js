
// #### Задача 1: Базовое преобразование объекта

const obj = {
    name: 'Object',
    value: 100,
    
    toString() {
        return `Object: ${this.name}`;
    },
    
    valueOf() {
        return this.value;
    }
};

console.log(String(obj)); // "Object: Object" - вызывает toString()
console.log(Number(obj)); // 100 - вызывает valueOf()
console.log(obj + 10); // 110 - вызывает valueOf() для сложения
console.log('Test: ' + obj); // "Test: 100" - valueOf() для конкатенации


// #### Задача 2: Использование Symbol.toPrimitive

const temperature = {
    celsius: 25,
    
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        
        if (hint === 'string') {
            return `${this.celsius}°C`;
        } else if (hint === 'number' || hint === 'default') {
            return this.celsius;
        }
    }
};

// Разные контексты вызывают разные преобразования
console.log(String(temperature)); // "25°C", hint: string
console.log(Number(temperature)); // 25, hint: number
console.log(temperature + 5); // 30, hint: default
console.log(`${temperature}`); // "25°C", hint: string


// #### Задача 3: Сложный пример с приоритетами методов

const calculator = {
    value: 10,
    
    toString() {
        console.log('toString called');
        return `Calculator(value=${this.value})`;
    },
    
    valueOf() {
        console.log('valueOf called');
        return this.value;
    },
    
    // Комментируем/раскомментируем для демонстрации
    // [Symbol.toPrimitive](hint) {
    //     console.log(`Symbol.toPrimitive called with hint: ${hint}`);
    //     if (hint === 'string') return this.toString();
    //     return this.value;
    // }
};

console.log('--- Без Symbol.toPrimitive ---');
console.log(calculator + 5); // 15, вызывает valueOf
console.log(`${calculator}`); // "Calculator(value=10)", вызывает toString

// Раскомментируйте Symbol.toPrimitive для демонстрации приоритета


// #### Задача 4: Реальный пример — объект Деньги

class Money {
    constructor(amount, currency = 'USD') {
        this.amount = amount;
        this.currency = currency;
    }
    
    toString() {
        return `${this.amount} ${this.currency}`;
    }
    
    valueOf() {
        return this.amount;
    }
    
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        // Для математических операций возвращаем сумму
        return this.amount;
    }
}

const price1 = new Money(100, 'USD');
const price2 = new Money(50, 'USD');

console.log(String(price1)); // "100 USD"
console.log(price1 + price2); // 150
console.log(price1 > price2); // true
console.log(`Total: ${price1}`); // "Total: 100 USD"


// ### Практическое задание


// Создайте объект "Время" с часами и минутами
// Настройте его преобразование так, чтобы:
// 1. При преобразовании в строку: "HH:MM"
// 2. При преобразовании в число: общее количество минут
// 3. При сложении с числом: добавлять минуты

const Time = {
    // Ваш код здесь
    hours: 2,
    minutes: 30,
    
    // Реализуйте методы
};

// Ожидаемое поведение:
console.log(String(Time)); // "02:30"
console.log(Number(Time)); // 150 (2*60 + 30)
console.log(Time + 15); // 165 (150 + 15)
