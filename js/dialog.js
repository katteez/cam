'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpen = document.querySelector('.setup-open');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireballWrap = setup.querySelector('.setup-fireball-wrap');

  // Закрываем по нажатию на ESC окно с настройками волшебника,
  // если поле с вводом имени не в фокусе
  function onPopupEscPress(evt) {
    if (evt.target !== setupUserName) {
      window.util.isEscEvent(evt, closePopup);
    }
  }

  // Открываем окно с настройками волшебника
  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  // Закрываем окно с настройками волшебника
  function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  // Обработчик по клику на аватар игрока
  setupOpen.addEventListener('click', openPopup);

  // Обработчик по нажатию на ENTER, когда аватар игрока в фокусе
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Обработчик по клику на крестик в окне с настройками волшебника
  setupClose.addEventListener('click', closePopup);

  // Обработчик по нажатию на ENTER, когда крестик в окне с настройками волшебника в фокусе
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  // Окрашиваем рандомно по клику цвет мантии волшебника
  window.colorize(wizardCoat, function (color) {
    wizardCoat.style.fill = color;
  });

  // Окрашиваем рандомно по клику цвет глаз волшебника
  window.colorize(wizardEyes, function (color) {
    wizardEyes.style.fill = color;
  });

  // Окрашиваем рандомно по клику цвет фаербола волшебника
  window.colorize(fireballWrap, function (color) {
    fireballWrap.style.backgroundColor = color;
  });
})();
