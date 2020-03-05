/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

let titleColIndex;

function getColumnIndex(title, rows) {
  const titleCells = rows[0].cells;
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < titleCells.length; i++) {
    if (titleCells[i].innerText === title) {
      titleColIndex = titleCells[i].cellIndex;
    }
  }
  return titleColIndex;
}


function defineStatusClass(rows) {
  const statusColIndex = getColumnIndex('Status', rows);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < rows.length; i++) {
    const statusCell = rows[i].cells[statusColIndex];
    console.log(statusCell);
    if (statusCell.dataset.available === 'true') {
      rows[i].classList.add('available');
    } else if (statusCell.dataset.available === 'false') {
      rows[i].classList.add('unavailable');
    } else {
      rows[i].hidden = 'true';
    }
  }
}


function defineGenderClass(rows) {
  const genderColIndex = getColumnIndex('Gender', rows);
  console.log(genderColIndex);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < rows.length; i++) {
    const genderCell = rows[i].cells[genderColIndex];
    console.log(genderCell);
    if (genderCell.innerText === 'm') {
      rows[i].classList.add('male');
    } else if (genderCell.innerText === 'f') {
      rows[i].classList.add('female');
    } else {
      rows[i].classList.add = ('undefined');
    }
  }
}

function defineAge(rows) {
  const ageColIndex = getColumnIndex('Age', rows);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < rows.length; i++) {
    const ageCell = rows[i].cells[ageColIndex];
    console.log(ageCell);
    if (+ageCell.innerText < 18) {
      rows[i].style.textDecoration = 'line-through';
    } else {
      rows[i].style.textDecoration = ' ';
    }
  }
}


function highlight(table) {
  const tableRows = table.rows;
  defineStatusClass(tableRows);
  defineAge(tableRows);
  defineGenderClass(tableRows);
}
