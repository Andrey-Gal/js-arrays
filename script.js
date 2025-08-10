let fruits = ["🍏 Яблоко", "🍌 Банан", "🍊 Апельсин"];
let sortAsc = true; // направление сортировки: true = A→Я, false = Я→A

function updateList() {
  const out = document.getElementById("output");
  out.innerHTML = `<p>Наш массив: ${fruits.join(", ")}</p>`;
  updateCounter();
}

function updateCounter() {
  const el = document.getElementById("counter");
  el.textContent = `В массиве: ${fruits.length} шт.`;
}

function addFruit() {
  const input = document.getElementById("fruitInput");
  const value = input.value.trim();
  if (!value) return;
  fruits.push(value);
  input.value = "";
  updateList();
}

function removeFruit() {
  if (fruits.length) fruits.pop();
  updateList();
}

function clearFruits() {
  fruits = [];
  updateList();
}

function toggleSort() {
  // копию сортируем, чтобы сравнение шло по строкам одинаково,
  // здесь сортируем сам массив — нормально для этой задачи
  fruits.sort((a, b) => a.localeCompare(b, "ru")); // A→Я
  if (!sortAsc) fruits.reverse();                  // Я→A
  sortAsc = !sortAsc;
  updateList();
}

updateList();
