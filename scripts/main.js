//element selector
const modal = document.querySelector('.modal-container');;

//function for when the page is just loaded
document.addEventListener("DOMContentLoaded", function () {
  openModal()
});



//feature to add classes and have timer to disable them
const openModal = () => {
  modal.classList.add("display--flex")
  setTimeout(() => {
    modal.classList.add("display--none")
  }, 30000);
}




