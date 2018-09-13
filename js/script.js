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

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-feedback-show");

    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      login.focus();
    }

    overlay.classList.add("overlay-show");
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-feedback-show");
    overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и email");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
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
        hintContent: 'Gllacy Shop'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/pin.svg',
        iconImageSize: [80, 140],
        iconImageOffset: [-35, -125]
    });

    myMap.geoObjects.add(myPlacemark);
}
