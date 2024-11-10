const swiper = new Swiper(".mySwiper", {
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          const pedd = 50;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - pedd;

          window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
          });
      }
  });
});
