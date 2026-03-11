# async / await

Нужен не из-за многопользовательского режима, а потому что **запрос к серверу занимает время**.

`await` говорит — подожди пока придёт ответ, потом продолжай. Без него `created` был бы `Promise`, а не реальными данными.

```ts
// Без await — ошибка
const created = api.createTask(task); // created = Promise
setTasks([...tasks, created]);        // не данные

// С await — правильно
const created = await api.createTask(task); // ждём ответа
setTasks((prev) => [...prev, created]);     // теперь реальные данные
```
