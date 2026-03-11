// Фильтрация задач

// 1. Только активные задачи
function onlyActive(tasksArray) {
  const activeTasks = tasksArray.filter((el) => el.completed === false);
  return activeTasks;
}

// Короткая запись:
const onlyActiveShort = (tasksArray) => tasksArray.filter((el) => !el.completed);

// 2. Только задачи с высоким приоритетом
function justHighStatus(tasksArray) {
  return tasksArray.filter((el) => el.priority === "high");
}

// Тест:
const tasks = [
  { title: "Задача 1", completed: false, priority: "high" },
  { title: "Задача 2", completed: true, priority: "low" },
  { title: "Задача 3", completed: false, priority: "medium" },
];

console.log(onlyActive(tasks));     // Задача 1 и Задача 3
console.log(justHighStatus(tasks)); // Задача 1
