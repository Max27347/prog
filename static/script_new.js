document.addEventListener("DOMContentLoaded", function() {
  const menuButtons = document.querySelectorAll(".nav-button");
  const pages = document.querySelectorAll(".page");

  // Функция для скрытия всех страниц
  function hideAllPages() {
    pages.forEach(page => {
      page.style.display = "none"; // Скрываем все страницы
    });
  }

  // Функция для деактивации всех кнопок меню
  function deactivateAllButtons() {
    menuButtons.forEach(button => {
      button.classList.remove("active"); // Убираем активный класс
    });
  }

  // Обработчик кликов по кнопкам меню
  menuButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();

      // Деактивируем все кнопки
      deactivateAllButtons();

      // Активируем текущую кнопку
      this.classList.add("active");

      // Скрываем все страницы
      hideAllPages();

      // Получаем id страницы из атрибута data-page
      const pageId = this.getAttribute("data-page");

      // Отображаем нужную страницу
      const activePage = document.getElementById(pageId);
      activePage.style.display = "block"; // Показываем нужную страницу
    });
  });
});

// Менюшка
const menuIcon = document.getElementById('menu-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Переключение видимости меню при клике на картинку
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Предотвращаем всплытие события
  dropdownMenu.classList.toggle('active');
});

// Закрываем меню, если кликнули вне его
document.addEventListener('click', (event) => {
  if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('active');
  }
});