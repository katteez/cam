'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;
  var barHeight;
  var barWidth = 40;
  var indent = 90;
  var barX = 140;
  var barY = 90;


  for (i = 0; i < times.length; i++) {
    barHeight = step * times[i];

    // Отрисовка времени прохождения
    ctx.fillStyle = '#000000';
    ctx.fillText(times[i].toFixed(0), barX, barY + histogramHeight - barHeight - 10);

    // Определение цвета колонки гистограммы
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + Math.round((Math.random() * 255)) + ')';
    }

    // Отрисовка колонки гистрограммы
    ctx.fillRect(barX, barY + histogramHeight - barHeight, barWidth, barHeight);

    // Отрисовка имени игрока
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], barX, barY + histogramHeight + 20);
    barX += indent;
  }
};
