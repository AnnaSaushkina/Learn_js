// Задача 4: Работа с объектами
const obj = {
    name: '',
    age: 0,
    address: null
};

console.log('12 ===', obj.name || 'Unnamed');// 'Unnamed'
console.log('13 ===', obj.age || 18);// 18
console.log('14 ===', obj.address && obj.address.street);// null

// Задача 5: Напишите функцию, которая безопасно извлекает вложенное значение из объекта
function safeGet(obj, path) {
    // Ваш код
}

const data = {
    user: {
        address: {
            street: 'Main'
        }
    }
};

console.log('15 ===', safeGet(data, 'user.address.street')); // 'Main'
console.log('16 ===', safeGet(data, 'user.contacts.phone')); // undefined