var link = document.querySelector(".form-feedback");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".overlay");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback-show");
  overlay.classList.add("overlay-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }

  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
  overlay.classList.remove("overlay-show");
  popup.classList.remove("modal-feedback-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-feedback-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", login.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
      overlay.classList.remove("overlay-show");
      popup.classList.remove("modal-feedback-error");
    }
  }
});

// Yandex Map
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.9393, 30.329532335998537],
    zoom: 16
});

  var myPlacemark = new ymaps.Placemark([59.938744116548456, 30.323097415344236], {
    hintContent: "Gllacy Shop"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/svg/pin.svg",
    iconImageSize: [80, 140],
    iconImageOffset: [-35, -125]
});

myMap.geoObjects.add(myPlacemark);
}
