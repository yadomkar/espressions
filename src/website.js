import loadHome from './home';
import loadAbout from './about';
import loadMenu from './menu';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.setAttribute('id', 'header');

  const logo = document.createElement('img');
  logo.classList.add('logo');

  header.append(logo, createNav(), createAddressInfo());

  return header;
}

function createAddressInfo() {
  const addressInfo = document.createElement('div');
  addressInfo.classList.add('address-info');
  addressInfo.textContent = 'Cooke Town,\nBangalore';

  return addressInfo;
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
    loadMenu();
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

  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  // const copyright = document.createElement('p');
  // copyright.textContent = 'Omkar';

  footer.append(createNav(), createAddressInfo());

  return footer;
}

export default function loadInitiatlPage() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  loadHome();
}
