// reduce — накопление результата

// 1. Подсчёт задач по исполнителям
function tasksSum(tasksArray) {
  return tasksArray.reduce((accumulator, task) => {
    if (accumulator[task.assignee]) {
      accumulator[task.assignee]++;
    } else {
      accumulator[task.assignee] = 1;
    }
    return accumulator;
  }, {});
}

// 2. Подсчёт задач по приоритетам
function priorityFilter(tasksArray) {
  return tasksArray.reduce((accumulator, task) => {
    if (accumulator[task.priority]) {
      accumulator[task.priority]++;
    } else {
      accumulator[task.priority] = 1;
    }
    return accumulator;
  }, {});
}

// Тест:
const tasks = [
  { assignee: "Аня", priority: "high" },
  { assignee: "Паша", priority: "low" },
  { assignee: "Аня", priority: "high" },
  { assignee: "Олег", priority: "medium" },
];

console.log(tasksSum(tasks));      // { Аня: 2, Паша: 1, Олег: 1 }
console.log(priorityFilter(tasks)); // { high: 2, low: 1, medium: 1 }
