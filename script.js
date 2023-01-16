'use strict';
const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openCloseModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', openCloseModal);
}

closeModalBtn.addEventListener('click', openCloseModal);

overlay.addEventListener('click', openCloseModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    opencloseModal();
  }
});
