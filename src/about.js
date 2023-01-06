import {
  createPageTitleContainer,
  createTimingContainer,
} from './commonElements';

function createAbout() {
  const aboutCafeText =
    `Welcome to the Espressions! We are a locally-owned coffee bar located in the trendy neighborhood of Cooke Town, dedicated to serving the highest quality coffee and espresso drinks in a modern and energetic atmosphere.

  Our coffee bar was founded in 2023 by a group of coffee enthusiasts who were passionate about creating a space where people could come and enjoy expertly crafted coffee beverages. From the beginning, we have focused on sourcing the best beans from around the world and training our baristas to be coffee artisans.

  In addition to our signature espresso drinks, we also offer a range of smoothies, pastries, and other treats to enjoy. We believe in supporting our community, and that means partnering with local bakeries and suppliers to bring you the best flavors and ingredients.

  We are more than just a coffee bar - we are a destination where people can come to grab a quick caffeine fix or linger and enjoy the ambiance. Whether you are a regular customer or a first-time visitor, we hope you'll join us and experience the Espressions difference.`.split(
      '\n '
    );

  const about = document.createElement('div');
  about.classList.add('about');

  aboutCafeText.forEach((paragraph) => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = paragraph;
    about.appendChild(newParagraph);
  });

  return about;
}

// function createAboutBottom() {}

export default function loadAbout() {
  // const body = document.getElementsByTagName('body');
  // body[0].style.backgroundImage = `url('static_files/images/about_bg.jpg')`;
  const main = document.querySelector('#main');
  main.style.backgroundImage = 'none';
  main.textContent = '';
  const emptyDiv = document.createElement('div');
  emptyDiv.classList.add('empty-div');

  const pageTitleContainer = createPageTitleContainer(
    'A few words \n about us'
  );
  pageTitleContainer.style.backgroundImage =
    'url(static_files/images/about_bg.jpg)';

  pageTitleContainer
    .querySelector('.title-separator')
    .appendChild(createTimingContainer('We are open \n everyday!'));

  main.append(emptyDiv, pageTitleContainer, createAbout());
}
