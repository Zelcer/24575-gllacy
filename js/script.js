var link = document.querySelector(".form-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  overlay.classList.add("overlay-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  overlay.classList.remove("overlay-show");
})
