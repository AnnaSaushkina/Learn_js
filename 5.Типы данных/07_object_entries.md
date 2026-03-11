# Object.keys / values / entries

```ts
const task = { title: "Баг", priority: "high", assignee: "Аня" };

Object.keys(task)    // ["title", "priority", "assignee"]
Object.values(task)  // ["Баг", "high", "Аня"]
Object.entries(task) // [["title", "Баг"], ["priority", "high"], ["assignee", "Аня"]]
```

**Реальный кейс — найти все заполненные поля задачи:**

```ts
const filled = Object.entries(task)
  .filter(([key, value]) => value !== null && value !== undefined)
  .map(([key]) => key);
// ["title", "priority", "assignee"]
```

Если поле отсутствует в объекте — оно просто не попадёт в массив `entries`.
