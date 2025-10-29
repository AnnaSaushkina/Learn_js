// 🗑️ Сборка мусора
// Задача 1: Анализ достижимости
javascript
let obj1 = { name: "obj1" };
let obj2 = { name: "obj2" };

obj1.ref = obj2;
obj2.ref = obj1;

let container = { objects: [obj1, obj2] };

// Вопрос: Что будет с obj1 и obj2 после выполнения?
container = null;
obj1 = null;
obj2 = null;



// Задача 2: Циклические ссылки

function createIsland() {
    let a = { data: "A" };
    let b = { data: "B" };
    let c = { data: "C" };
    
    a.next = b;
    b.next = c; 
    c.next = a; // Цикл!
    
    return a;
}

let island = createIsland();
// Вопрос: Что произойдет при island = null?



// Задача 3: Утечка памяти

let elements = [];
function createLeak() {
    let hugeArray = new Array(1000000).fill("data");
    elements.push({
        data: hugeArray,
        timestamp: Date.now()
    });
}
// Вопрос: В чем проблема этого кода?