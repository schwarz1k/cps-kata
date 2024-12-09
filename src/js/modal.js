let menuHeader = document.querySelector('.page-header__container');
let burgerBtn = document.querySelector('.menu-burger');
let mainEl = document.querySelector('.content-container');
let sendBtn = document.querySelector('.menu-icon--send');
let feedbackClosedBtn = document.querySelector('.modal__closed--feedback');
let feedbackContainer = document.querySelector('.modal--feedback');
let callBtn = document.querySelector('.menu-icon--call');
let callClosedBtn = document.querySelector('.modal__closed--call');
let callContainer = document.querySelector('.modal--call');
let modalButton = document.querySelectorAll('.modal__button');

for(let i = 0; i < modalButton.length; i++) {
  modalButton[i].addEventListener('click', function(evt){
    evt.preventDefault();
  })
}

sendBtn.addEventListener('click', () => {
  feedbackContainer.classList.remove('modal--feedback-hidden');
  mainEl.classList.add('page-main--hidden');
  menuHeader.classList.add('page-header__container--modal');
});

feedbackClosedBtn.addEventListener('click', () => {
  feedbackContainer.classList.add('modal--feedback-hidden');
  menuHeader.classList.remove('page-header__container--modal');
});

callBtn.addEventListener('click', () => {
  callContainer.classList.remove('modal--call-hidden');
  mainEl.classList.add('page-main--hidden');
  menuHeader.classList.add('page-header__container--modal');
});

callClosedBtn.addEventListener('click', () => {
  callContainer.classList.add('modal--call-hidden');
  menuHeader.classList.remove('page-header__container--modal');
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {

    if (!feedbackContainer.classList.contains('modal--feedback-hidden')) {
      feedbackContainer.classList.add('modal--feedback-hidden');
      burgerBtn.ariaLabel = 'Открыть меню';
      mainEl.classList.remove('page-main--hidden');
      menuHeader.classList.remove('page-header__container--modal');
    }

    if (!callContainer.classList.contains('modal--call-hidden')) {
      callContainer.classList.add('modal--call-hidden');
      burgerBtn.ariaLabel = 'Открыть меню';
      mainEl.classList.remove('page-main--hidden');
      menuHeader.classList.remove('page-header__container--modal');
    }

    if (feedbackContainer.classList.contains('modal--feedback-hidden') &&
      callContainer.classList.contains('modal--call-hidden')) {
      burgerBtn.ariaLabel = 'Открыть меню';
      mainEl.classList.remove('page-main--hidden');
      menuHeader.classList.remove('page-header__container--modal');
    }
  }
});

document.addEventListener('click', function(evt) {
  let screenWidth = window.innerWidth;
  if (screenWidth >= 1440 || (screenWidth < 1440 && !burgerBtn.contains(evt.target) && !menuHeader.contains(evt.target))) {
    if (!feedbackContainer.contains(evt.target) &&
      !feedbackClosedBtn.contains(evt.target) &&
      !sendBtn.contains(evt.target) &&
      !callContainer.contains(evt.target) &&
      !callClosedBtn.contains(evt.target) &&
      !callBtn.contains(evt.target)) {
      feedbackContainer.classList.add('modal--feedback-hidden');
      callContainer.classList.add('modal--call-hidden');
      menuHeader.classList.remove('page-header__container--open');
      burgerBtn.ariaLabel = 'Открыть меню';
      menuHeader.classList.remove('page-header__container--modal');
    }
  }
});
