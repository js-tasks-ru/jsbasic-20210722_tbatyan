function checkSpam(str) {
  
  let lowerCase = str.toLowerCase();
  
  if (lowerCase.includes('1xbet') || 
       lowerCase.includes('xxx')) {
      return true;
  }
      return false;
}
