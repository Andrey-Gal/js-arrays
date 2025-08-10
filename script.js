// Полный список для рандомных кнопок
const allFruits = [
  "🍎 Яблоко","🍏 Яблоко зелёное","🍌 Банан","🍊 Апельсин","🍋 Лимон",
  "🍐 Груша","🍑 Персик","🍒 Вишня","🍓 Клубника","🍍 Ананас",
  "🥝 Киви","🍇 Виноград","🍈 Дыня","🍉 Арбуз","🥭 Манго"
];

// Состояние
let fruits = ["🍏 Яблоко","🍌 Банан","🍊 Апельсин"];
let sortAscending = true;
const autoSortAfterAdd = true;

// DOM
const output  = document.getElementById("output");
const counter = document.getElementById("counter");
const input   = document.getElementById("fruitInput");
const choices = document.getElementById("choices");
const sortBtn = document.getElementById("sortBtn");

// Делегирование кликов по быстрым кнопкам (вешаем ОДИН раз)
choices.addEventListener("click", (e) => {
  const btn = e.target.closest(".quick-btn");
  if (!btn) return;
  addFruit(btn.dataset.fruit);
});

// Инициализация
generateChoices();
updateList();

function updateList(highlightLast = false) {
  output.innerHTML = fruits
    .map(f => `<span class="fruit-item">${f}</span>`)
    .join("");

  counter.textContent = `В массиве: ${fruits.length} шт.`;

  if (highlightLast && output.lastElementChild) {
    const el = output.lastElementChild;
    el.classList.add("bounce");
    el.addEventListener("animationend", () => el.classList.remove("bounce"), { once: true });
  }
}

function addFruit(valueFromBtn) {
  const value = (valueFromBtn ?? input.value).trim();
  if (!value) return;

  fruits.push(value);
  input.value = "";

  if (autoSortAfterAdd) sortNow(false);
  updateList(true);
}

function removeFruit() {
  if (fruits.length) {
    fruits.pop();
    updateList();
  }
}

function clearFruits() {
  fruits = [];
  updateList();
}

function toggleSort() {
  sortAscending = !sortAscending;
  sortNow();
}

function normalize(s) {
  // убираем всё, что не буква, и в нижний регистр
  return s.replace(/[^\p{Letter}]+/gu, "").toLowerCase();
}

function sortNow(forceUpdate = true) {
  fruits.sort((a, b) => {
    const A = normalize(a);
    const B = normalize(b);
    return sortAscending
      ? A.localeCompare(B, "ru")
      : B.localeCompare(A, "ru");
  });

  sortBtn.textContent = sortAscending ? "Сортировать A→Я" : "Сортировать Я→A";
  if (forceUpdate) updateList();
}


// Рандомные быстрые кнопки
function generateChoices() {
  const picked = pickRandomUnique(allFruits, 5);
  choices.innerHTML = picked
    .map(f => `<button type="button" class="quick-btn" data-fruit="${f}">${f}</button>`)
    .join("");
}

function pickRandomUnique(arr, count) {
  const pool = [...arr];
  const out = [];
  while (pool.length && out.length < count) {
    const i = Math.floor(Math.random() * pool.length);
    out.push(pool.splice(i, 1)[0]);
  }
  return out;
}
