function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;

  const pageNavigation = document.querySelector('.s-menu');
  const controller = document.querySelector('.s-controller');
  pageNavigation.style.opacity = '0';
  controller.style.opacity = '0';
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';

  const pageNavigation = document.querySelector('.s-menu');
  const controller = document.querySelector('.s-controller');
  pageNavigation.style.opacity = '1';
  controller.style.opacity = '1';

}

function selectCarouselItem(selectedButtonElement) {
  const carousel = document.querySelector('.s-cards-carousel');
  const rotateY = (Number(selectedButtonElement.id) - 1) * -120;
  const newTransformValue = `translateZ(-40svw) rotateY(${rotateY}deg)`;

  carousel.style.transform = newTransformValue;
}

function setActiveControllerButton(selectedButton, allButtons) {
  allButtons.forEach((btn) =>
    btn.classList.remove('s-controller__button--active')
  );
  selectedButton.classList.add('s-controller__button--active');
}

function addEventListenersToCards() {
  const cardElements = document.querySelectorAll('.s-card');

  cardElements.forEach((card) => {
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  });
}

function addEventListenersToControllers() {
  const controllerButtons = document.querySelectorAll('.s-controller__button');
  controllerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectCarouselItem(button);
      setActiveControllerButton(button, controllerButtons);
    });
  });
}

function initializeApp() {
  addEventListenersToCards();
  addEventListenersToControllers();
}

document.addEventListener('DOMContentLoaded', initializeApp, false);
