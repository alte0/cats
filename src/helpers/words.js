/**
 * Получение корректной формы множественного числа слова
 * Ограничение: только для целых чисел
 * @param {Integer} number 
 * @param {String} one 
 * @param {String} two 
 * @param {String} many 
 * @returns {String}
 */
export const getNounPluralForm = (number, one, two, many) => {
  const num = parseInt(number) || 1;
  const mod10 = num % 10;
  const mod100 = num % 100;  

  switch (true) {
    case (mod100 >= 11 && mod100 <= 20):
      return many;

    case (mod10 > 5):
      return many;

    case (mod10 === 1):
      return one;

    case (mod10 >= 2 && mod10 <= 4):
      return two;

    default:
      return many;
  }
}