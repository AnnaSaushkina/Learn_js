// Задача 1 — Подсчёт посещений страницы (Map)

function countVisits(pages) {
  const counts = new Map();

  for (const page of pages) {
    const current = counts.get(page) ?? 0;
    counts.set(page, current + 1);
  }
  return counts;
}

const pages = ['home', 'about', 'home', 'cart', 'home', 'about'];
console.log(countVisits(pages));
