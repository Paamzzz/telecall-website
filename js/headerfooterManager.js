// Pega o header e o footer da página
const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Carrega o arquivo header.html
fetch('../components/header.html')
  .then(response => response.text())
  .then(data => {
    header.innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o header:', error));

// Carrega o arquivo footer.html
fetch('../components/footer.html')
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar o footer:', error));


  
// descobri que o carregamento do footer está bugando os 'nav-links'do header.  veja isso!!!