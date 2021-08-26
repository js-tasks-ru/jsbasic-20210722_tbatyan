function initCarousel() {
  
        let carousel_Inner = document.querySelector(".carousel__inner");
    
        let arrow_Right = document.querySelector(".carousel__arrow_right");
        let arrow_Left = document.querySelector(".carousel__arrow_left");

        let slide_Width = document.querySelector(".carousel__slide").offsetWidth;
    
  arrow_Left.style.display = 'none';

    let position = 0;

  arrow_Right.addEventListener('click', () => { 
      
    arrow_Left.style.display = '';

      position -= slide_Width;
      carousel_Inner.style.transform = `translateX(${position}px)`;
          
          if (position === -3 * slide_Width) {
                  arrow_Right.style.display = 'none';
          };
  });
   
  arrow_Left.addEventListener('click', () => { 
    
    arrow_Right.style.display = '';
    
      position += slide_Width;
      carousel_Inner.style.transform = `translateX(${position}px)`;
        
         if (position === 0) {
                arrow_Left.style.display = 'none';
         };                   
  });

};