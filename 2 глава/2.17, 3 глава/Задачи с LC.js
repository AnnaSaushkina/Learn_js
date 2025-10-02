/**1. Напишите функцию quarterOf(month), которая принимает номер месяца (от 1 до 12)
 *  и возвращает номер квартала года (от 1 до 4),
 *  к которому относится этот месяц.
 * 
 * функция должна возвращать null, если передан несуществующий месяц (например, 0 или 13)*/

function quarterOf(month) {
    if (month >= 1 && month <= 3 ) {
        return 1
    } else if (month >= 4 && month <= 6 ) {
         return 2
    } else if (month >= 7 && month <= 9 ) {
         return 3
    } else if (month >= 10 && month <= 12 ) {
         return 4
    }
  
  return null
  return month > 0 && month < 4 ? 1 :
        month > 3 && month < 7 ? 2 : 
        month > 6 && month < 10 ? 3 : 4
        
    if (month > 12 || month < 1) {
    return null;
  } else return Math.round(month / 3);
}

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); // 4
console.log(quarterOf(0)); // null
console.log(quarterOf(-13)); // null


/*********************************************************************************************** */

/**2. Дан массив направлений для поворота: "left" или "right".
 *  Напишите функцию, которая возвращает целое число — сколько полных оборотов на 360° было совершено. 
 * Каждое слово в массиве считается поворотом на 90° в указанную сторону.
 * 
 * ["right", "right", "right", "right", "left", "right"] ➞ 1
// Вы повернули вправо 4 раза (90 * 4 = 360)
// Повернули влево один раз (360 - 90 = 270)
// Потом снова вправо один раз → полный оборот (270 + 90 = 360)

 * Возвращайте положительное число.
 * Во всех тестах будут только слова "right" и "left".
*/

function spinAround(turns) {
  let degrees = 0;
  
  for (let i of turns) {
    if (i === "right") {
        degrees += 90;
    } else degrees -= 90  
  }
    if (degrees < 0) {
        degrees = -degrees;
    }
    
   return result = degrees / 360;
   return null

}

console.log(spinAround(['left', 'right', 'left', 'right'])); // 0
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'])); // 2
console.log(spinAround(['left', 'left', 'left', 'left'])); // 1
console.log(spinAround([])); // 0
console.log(spinAround(['left'])); // 0
console.log(spinAround(['right'])); // 0
console.log(spinAround(['right', 'right', 'right', 'left', 'right', 'right'])); // 1
console.log(spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right'])); // 1
console.log(spinAround(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left', 'left', 'right'])); // 0
console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'])); // 10
console.log(spinAround(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'])); // 10
