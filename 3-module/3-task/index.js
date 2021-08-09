function camelize(str) {
  
  let arr = str.split('-');
  
  let arrMapped = arr.map((item, index) => 
         index == 0 ? item : item[0].toUpperCase() + item.slice(1));
  
  let result = arrMapped.join('');
                         
      return result;
}
