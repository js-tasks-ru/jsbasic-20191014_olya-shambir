/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.addRmBtn(data);
    this.renderHead(this.el, data);
    this.renderBody(this.el, data);
    this.el.addEventListener(
      'click',
      (event) => {
        if (event.target.dataset.remove !== undefined) {
          let rowToRemove = event.target.closest('tr');
          rowToRemove.remove();
          this.onRemoved(+rowToRemove.cells[0].innerHTML);
        }
      });
  }

  addRmBtn = (content) => {
    this.data = content.forEach(item => {
      item[''] = '<a href="#delete" data-remove>X</a>';
    });
  };

  renderHead = (table, content) => {
    let tHead = table.createTHead();
    let headRow = tHead.insertRow(0);
    Object.keys(...content)
      .forEach((el, i) => {
        let cell = headRow.insertCell(i);
        cell.innerHTML = el.toUpperCase();
      });
    return tHead;
  };

  renderBody = (table, content) => {
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

  onRemoved = (id) => {
    console.log(`Из таблицы удален пользователь ${id}`);
    return id;
  };
}

window.ClearedTable = ClearedTable;
