/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {Array}
 */

// eslint-disable-next-line no-shadow
function showSalary(data, age) {
  const users = [];
  for (const item of data) {
    if (item.age <= age) {
      // eslint-disable-next-line no-shadow
      users.push(`${item.name}, ${item.balance}`);
    }
  } return users.join('\n');
}
