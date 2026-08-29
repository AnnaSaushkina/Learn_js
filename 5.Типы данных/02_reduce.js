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

// 3. Группировка товаров по категории — количество и сумма остатков
function groupByCategory(products) {
  return products.reduce((result, product) => {
    if (!result[product.category]) {
      result[product.category] = { count: 0, stock: 0 };
    }
    result[product.category].count += 1;
    result[product.category].stock += product.stock;
    return result;
  }, {});
}

// 4. Группировка заявок по приоритету — количество и суммарные часы
function groupByPriority(tickets) {
  return tickets.reduce((acc, ticket) => {
    if (!acc[ticket.priority]) {
      acc[ticket.priority] = { count: 0, hours: 0 };
    }
    acc[ticket.priority].count += 1;
    acc[ticket.priority].hours += ticket.hours;
    return acc;
  }, {});
}

// 5. Группировка платежей по способу оплаты — количество и сумма в копейках
function groupByMethod(payments) {
  return payments.reduce((acc, payment) => {
    if (!acc[payment.method]) {
      acc[payment.method] = { count: 0, amountKop: 0 };
    }
    acc[payment.method].count += 1;
    acc[payment.method].amountKop += payment.amountKop;
    return acc;
  }, {});
}

// 6. Группировка по составному ключу (склад + статус) — количество и сумма
function groupByWarehouseStatus(stock) {
  return stock.reduce((result, order) => {
    const key = `${order.warehouse}-${order.status}`;
    if (!result[key]) {
      result[key] = { count: 0, qty: 0 };
    }
    result[key].count += 1;
    result[key].qty += order.qty;
    return result;
  }, {});
}

const products = [
  { id: 1, category: "обувь", stock: 12 },
  { id: 2, category: "одежда", stock: 30 },
  { id: 3, category: "обувь", stock: 5 },
  { id: 4, category: "аксессуары", stock: 8 },
];
const tickets2 = [
  { id: 1, priority: "high", hours: 3 },
  { id: 2, priority: "low", hours: 1 },
  { id: 3, priority: "high", hours: 2 },
  { id: 4, priority: "medium", hours: 4 },
  { id: 5, priority: "low", hours: 1 },
];
const payments = [
  { id: 1, method: "card", amountKop: 250000 },
  { id: 2, method: "cash", amountKop: 50000 },
  { id: 3, method: "card", amountKop: 199900 },
];
const stock = [
  { warehouse: "msk", status: "in_stock", qty: 10 },
  { warehouse: "msk", status: "in_stock", qty: 5 },
  { warehouse: "spb", status: "reserved", qty: 3 },
];

console.log(groupByCategory(products));         // { обувь: {count:2, stock:17}, одежда: {count:1, stock:30}, аксессуары: {count:1, stock:8} }
console.log(groupByPriority(tickets2));          // { high: {count:2, hours:5}, low: {count:2, hours:2}, medium: {count:1, hours:4} }
console.log(groupByMethod(payments));            // { card: {count:2, amountKop:449900}, cash: {count:1, amountKop:50000} }
console.log(groupByWarehouseStatus(stock));      // { 'msk-in_stock': {count:2, qty:15}, 'spb-reserved': {count:1, qty:3} }
