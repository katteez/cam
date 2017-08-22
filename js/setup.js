'use strict';

document.querySelector('.setup').classList.remove('hidden');

var wizards = [];
var wizardsQuantity = 4;
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var similarListElement = document.querySelector('.setup-similar-list');

var wizardFirstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

// Получаем рандомный элемент из переданного массива
function getRandomArrayItem(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Создаем массив волшебников с заполненными данными
function generateWizardsArray() {
  for (var i = 0; i < wizardsQuantity; i++) {
    wizards.push({
      name: getRandomArrayItem(wizardFirstNames) + ' ' + getRandomArrayItem(wizardLastNames),
      coatColor: getRandomArrayItem(wizardCoatColors),
      eyesColor: getRandomArrayItem(wizardEyesColors)
    });
  }
}

// Создаем DOM-элементы для волшебников и заполняем их данными из ранее созданного массива
function createWizardElements() {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsQuantity; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
}

generateWizardsArray();
createWizardElements();

document.querySelector('.setup-similar').classList.remove('hidden');
