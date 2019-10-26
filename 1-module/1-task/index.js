/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  // eslint-disable-next-line radix
  if (parseInt(n) === n) {
    return m ** n;
  }
  return alert('Please enter integer for pow');
}
