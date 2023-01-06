export function createTimingContainer(timingText) {
  const timingContainer = document.createElement('div');
  timingContainer.classList.add('timing-container');

  const days = document.createElement('p');
  days.classList.add('days');
  days.textContent = timingText;

  const timing = document.createElement('p');
  timing.classList.add('timing');
  timing.textContent = '8AM - 9PM';

  timingContainer.append(days, timing);

  return timingContainer;
}

export function createPageTitleContainer(pageTitleText) {
  const pageTitleContainer = document.createElement('div');
  pageTitleContainer.classList.add('page-title-container');

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('page-title');
  pageTitle.textContent = pageTitleText;

  const titleSeparator = document.createElement('div');
  titleSeparator.classList.add('title-separator');

  // titleSeparator.appendChild(createTimingContainer('We are open \n everyday!'));

  pageTitleContainer.append(pageTitle, titleSeparator);

  return pageTitleContainer;
}
