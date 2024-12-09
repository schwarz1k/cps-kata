let hiddenServiceBtn = document.querySelector('.services__info-button');
let hiddenServiceEl = document.querySelector('.services__info-container');
let hiddenBrandsBtn = document.querySelector(".brands__button");
let hiddenBrandsEl = document.querySelector(".brands__list");
let hiddenTechBtn = document.querySelector(".tech__button");
let hiddenTechEl = document.querySelector(".tech__list");

function showElements() {
  hiddenServiceBtn.addEventListener("click", () => {
    hiddenServiceEl.classList.toggle("services__info-container--hidden");
    hiddenServiceBtn.classList.toggle("services__info-button--more");
    if (hiddenServiceEl.classList.contains("services__info-container--hidden")) {
      hiddenServiceBtn.textContent = 'Скрыть';
    } else {
      hiddenServiceBtn.textContent = 'Читать далее';
    }
  });

  hiddenBrandsBtn.addEventListener("click", () => {
    hiddenBrandsEl.classList.toggle("brands__list--hidden");
    hiddenBrandsBtn.classList.toggle("brands__button--more");
    if (hiddenBrandsEl.classList.contains("brands__list--hidden")) {
      hiddenBrandsBtn.textContent = 'Показать все';
    } else {
      hiddenBrandsBtn.textContent = 'Скрыть';
    }
  });

  hiddenTechBtn.addEventListener("click", () => {
    hiddenTechEl.classList.toggle("tech__list--hidden");
    hiddenTechBtn.classList.toggle("tech__button--more");
    if (hiddenTechEl.classList.contains("tech__list--hidden")) {
      hiddenTechBtn.textContent = 'Показать все';
    } else {
      hiddenTechBtn.textContent = 'Скрыть';
    }
  });
}

showElements();
