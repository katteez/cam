'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = setup.querySelector('.setup-similar');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupOpen = document.querySelector('.setup-open');
  var wizardsQuantity = 4;
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var fireballWrap = setup.querySelector('.setup-fireball-wrap');

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  // Получаем данные о волшебнике
  function getWizardData() {
    return {
      wizardFirstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      wizardLastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
      wizardCoatColors: [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
      ],
      wizardEyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
      wizardFireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    };
  }

  // Получаем рандомный элемент из переданного массива
  function getRandomArrayItem(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  // Создаем массив волшебников с заполненными данными
  function generateWizardsArray(wizardsCount) {
    var wizardData = getWizardData();
    var wizards = [];

    for (var i = 0; i < wizardsCount; i++) {
      wizards.push({
        name: getRandomArrayItem(wizardData.wizardFirstNames) + ' ' + getRandomArrayItem(wizardData.wizardLastNames),
        coatColor: getRandomArrayItem(wizardData.wizardCoatColors),
        eyesColor: getRandomArrayItem(wizardData.wizardEyesColors)
      });
    }
    return wizards;
  }

  // Создаем DOM-элементы для волшебников и заполняем их данными из ранее созданного массива
  function createWizardElements(wizardsCount) {
    var wizards = generateWizardsArray(wizardsCount);
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
    var fragment = document.createDocumentFragment();
    var similarListElement = document.querySelector('.setup-similar-list');

    for (var i = 0; i < wizardsCount; i++) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      fragment.appendChild(wizardElement);
    }

    similarListElement.appendChild(fragment);
  }

  createWizardElements(wizardsQuantity);

  setupSimilar.classList.remove('hidden');

  // Закрываем по нажатию на ESC окно с настройками волшебника,
  // если поле с вводом имени не в фокусе
  function onPopupEscPress(evt) {
    if (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName) {
      closePopup();
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
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  // Обработчик по клику на крестик в окне с настройками волшебника
  setupClose.addEventListener('click', closePopup);

  // Обработчик по нажатию на ENTER, когда крестик в окне с настройками волшебника в фокусе
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  // Изменяем рандомно цвет мантии волшебника
  function changeCoatColor() {
    var wizardData = getWizardData();
    wizardCoat.style.fill = getRandomArrayItem(wizardData.wizardCoatColors);
  }

  // Изменяем рандомно цвет глаз волшебника
  function changeEyesColor() {
    var wizardData = getWizardData();
    wizardEyes.style.fill = getRandomArrayItem(wizardData.wizardEyesColors);
  }

  // Изменяем рандомно цвет фаербола волшебника
  function changeFireballColor() {
    var wizardData = getWizardData();
    fireballWrap.style.backgroundColor = getRandomArrayItem(wizardData.wizardFireballColors);
  }

  // Обработчик по клику на мантию волшебника
  wizardCoat.addEventListener('click', changeCoatColor);

  // Обработчик по клику на глаза волшебника
  wizardEyes.addEventListener('click', changeEyesColor);

  // Обработчик по клику на фаербол волшебника
  fireballWrap.addEventListener('click', changeFireballColor);
})();
