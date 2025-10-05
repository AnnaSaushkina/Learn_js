// Корзина товаров (рандомный массив)
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


// 1. Проверка товара на наличие и вывод его статуса

function findingItem() {
  console.log('---Весь каталог:')
  for (item of products) {
    let productName = item.name
    let productPrice = item.price

 
    if (item.inStock) {
     console.log(productName + ' Цена: ' + productPrice + ' (В наличии)')
    } else console.log(productName + ' Цена: ' + productPrice + ' (Нет в наличии)')

  } 
}
findingItem(products)


// // 2. Добавлять товары в корзину по индексу товара
let basketOfGoods = []
let arrayOfPrices = []

function addItem(wantedToBuyId) {

   let foundedItem = null
   let itemPrice = null

   for (let index = 0; index < products.length; index++) {
    if (wantedToBuyId === products[index].id) {
     foundedItem = products[index].name

     basketOfGoods.push(foundedItem)

      //  цена
      itemPrice = products[index].price
     arrayOfPrices.push(itemPrice)
    

     console.log('---Добавлено в корзину: ' + basketOfGoods + "\n")
    
     break;
    } 
   }
   
}
addItem(4)
addItem(5)
addItem(1)
console.log(basketOfGoods)

// 3. Считать общую стоимость
function calculating() {
  let totalSum = arrayOfPrices.reduce((a,b) => a + b)
  console.log('---Итоговая сумма: ' + totalSum + '$')
  return totalSum
}
calculating(arrayOfPrices)


 // 4. Удалять коненкретный товар
function deleteItem(products, basketOfGoods,deletedIndex) {

  let deletedItem

  for (product of products) {
    if (product.id === deletedIndex) {
      deletedItem = product.name
    }

  }

  basketOfGoods.splice(deletedItem, 1)
   console.log('---Удалили: ' + deletedItem)
  console.log(basketOfGoods)
}
deleteItem(products, basketOfGoods, 5)



