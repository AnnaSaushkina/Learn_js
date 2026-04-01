# Деструктуризация

## Объект

```ts
const task = { title: "Баг", priority: "high", assignee: "Аня" };

const { title, priority } = task;
console.log(title);    // "Баг"
console.log(priority); // "high"
```

## Массив

```ts
const [first, second] = ["Аня", "Паша"];
console.log(first); // "Аня"
```

## Пропуск элементов массива

```ts
const [first, , third] = [10, 20, 30];
// first = 10, third = 30
```

## Переименование при деструктуризации

```ts
const { title: taskTitle, assignee: developer } = task;
console.log(taskTitle);  // "Баг"
console.log(developer);  // "Аня"
```

## Дефолтные значения

Срабатывают если ключ отсутствует или `undefined`. Никакого `if` не нужно:

```ts
const { priority = "low", assignee = "не назначен" } = task;
```

## Деструктуризация в параметрах функции

```ts
// Вместо:
function TaskItem(props) {
  return props.task.title;
}

// Пишем:
function TaskItem({ task, onDelete }) {
  return task.title;
}
```

## Дефолтные значения в параметрах

```ts
function actualStatus({ priority = "low", assignee = "не назначен" }) {
  return `${assignee} — ${priority}`;
}

actualStatus({});                          // "не назначен — low"
actualStatus({ priority: "high", assignee: "Аня" }); // "Аня — high"
```

## Вложенная деструктуризация

```ts
const response = {
  status: 200,
  data: {
    user: {
      name: "Аня",
      role: "junior"
    }
  }
};

const { data: { user: { name, role } } } = response;
// name = "Аня", role = "junior"
```
