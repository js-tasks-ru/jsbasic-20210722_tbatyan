function makeDiagonalRed(table) {
  
    for (let i=0; i< table.rows.length; i++) {
      table.rows[i].children[i].style.backgroundColor ="red";
  }
}