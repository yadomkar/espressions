import {
  createPageTitleContainer,
  createTimingContainer,
} from './commonElements';

function createMenu() {}

export default function loadMenu() {
  // const body = document.getElementsByTagName('body');
  // body[0].style.backgroundImage = `url('static_files/images/about_bg.jpg')`;
  const main = document.querySelector('#main');
  main.style.backgroundImage = 'none';
  main.textContent = '';
  const emptyDiv = document.createElement('div');
  emptyDiv.classList.add('empty-div');

  const pageTitleContainer = createPageTitleContainer('Our Menu');

  pageTitleContainer.style.backgroundImage =
    'url(static_files/images/menu_bg.jpg)';

  pageTitleContainer
    .querySelector('.title-separator')
    .appendChild(createTimingContainer('Cooke Town\n Monday-Sunday'));

  main.append(emptyDiv, pageTitleContainer);
}
