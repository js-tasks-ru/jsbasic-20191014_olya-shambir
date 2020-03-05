/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  this.el = document.createElement('table');

  this.renderHead = (table, content) => {
    let tHead = table.createTHead();
    let headRow = tHead.insertRow(0);
    Object.keys(...content)
      .forEach((el, i) => {
        let cell = headRow.insertCell(i);
        cell.innerHTML = el.toUpperCase();
      });
    return tHead;
  };

  this.renderBody = (table, content) => {
    let tBody = table.appendChild(document.createElement('tbody'));
    content
      .forEach((el, i) => {
        let row = tBody.insertRow(i);
        Object.values(el)
          .forEach((el, i) => {
            let cell = row.insertCell(i);
            cell.innerHTML = el;
          });
      });
    return tBody;
  };

  this.tHead = this.renderHead(this.el, items);
  this.tBody = this.renderBody(this.el, items);

  this.sort = (column, desc = false) => {
    let sorted = Array.from(this.el.rows)
      .slice(1)
      .sort((a, b) => {
        if (!desc) {
          return a.cells[column].innerHTML > b.cells[column].innerHTML ? 1 : -1;
        } else {
          return a.cells[column].innerHTML < b.cells[column].innerHTML ? 1 : -1;
        }
      });
    this.el.tBodies[0].append(...sorted);
  };
}
