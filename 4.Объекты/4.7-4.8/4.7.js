// ### Задача 1: Счетчик вызовов для методов

// Создай объект, который будет подсчитывать, сколько раз вызывался каждый его метод
// Используй Symbol для хранения счетчиков
let num = Symbol('count')

let counter = {

    [num]: {
        method1: 0,
    },

    method1() {
        this[num]["method1"]++;
        return this[num]['method1']
    }
}
console.log(counter.method1())
console.log(counter.method1())




// 2. Создать логгер с историей который:
// Хранит историю всех вызовов методов через Symbol
// Имеет методы: log(message), warn(message), error(message)
// Каждый вызов добавляет запись в историю
// Метод getHistory() возвращает всю историю
const HISTORY = Symbol('history');

const logger = {
    [HISTORY]: [],

    log(msg) {
        let entry = {
            type: 'log',
            message: msg,
        };

        this[HISTORY].push(entry)

    },

    warn(msg) {
        let entry = {
            type: 'warn',
            message: msg
        };

        this[HISTORY].push(entry)
    },

    error(msg) {
        let entry = {
            type: 'error',
            message: msg
        };

        this[HISTORY].push(entry)
    },


    getHistory() {
        return [...this[HISTORY]]
    }
};

logger.log("Привет");
logger.warn("Внимание!");
console.log(logger.getHistory());