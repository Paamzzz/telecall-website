// Pega o header e o footer da página
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Carrega o arquivo header.html
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    header.innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o header:', error));

// Carrega o arquivo footer.html
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o footer:', error));
