// Задача к встрече: построить дерево из плоского списка.
// Дан плоский список категорий с parentId (null — корень).

const categories = [
  { id: 1, name: 'Электроника', parentId: null },
  { id: 2, name: 'Телефоны', parentId: 1 },
  { id: 3, name: 'Ноутбуки', parentId: 1 },
  { id: 4, name: 'Одежда', parentId: null },
  { id: 5, name: 'Мужская', parentId: 4 },
];

// Нужно: у каждого узла появляется поле children — массив его детей.
// Ожидается:
// [
//   { id: 1, name: 'Электроника', parentId: null, children: [
//       { id: 2, name: 'Телефоны', parentId: 1, children: [] },
//       { id: 3, name: 'Ноутбуки', parentId: 1, children: [] },
//   ]},
//   { id: 4, name: 'Одежда', parentId: null, children: [
//       { id: 5, name: 'Мужская', parentId: 4, children: [] },
//   ]},
// ]

function buildTree(list) {
  // не решала
}

console.log(JSON.stringify(buildTree(categories), null, 2));
