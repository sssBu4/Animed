document.addEventListener('DOMContentLoaded', function () {
    // Ініціалізація Swiper для основного контенту
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
  
    // Ініціалізація Swiper для обкладинок аніме
    const swiperPop = new Swiper(".mySwiper-pop", {
      slidesPerView: 5,  // Кількість видимих слайдів
      spaceBetween: 25,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
    var appendNumber = 4;
    var prependNumber = 1;
  
    // Додавання слайдів
    document.querySelector(".prepend-2-slides").addEventListener("click", function (e) {
      e.preventDefault();
      swiperPop.prependSlide([
        '<div class="swiper-slide-pop">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide-pop">Slide ' + --prependNumber + "</div>",
      ]);
    });
  
    document.querySelector(".prepend-slide").addEventListener("click", function (e) {
      e.preventDefault();
      swiperPop.prependSlide(
        '<div class="swiper-slide-pop">Slide ' + --prependNumber + "</div>"
      );
    });
  
    document.querySelector(".append-slide").addEventListener("click", function (e) {
      e.preventDefault();
      swiperPop.appendSlide(
        '<div class="swiper-slide-pop">Slide ' + ++appendNumber + "</div>"
      );
    });
  
    document.querySelector(".append-2-slides").addEventListener("click", function (e) {
      e.preventDefault();
      swiperPop.appendSlide([
        '<div class="swiper-slide-pop">Slide ' + ++appendNumber + "</div>",
        '<div class="swiper-slide-pop">Slide ' + ++appendNumber + "</div>",
      ]);
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
