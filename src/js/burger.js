let burgerBtn = document.querySelector('.menu-burger');
let menuContainer = document.querySelector('.page-header__container');
let mainEl = document.querySelector('.content-container');
let feedbackContainer = document.querySelector('.modal--feedback');
let callContainer = document.querySelector('.modal--call');

burgerBtn.addEventListener('click', function(){
  menuContainer.classList.toggle('page-header__container--open');
  let currentLabel = burgerBtn.getAttribute('aria-label');

  if (currentLabel === 'Открыть меню') {
    burgerBtn.ariaLabel = 'Закрыть меню';
    mainEl.classList.add('page-main--hidden');
  } else {
    burgerBtn.ariaLabel = 'Открыть меню';
    mainEl.classList.remove('page-main--hidden');
  }
});

document.addEventListener('keydown', function(evt){
  let currentLabel = burgerBtn.getAttribute('aria-label');

  if (evt.key === 'Escape') {
    if (currentLabel === 'Закрыть меню') {
      menuContainer.classList.remove('page-header__container--open');
      burgerBtn.ariaLabel = 'Открыть меню';
      mainEl.classList.remove('page-main--hidden');
    }
  }
});

document.addEventListener('click', function(evt){
  if (!menuContainer.contains(evt.target) && !burgerBtn.contains(evt.target) && !feedbackContainer.contains(evt.target) && !callContainer.contains(evt.target)) {
    menuContainer.classList.remove('page-header__container--open');
    burgerBtn.ariaLabel = 'Открыть меню';
    mainEl.classList.remove('page-main--hidden');
  }
});
