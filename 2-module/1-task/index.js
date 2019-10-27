/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(obj) {
  // eslint-disable-next-line no-shadow
  const cloneObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      cloneObj[key] = clone(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }
  return cloneObj;
}
