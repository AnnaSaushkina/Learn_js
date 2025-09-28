// Вот несколько задач на использование switch в JavaScript:

// 1. Базовая задача на дни недели:
/*
Напишите функцию, которая принимает номер дня недели (1-7) и возвращает его название.
Если введено число вне диапазона, вернуть "Некорректный день"
*/

function getDayName(dayNumber) {
    switch (dayNumber) {
      case 1:
        return 'Понедельник';
  
      case 2:
        return 'Вторник';
  
      case 3:
        return 'Среда';
  
      case 4:
        return 'Четверг';
  
      case 5:
        return 'Пятница';
  
      case 6:
        return 'Суббота';
  
      case 7:
        return 'Воскресенье';
  
      default:
        return 'Некорректный день';
    }
  }
  
  // Примеры:
  console.log(getDayName(1)); // "Понедельник"
  console.log(getDayName(5)); // "Пятница"
  console.log(getDayName(8)); // "Некорректный день"
  
  // 2. Оценки студента:
  /*
  Создайте функцию, которая преобразует числовую оценку (1-5) в текстовую оценку:
  5 - "Отлично"
  4 - "Хорошо"
  3 - "Удовлетворительно"
  2 - "Неудовлетворительно"
  1 - "Очень плохо"
  Другие значения - "Некорректная оценка"
  */
  
  function getGradeText(grade) {
    switch (String(grade)) {
      case '1':
        return 'Очень плохо';
      case '2':
        return 'Неудовлетворительно';
      case '3':
        return 'Удовлетворительно';
      case '4':
        return 'Хорошо';
      case '5':
        return 'Отлично';
      default:
        return 'Некорректная оценка';
    }
  }
  
  // Примеры:
  console.log(getGradeText(5)); // "Отлично"
  console.log(getGradeText(2)); // "Неудовлетворительно"
  console.log(getGradeText(6)); // "Некорректная оценка"
  
  // 3. Калькулятор:
  /*
  Создайте функцию-калькулятор, которая принимает два числа и операцию (+, -, *, /) 
  и возвращает результат. При делении на ноль вернуть "Ошибка"
  */
  
  function calculate(num1, num2, operation) {
    switch (operation || num2) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case num2 == 0 && '/':
        return 'Ошибка';
      case '/':
        return num1 / num2;
    }
  }
  
  // Примеры:
  console.log(calculate(10, 5, '+')); // 15
  console.log(calculate(10, 5, '-')); // 5
  console.log(calculate(10, 0, '/')); // "Ошибка"
  console.log(calculate(10, 5, '/')); // 2
  
  // 4. Времена года:
  /*
  Напишите функцию, которая принимает название месяца и возвращает время года.
  Месяцы должны приниматься как в полной форме, так и в сокращенной (янв, фев, мар и т.д.)
  */
  
  function getSeason(month) {
    month = month.toLowerCase();
  
    switch (true) {
      case ['январь', 'янв'].includes(month):
      case ['декабрь', 'дек'].includes(month):
      case ['февраль', 'фев'].includes(month):
        return 'Зима';
      case ['сентябрь', 'сен', 'сент'].includes(month):
      case ['октябрь', 'окт'].includes(month):
      case ['ноябрь', 'нояб'].includes(month):
        return 'Осень';
      case ['март', 'мар'].includes(month):
      case ['апрель', 'апр'].includes(month):
      case ['май', 'ма'].includes(month):
        return 'Весна';
      case ['июнь', 'июн'].includes(month):
      case ['июль', 'июл'].includes(month):
      case ['август', 'авг'].includes(month):
        return 'Лето';
    }
  }
  
  // Примеры:
  console.log(getSeason('январь')); // "Зима"
  console.log(getSeason('янв')); // "Зима"
  console.log(getSeason('февраль')); // "Зима"
  console.log(getSeason('июн')); // "Лето"
  console.log(getSeason('сентябрь')); // "Осень"
  
  // 5. Конвертер единиц измерения:
  /*
  Напишите функцию, которая конвертирует единицы измерения:
  км -> м (km-m)
  кг -> г (kg-g)
  ч -> мин (h-min)
  Формат входных данных: "значение_исходная-единица_целевая-единица"
  */
  
  function convertUnits(input) {
    let num = parseFloat(input);
    switch (true) {
      case input.includes('km'):
      case input.includes('kg'):
        return num * 1000;
      case input.includes('h'):
        return num * 60;
    }
  }
  
  // Примеры:
  console.log(convertUnits('5_km-m')); // 5000
  console.log(convertUnits('2.5_kg-g')); // 2500
  console.log(convertUnits('2_h-min')); // 120
  
  // Напишите "if", аналогичный "switch"
  // Напишите if..else, соответствующий следующему switch:
  
  switch (browser) {
    case 'Edge':
      alert("You've got the Edge!");
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert('Okay we support these browsers too');
      break;
  
    default:
      alert('We hope that this page looks ok!');
  }
  
  if (browser == 'Edge') {
    console.log("You've got the Edge!");
  } else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
    console.log('Okay we support these browsers too');
  } else console.log('We hope that this page looks ok!');
  
  
  // Переписать условия "if" на "switch"
  // Перепишите код с использованием одной конструкции switch:
  
  const number = +prompt('Введите число между 0 и 3', '');
  
  if (number === 0) {
    alert('Вы ввели число 0');
  }
  
  if (number === 1) {
    alert('Вы ввели число 1');
  }
  
  if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
  }
  
  let number2 = 2
  
  switch(number2) {
    case 0: console.log('Вы ввели число 0');
    break;
    case 1: console.log('Вы ввели число 1');
    break;
    case (2 || 3): console.log('Вы ввели число 2, а может и 3'); 
    break;
  }