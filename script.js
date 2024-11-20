// Добавить новое поле для ввода оценки
document.getElementById("add-grade").addEventListener("click", function () {
    const container = document.getElementById("grades-container");
    const inputCount = container.children.length + 1;
    const input = document.createElement("input");
  
    input.type = "number";
    input.className = "grade";
    input.min = "1";
    input.max = "5";
    input.required = true;
  
    container.appendChild(input);
  });
  
  // Удалить последнее поле для ввода оценки
  document.getElementById("remove-grade").addEventListener("click", function () {
    const container = document.getElementById("grades-container");
    if (container.children.length > 2) {
      container.removeChild(container.lastChild);
    }
  });
  
  // Обработка формы
  document.getElementById("grades-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Получить все введенные оценки
    const gradeInputs = document.querySelectorAll(".grade");
    const grades = Array.from(gradeInputs).map(input => parseInt(input.value, 10));
  
    // Проверка корректности ввода
    if (grades.some(grade => isNaN(grade) || grade < 1 || grade > 5)) {
      document.getElementById("result").innerText = "Пожалуйста, введите корректные оценки (от 1 до 5).";
      return;
    }
  
    // Рассчитать среднюю оценку
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / grades.length;
    const roundedAverage = Math.round(average);
  
    // Вывод результата
    document.getElementById("result").innerText = 
      `Средняя оценка: ${average.toFixed(2)}. Итоговая оценка (округленная): ${roundedAverage}.`;
  });