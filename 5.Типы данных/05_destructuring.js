// Деструктуризация — упражнения

// 1. Базовая деструктуризация объекта
const task = { title: "Баг", priority: "high", assignee: "Аня" };
const { title, assignee } = task;
console.log(title, assignee); // "Баг" "Аня"

// 2. Деструктуризация массива — первый и последний элемент
function fromArray(arr) {
  const [first] = arr;
  const last = arr[arr.length - 1];
  return [first, last];
}
console.log(fromArray([10, 20, 30, 40])); // [10, 40]

// 3. Пропуск элементов
function jumpFromElement(arr) {
  const [first, , third] = arr;
  return [first, third];
}
console.log(jumpFromElement([10, 20, 30, 40])); // [10, 30]

// 4. Дефолтные значения в параметрах
function actualStatus({ priority = "low", assignee = "не назначен" }) {
  return `${assignee} — ${priority}`;
}
console.log(actualStatus({}));                              // "не назначен — low"
console.log(actualStatus({ priority: "high", assignee: "Аня" })); // "Аня — high"

// 5. Отчёт по задаче
function report({ title, assignee = "не назначен", priority = "low" }) {
  return `${assignee} — ${title} (${priority})`;
}
console.log(report({ title: "Баг", assignee: "Аня", priority: "high" }));
// "Аня — Баг (high)"

// 6. Вложенная деструктуризация
const response = {
  status: 200,
  data: {
    user: {
      name: "Аня",
      role: "junior",
    },
  },
};
const { data: { user: { name, role } } } = response;
console.log(name, role); // "Аня" "junior"
