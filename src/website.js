import loadHome from './home';
import loadAbout from './about';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const logo = document.createElement('img');
  logo.classList.add('logo');

  header.appendChild(logo);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const homeButton = document.createElement('button');
  homeButton.classList.add('button-nav', 'active');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    resetNav(homeButton);
    loadHome();
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('button-nav');
  menuButton.textContent = 'Carte';
  menuButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    resetNav(menuButton);
    // createMenu();
  });

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('button-nav');
  aboutButton.textContent = 'Our Story';
  aboutButton.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    resetNav(aboutButton);
    loadAbout();
  });

  nav.append(homeButton, menuButton, aboutButton);

  return nav;
}

function resetNav(clickedButton) {
  const navButtons = document.querySelectorAll('.button-nav');

  navButtons.forEach((button) => {
    button.classList.remove('active');
  });

  clickedButton.classList.add('active');
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('main');
  main.setAttribute('id', 'main');

  // loadHome();

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  // const copyright = document.createElement('p');
  // copyright.textContent = 'Omkar';

  footer.append(createNav());

  return footer;
}

export default function loadInitiatlPage() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();
}
