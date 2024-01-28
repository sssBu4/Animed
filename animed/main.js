
/*Swiper*/
const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
           autoplay:  {
            delay: 5000,
           },
           el: ".swiper-pagination",
          clickable: true
        },
       
      });
      

    /*Panel Search*/

      document.getElementById('search-button').addEventListener('click', function () {
        search();
      });
      
      document.getElementById('search-input').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
          search();
        }
      });
      
      function search() {
        // Отримайте значення з поля введення
        var searchQuery = document.getElementById('search-input').value;
      
        // Виконайте логіку пошуку, наприклад, перейдіть на сторінку результатів пошуку
        // або виведіть результати на поточній сторінці
        // Ваш код обробки пошуку тут
        console.log('Пошук за запитом: ' + searchQuery);
      }
      