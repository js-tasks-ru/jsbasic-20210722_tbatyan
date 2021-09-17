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
 *      }
 *
 */

 // import createElement from '../../assets/lib/create-element.js'; 
 // doesn't work for td and some other elements that may not be placed into <div>

export default class UserTable {
  constructor(rows) {
      this.rows = rows;

      this.render();
      this.onClick();
  }

render() {

  this.elem = document.createElement('table');
  
  this.elem.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>`;
  
let newRows = "";

for (let i= 0; i< this.rows.length; i++) {
   let name = this.rows[i].name;
   let age = this.rows[i].age;
   let salary = this.rows[i].salary;
   let city = this.rows[i].city;
  
  newRows += `
      <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${salary}</td>
        <td>${city}</td>
        <td><button>X</button></td>
      </tr> \n`;
    };
  
    let tbody = this.elem.querySelector('tbody');
    tbody.innerHTML = newRows;
  }

onClick() {

    let buttons = this.elem.querySelectorAll('button');
      
    for (let row_eraser of buttons) {

      row_eraser.addEventListener('click', (event) => {
        event.target.closest('tr').remove();
      });
    }
 }

}
