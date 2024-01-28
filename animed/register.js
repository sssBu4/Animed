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