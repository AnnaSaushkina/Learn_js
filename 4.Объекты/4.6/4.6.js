let user = {
    profile: {
        name: "Anna",
        settings: {
            theme: "dark"
        }
    }
};

let guest = null;

// Задача: безопасно получить theme или "default"
console.log(user?.profile?.settings?.theme ?? "default"); // "dark"
console.log(guest?.profile?.settings?.theme ?? "default"); // "default"





let cart = {
    items: [1, 2, 3],
    calculateTotal() {
        return this.items.reduce((sum, item) => sum + item, 0);
    }
};

let emptyCart = null;

// Задача: безопасно вызвать calculateTotal или вернуть 0
console.log(cart?.calculateTotal?.() ?? 0); // 6
console.log(emptyCart?.calculateTotal?.() ?? 0); // 0






let data = {
    users: [
        { name: "John", age: 25 },
        { name: "Jane", age: 30 }
    ]
};

let noData = null;

// Задача: безопасно получить имя первого пользователя или "No users"
console.log(data?.users?.[0]?.name ?? "No users"); // "John"
console.log(noData?.users?.[0]?.name ?? "No users"); // "No users"
console.log(data?.users?.[5]?.name ?? "No users"); // "No users"






let company = {
    getDepartment() {
        return {
            manager: {
                getContact() {
                    return { email: "boss@company.com" };
                }
            }
        };
    }
};

let startup = null;

// Задача: безопасно получить email
console.log(company?.getDepartment?.()?.manager?.getContact?.()?.email ?? "No email"); // "boss@company.com"
console.log(startup?.getDepartment?.()?.manager?.getContact?.()?.email ?? "No email"); // "No email"