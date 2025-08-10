// === Массивы в JavaScript — базовое знакомство ===

// Создаём массив
let fruits = ["яблоко", "банан", "апельсин"];

// Выводим весь массив
console.log("Все фрукты:", fruits);

// Доступ к элементу по индексу
console.log("Первый фрукт:", fruits[0]); // яблоко
console.log("Последний фрукт:", fruits[fruits.length - 1]); // апельсин

// Добавление элемента в конец
fruits.push("груша");
console.log("После добавления:", fruits);

// Удаление последнего элемента
let removedFruit = fruits.pop();
console.log("Удалили:", removedFruit);
console.log("После удаления:", fruits);

// Добавление в начало
fruits.unshift("манго");
console.log("Добавили в начало:", fruits);

// Удаление первого элемента
let firstRemoved = fruits.shift();
console.log("Удалили первый:", firstRemoved);
console.log("После удаления первого:", fruits);
