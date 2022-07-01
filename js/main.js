const accordions = document.querySelectorAll('.accordion-header');


accordions.forEach((btn) => {
   btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      panel.classList.toggle('active')
      btn.classList.toggle('active');

   })
})

