function ucFirst(userName) {

    if (userName == '') return ''; // Check if no string entered
    
    return userName[0].toUpperCase() + userName.slice(1); // Fisrt letter cap + remainder of name
}
