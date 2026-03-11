// Set — уникальные значения

// 1. Уникальные исполнители из массива задач
const tasks = [
  { assignee: "Аня", title: "Задача 1" },
  { assignee: "Паша", title: "Задача 2" },
  { assignee: "Аня", title: "Задача 3" },
];

const uniqueAssignees = [...new Set(tasks.map((task) => task.assignee))];
console.log(uniqueAssignees); // ["Аня", "Паша"]

// 2. Уникальные номера тикетов
const uniqueTickets = [...new Set(tasks.map((t) => t.ticketNumber).filter(Boolean))];

// 3. Поведение Set с объектами — сравнение по ссылке
const set = new Set();
const user = { name: "Аня" };
set.add(user);
set.add(user);            // игнорируется — та же ссылка
set.add({ name: "Аня" }); // добавится — другая ссылка
console.log(set.size);    // 2
