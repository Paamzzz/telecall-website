/* ========================================
   Dark Mode
   ======================================== */

let darkmode = localStorage.getItem('darkmode');
const darkModeToggle = document.getElementById('darkmode-toggle');
const darkModeIcon = document.getElementById('darkmode-icon')

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'enabled');
  darkModeIcon.src = 'assets/icons/icon-claro.svg'; // Atualiza o ícone para o sol
}
const disableDarkMode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null);
  darkModeIcon.src = 'assets/icons/icon-escuro.svg'; // Atualiza o ícone para a lua
}


if (darkmode === 'enabled') {
  enableDarkMode();
}
else {
  disableDarkMode();
} 

darkModeToggle.addEventListener('click', () => {
  // Aqui está a correção: atualizar a variável com o novo valor
  darkmode = localStorage.getItem('darkmode');

  if (darkmode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

/* ========================================
   Botões de Aumentar/Diminuir Fonte
   ======================================== */

/* ========================================
   Scroll Animation
   ======================================== */
   
  //  HERO ANIMATION
   ScrollReveal().reveal('.hero-left', {
    origin: 'bottom',
    duration: 900,
    distance: '50px',
    delay: 500,
    interval: 100,
  });

  ScrollReveal().reveal('.hero-right', {
    origin: 'bottom',
    duration: 900,
    distance: '80px',
    easing: 'ease-in-out',
    delay: 400,
  });

    //  CARROUSEL ANIMATION
  ScrollReveal().reveal('#carrousel', {
    origin: 'bottom',
    duration: 900,
    scale: 0.9,
    distance: '100px',
    delay: 800,
  });

    //  CPAAS ANIMATION
  ScrollReveal().reveal('.cpaas-img', {
    origin: 'left',
    duration: 900,
    distance: '100px',
    delay: 700,
  });

  ScrollReveal().reveal('.cpaas-right', {
    origin: 'right',
    duration: 900,
    distance: '100px',
    delay: 700,
  });

    //  SOLUÇÕES ANIMATION
  ScrollReveal().reveal('#solucoes .title', {
    origin: 'bottom',
    duration: 900,
    distance: '100px',
    delay: 500,
  });

  ScrollReveal().reveal('#solucoes .text', {
    origin: 'bottom',
    duration: 900,
    distance: '100px',
    delay: 700,
  });

  ScrollReveal().reveal('#solucoes .card', {
    origin: 'bottom',
    duration: 900,
    distance: '100px',
    delay: 1200,
    interval: 300,
    scale: 0.9,
  });

  ScrollReveal().reveal('#planos', {
    origin: 'bottom',
    duration: 900,
    distance: '100px',
    scale: 1.5,
    delay: 300,
  })

  ScrollReveal().reveal('#suporte .title', {
    origin: 'bottom',
    duration: 900,
    distance: '100px',
    delay: 500,
    interval: 300,
  });

  ScrollReveal().reveal('#suporte .row', {
    origin: 'bottom',
    duration: 900,
    distance: '100px',
    delay: 900,
    interval: 300,
  });

/* ========================================
    Scrollpy
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function activateNavLinkOnScroll() {
      let currentSection = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", activateNavLinkOnScroll);
    activateNavLinkOnScroll(); 
  });
