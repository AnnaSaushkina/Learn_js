// Группировка через reduce — один паттерн, четыре вариации.
// Паттерн: если ключа нет, создать запись, потом прибавить.

// 1. Товары по категории: количество и сумма остатков
const products = [
  { id: 1, category: 'обувь', stock: 12 },
  { id: 2, category: 'одежда', stock: 30 },
  { id: 3, category: 'обувь', stock: 5 },
  { id: 4, category: 'аксессуары', stock: 8 },
];

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

console.log(groupByCategory(products));
// { обувь: { count: 2, stock: 17 }, одежда: { count: 1, stock: 30 }, аксессуары: { count: 1, stock: 8 } }

// 2. Заявки по приоритету: количество и суммарное время
const tickets = [
  { id: 1, priority: 'high', hours: 3 },
  { id: 2, priority: 'low', hours: 1 },
  { id: 3, priority: 'high', hours: 2 },
  { id: 4, priority: 'medium', hours: 4 },
  { id: 5, priority: 'low', hours: 1 },
];

function sortByPriority(tickets) {
  return tickets.reduce((acc, ticket) => {
    const key = ticket.priority;
    if (!acc[key]) {
      acc[key] = { count: 0, hours: 0 };
    }
    acc[key].count += 1;
    acc[key].hours += ticket.hours;
    return acc;
  }, {});
}

console.log(sortByPriority(tickets));
// { high: { count: 2, hours: 5 }, low: { count: 2, hours: 2 }, medium: { count: 1, hours: 4 } }

// 3. Платежи по методу оплаты: количество и сумма в копейках
const payments = [
  { id: 1, method: 'card', amountKop: 250000 },
  { id: 2, method: 'cash', amountKop: 50000 },
  { id: 3, method: 'card', amountKop: 199900 },
];

function sortByPayment(payments) {
  return payments.reduce((acc, payment) => {
    const key = payment.method;
    if (!acc[key]) {
      acc[key] = { count: 0, amountKop: 0 };
    }
    acc[key].count += 1;
    acc[key].amountKop += payment.amountKop;
    return acc;
  }, {});
}

console.log(sortByPayment(payments));
// { card: { count: 2, amountKop: 449900 }, cash: { count: 1, amountKop: 50000 } }

// 4. Составной ключ из двух полей: склад + статус
const stock = [
  { warehouse: 'msk', status: 'in_stock', qty: 10 },
  { warehouse: 'msk', status: 'in_stock', qty: 5 },
  { warehouse: 'spb', status: 'reserved', qty: 3 },
];

function groupByStock(stock) {
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

console.log(groupByStock(stock));
// { 'msk-in_stock': { count: 2, qty: 15 }, 'spb-reserved': { count: 1, qty: 3 } }
