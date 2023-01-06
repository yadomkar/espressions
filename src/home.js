import { createTimingContainer } from './commonElements';

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

  home.append(
    title,
    quote,
    createTimingContainer('We are open 7 \n days a week')
  );

  return home;
}

export default function loadHome() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.style.backgroundImage = `url('static_files/images/background_bw.jpg')`;
  main.appendChild(createHome());
}
