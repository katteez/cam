'use strict';

(function () {
  document.querySelector('.setup').classList.remove('hidden');

  var wizardsQuantity = 4;

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
      wizardEyesColors: ['black', 'red', 'blue', 'yellow', 'green']
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

  document.querySelector('.setup-similar').classList.remove('hidden');
})();
