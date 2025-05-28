/* ========================================
   Inicialização (entry point)
   ======================================== */

/* ========================================
   LocalStorage: Carregar preferências salvas
   ======================================== */

/* ========================================
   Dark Mode
   ======================================== */

/* ========================================
   Botões de Aumentar/Diminuir Fonte
   ======================================== */

/* ========================================
   Scroll Animation
   ======================================== */

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
