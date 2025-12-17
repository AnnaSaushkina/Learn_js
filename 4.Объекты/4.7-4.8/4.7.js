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

