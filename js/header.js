const toggle = document.querySelector(".darkmode-toggle");
const icon = toggle.querySelector("img");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Troca o ícone dependendo do modo
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "img/Icon Claro.svg";
    icon.alt = "Modo claro";
  } else {
    icon.src = "img/Icon escuro.svg";
    icon.alt = "Modo escuro";
  }
});