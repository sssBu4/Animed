document.addEventListener('DOMContentLoaded', function () {
  // Ініціалізація Swiper
  const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 3500,
          disableOnInteraction: false
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      }
  });

  // Панель пошуку
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.querySelector('.menu-btn');

  if (searchContainer && searchInput && searchButton) {
      // Функція для пошуку
      function search() {
          const searchQuery = searchInput.value;
          console.log('Пошук за запитом: ' + searchQuery);
      }

      // Додаємо обробник подій для кнопки
      searchButton.addEventListener('click', search);

      // Додаємо обробник подій для натискання Enter у полі введення
      searchInput.addEventListener('keyup', function(event) {
          if (event.key === 'Enter') {
              search();
          }
      });

      // Додаємо/видаляємо клас при фокусуванні/втраті фокусу
      function addFocusClass() {
          searchContainer.classList.add('focus-within');
      }

      function removeFocusClass() {
          searchContainer.classList.remove('focus-within');
      }

      searchInput.addEventListener('focus', addFocusClass);
      searchInput.addEventListener('blur', removeFocusClass);

      searchButton.addEventListener('focus', addFocusClass);
      searchButton.addEventListener('blur', removeFocusClass);
  }
});