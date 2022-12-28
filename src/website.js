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
  homeButton.classList.add('button');
  homeButton.textContent = 'Home';

  const menuButton = document.createElement('button');
  menuButton.classList.add('button');
  menuButton.textContent = 'Menu';

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('button');
  aboutButton.textContent = 'About';

  nav.append(homeButton, menuButton, aboutButton);

  return nav;
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

  const copyright = document.createElement('p');
  copyright.textContent = 'Omkar';

  footer.appendChild(copyright);

  return footer;
}

export default function initialPageLoad() {
  const content = document.querySelector('#content');

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}
