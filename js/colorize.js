'use strict';

(function () {
  var COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  // Изменяем рандомно цвет переданного элемента
  window.colorize = function (element, callback) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomArrayItem(COLORS);
      callback(color);
    });
  };
})();
