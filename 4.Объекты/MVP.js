// Корзина товаров
const products = [
  {
    id: 1,
    name: "iPhone 13",
    price: 799,
    category: "Смартфоны",
    image: "iphone13.jpg",
    inStock: true
  },
  {
    id: 2, 
    name: "Samsung Galaxy S21",
    price: 699,
    category: "Смартфоны",
    image: "galaxy-s21.jpg",
    inStock: true
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249,
    category: "Наушники", 
    image: "airpods-pro.jpg",
    inStock: true
  },
  {
    id: 4,
    name: "MacBook Air",
    price: 999,
    category: "Ноутбуки",
    image: "macbook-air.jpg", 
    inStock: false
  },
  {
    id: 5,
    name: "iPad Air",
    price: 599,
    category: "Планшеты",
    image: "ipad-air.jpg",
    inStock: true
  },
  {
    id: 6,
    name: "Apple Watch",
    price: 399,
    category: "Гаджеты",
    image: "apple-watch.jpg",
    inStock: true
  }
];

const basketOfGoods = {}

// -Интерфейс

// 1. Вводить/находить нужный товар
function findingItem(items = products) {
    let product = items.forEach((item, index) => {
        console.log(item, `Номер новара: ${index}`)
    })
    let productId = items.product
    let productName
    let productPrice
    let productCategory
    let productInStock
    return product
}
findingItem()
// 2. Добавлять товары и онформацию о нем

// 3. Выводить товары в список
function showInfo() {} 
// 4. Удалять коненкретный товар
function deleteItem() {}
// 5. Увеличивать и уменьшать количество товаров
function changingQuantity() {}
// 6. Считать сумму всех товаров
function calculating() {}
// 7. Очищать корзину
function addingInfo() {}
// 8. Выводить сообщение о покупке
function purchase() {}













