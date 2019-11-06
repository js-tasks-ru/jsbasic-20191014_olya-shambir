/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  const arrData = str.split(',').join(' ').split(' ');
  const arrNumbers = [];
  const arrMinMax = {};
  for (item of arrData) {
    if (Number(item)) {
      arrNumbers.push(+item);
    }
  }
  arrNumbers.sort((a, b) => (a - b));
  /* eslint-disable */
  arrMinMax.min = arrNumbers[0];
  arrMinMax.max = arrNumbers.slice(-1)[0];
  return arrMinMax;
}
