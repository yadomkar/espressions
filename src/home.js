function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');
  home.setAttribute('id', 'home');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = 'Espressions';

  const quote = document.createElement('h1');
  quote.classList.add('quote');
  quote.textContent = 'Coffee, then the world.';

  const timingContainer = document.createElement('div');
  timingContainer.classList.add('timing-container');

  const days = document.createElement('p');
  days.classList.add('days');
  days.textContent = 'We are open 7 \n days a week';

  const timing = document.createElement('p');
  timing.classList.add('timing');
  timing.textContent = '8AM - 9PM';

  timingContainer.append(days, timing);
  home.append(title, quote, timingContainer);

  return home;
}

export default function loadHome() {
  const body = document.getElementsByTagName('body');
  body[0].style.backgroundImage = `url('static_files/images/background_bw.jpg')`;
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createHome());
}
