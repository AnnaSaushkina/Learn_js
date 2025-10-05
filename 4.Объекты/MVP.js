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

const basketOfGoods = {}

// 1. Вводить/находить нужный товар
function findingItem() {
  console.log("Доступные товары:");
  
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let status;
    if (product.inStock === true) {
      status = "В наличии";
    } else {
      status = "Нет в наличии";
    }
    
    console.log("ID: " + product.id + "; " + product.name + " - $" + product.price + " (" + status + ")");
  }
}

// // 2. Добавлять товары и онформацию о нем
function addItem(productId) {

  let foundProduct = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      foundProduct = products[i];
      basketOfGoods[productId] = productId;
      break; 
    }
  }
  
  console.log("---Выбираем: " + foundProduct.name);
  return true;
}

// // 3. Выводить сообщение о покупке
function purchase() {
  console.log("---Добавлено в корзину:");
  
  let basketKeys = Object.keys(basketOfGoods);
  let total = 0; 
  
  for (let i = 0; i < basketKeys.length; i++) {
    let productId = basketKeys[i]; 
    
    let product = null;
    for (let j = 0; j < products.length; j++) {
      if (products[j].id === parseInt(productId)) {
        product = products[j];
        break; 
      }
    }

    // Подсчет суммы
    if (product !== null) {
      let calculating = product.price; 
      total = total + calculating; 
      
      console.log(product.name + " - $" + calculating);
    }
  }
  
  console.log("---Сумма: $" + total);
}

// // 4. Удалять коненкретный товар
function deleteItem(productId) {
  if (basketOfGoods[productId]) {
    const product = products.find(prod => prod.id === productId);
    console.log(`Удалили: ${product.name}`);
    delete basketOfGoods[productId];
    return true;
  } else return false
}



// Проверки
function demo() {
  findingItem();
  addItem(1); // iPhone 13
  addItem(3); // AirPods Pro
  addItem(5); // iPad Air
  
  purchase();

  deleteItem(3) // Удалили
  purchase();
}

demo();










