'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupSimilar = setup.querySelector('.setup-similar');
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
      wizardEyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
      wizardFireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    };
  }

  // Создаем массив волшебников с заполненными данными
  function generateWizardsArray(wizardsCount) {
    var wizardData = getWizardData();
    var wizards = [];

    for (var i = 0; i < wizardsCount; i++) {
      wizards.push({
        name: window.util.getRandomArrayItem(wizardData.wizardFirstNames) + ' ' + window.util.getRandomArrayItem(wizardData.wizardLastNames),
        coatColor: window.util.getRandomArrayItem(wizardData.wizardCoatColors),
        eyesColor: window.util.getRandomArrayItem(wizardData.wizardEyesColors)
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
})();
