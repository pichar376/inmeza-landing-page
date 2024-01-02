//element selector
const modal = document.querySelector('.modal-container');

const buttonCloseModal = document.querySelector('.button-close-modal');

//function for when the page is just loaded
document.addEventListener("DOMContentLoaded", function () {
  openModal()
});



//function to add classes and have timer to disable them
const openModal = () => {
  modal.classList.add("display--none")
  setTimeout(() => {
    modal.classList.remove("display--none")
    modal.classList.add("display--flex")
  }, 3000);
}


//function to close modal
const closeModal = () => {
  modal.classList.add("display--none")
}


buttonCloseModal.addEventListener('click', closeModal);
