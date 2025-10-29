// ⛓️ Опциональная цепочка
// Задача 4: Безопасный доступ к данным

let company = {
    departments: [
        {
            name: "Development",
            manager: {
                name: "Alice",
                contact: {
                    email: "alice@company.com",
                    phone: "+123456789"
                }
            }
        },
        {
            name: "Marketing", 
            manager: {
                name: "Bob"
                // Нет contact!
            }
        }
    ]
};

// Задача: Напишите функцию getManagerEmail(deptIndex)
// которая безопасно возвращает email менеджера или "No email"
// Задача 5: Динамический вызов методов

let user = {
    profile: {
        save() { return "Profile saved"; }
    }
};

let admin = null;

// Задача: Безопасно вызвать метод save если он существует
// Реализуйте функцию safeSave(userObj)
// Задача 6: Обработка API-ответов

let apiResponse = {
    data: {
        users: [
            { id: 1, address: { city: "Moscow" } },
            { id: 2 }, // Нет address
            { id: 3, address: null }
        ]
    }
};

// Задача: Получите массив городов, пропуская пользователей без адреса