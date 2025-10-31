// 🔣 Symbol
// Задача 7: Скрытые свойства

// Задача: Создайте объект cache с "скрытыми" свойствами
// которые не видны при обычном переборе

let cache = {};

// Добавьте несколько свойств с Symbol ключами
// Убедитесь, что они не видны в for..in
// Задача 8: Глобальные символы для конфигурации

// Задача: Создайте систему конфигурации с глобальными символами

const CONFIG_KEY = Symbol.for('app.config');

function setConfig(obj, config) {
    // Реализуйте установку конфигурации
}

function getConfig(obj) {
    // Реализуйте получение конфигурации
}
// Задача 9: Кастомное поведение объектов

// Задача: Создайте объект с кастомным преобразованием в примитивы

let temperature = {
    value: 25,
    unit: 'C',
    [Symbol.toPrimitive](hint) {
        // hint может быть: 'string', 'number', 'default'
        // Реализуйте логику преобразования
    }
};

console.log(String(temperature)); // "25°C"
console.log(temperature + 5);    // 30
// 🔗 Комбинированные задачи
// Задача 10: Безопасный парсер JSON

function safeJSONParse(str, defaultValue = {}) {
    try {
        return JSON.parse(str);
    } catch {
        return defaultValue;
    }
}

let response = safeJSONParse('{"user": {"profile": {"email": "test@test.com"}}}');

// Задача: Напишите функцию getSafeEmail(response) 
// которая использует опциональную цепочку для безопасного получения email
// Задача 11: Система прав доступа

const PERMISSIONS = {
    READ: Symbol('read'),
    WRITE: Symbol('write'), 
    ADMIN: Symbol('admin')
};

let user = {
    name: "John",
    [PERMISSIONS.READ]: true,
    [PERMISSIONS.WRITE]: false
};

// Задача: Напишите функцию checkPermission(user, permission)
// которая проверяет наличие права у пользователя
// Задача 12: Умный кэш с GC защитой

class SmartCache {
    constructor() {
        this.data = new WeakMap(); // Для автоматической очистки
        this.symbols = new Map();  // Для метаданных
    }
    
    // Задача: Реализуйте методы:
    // set(key, value) - сохраняет значение
    // get(key) - получает значение
    // has(key) - проверяет наличие
    // clearUnused() - очищает неиспользуемые данные
}