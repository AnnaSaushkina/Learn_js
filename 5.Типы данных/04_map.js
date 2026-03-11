// Map — коллекция ключ-значение

// 1. Основные методы
const map = new Map();
map.set("Аня", 1);
map.set("Аня", 5);   // перезапишет — не создаст новый ключ
map.get("Аня");       // 5
map.has("Паша");      // false
map.size;             // 1

// 2. Счётчик через Map
const counter = new Map();
counter.set("count", 0);
counter.set("count", counter.get("count") + 1); // 0 -> 1
counter.set("count", counter.get("count") + 1); // 1 -> 2
console.log(counter.get("count")); // 2

// 3. Кэш задач по id
const cache = new Map();

function getTask(id, fetchFromServer) {
  if (cache.has(id)) return cache.get(id); // берём из кэша
  const task = fetchFromServer(id);         // идём на сервер
  cache.set(id, task);                      // кладём в кэш
  return task;
}
