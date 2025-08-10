let fruits = ["🍏 Яблоко", "🍌 Банан", "🍊 Апельсин"];

function updateList() {
  const out = document.getElementById("output");
  out.innerHTML = `<p>Наш массив: ${fruits.join(", ")}</p>`;
}

function addFruit() {
  const input = document.getElementById("fruitInput");
  const value = input.value.trim();
  if (!value) return;         // пустые не добавляем
  fruits.push(value);
  input.value = "";
  updateList();
}

function removeFruit() {
  if (fruits.length) fruits.pop();
  updateList();
}

updateList();
