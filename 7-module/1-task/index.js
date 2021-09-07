import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    
    this.render();
    this.onClick_Arrows();
    this.onClick_Ribbon_Tabs();
  }

  render() {
    this.elem = createElement (`
  <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner"></nav>
    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
  `);

    let categories_Links = "";

      for (let i = 0; i < this.categories.length; i++) {
        let name = this.categories[i].name;
        let id = this.categories[i].id;
  
        categories_Links += `<a href="#" class="ribbon__item" data-id="${id}"> ${name} </a> \n`;
      }

      let ribbon__inner = this.elem.querySelector(".ribbon__inner");
      ribbon__inner.innerHTML = categories_Links;
  }

  onClick_Arrows() {

        let arrow_Right = this.elem.querySelector(".ribbon__arrow_right");
        let arrow_Left = this.elem.querySelector(".ribbon__arrow_left");
     
        let ribbon_Inner = this.elem.querySelector(".ribbon__inner");
      
  arrow_Left.classList.remove("ribbon__arrow_visible");

     arrow_Right.addEventListener('click', () => {
        ribbon_Inner.scrollBy(350, 0);
     });
     
     arrow_Left.addEventListener('click', () => {
        ribbon_Inner.scrollBy(-350, 0);
     });

          ribbon_Inner.addEventListener('scroll', () => {

              let scrollWidth = ribbon_Inner.scrollWidth;
              let scrollLeft = ribbon_Inner.scrollLeft;
              let clientWidth = ribbon_Inner.clientWidth;
  
              let scrollRight = scrollWidth - scrollLeft - clientWidth;

            arrow_Left.classList.add("ribbon__arrow_visible");
            arrow_Right.classList.add("ribbon__arrow_visible");

              if (scrollRight < 1) {
                    arrow_Right.classList.remove("ribbon__arrow_visible"); 
              }

              if (scrollLeft == 0) {          
                    arrow_Left.classList.remove("ribbon__arrow_visible");
              }
          });
  }

  onClick_Ribbon_Tabs() {

    let ribbon_Inner = this.elem.querySelector(".ribbon__inner");

    ribbon_Inner.addEventListener('click', (event) => {

      if (!event.target.closest('.ribbon__item')) {
        return;
      }

      event.preventDefault();
      let active = this.elem.querySelector('.ribbon__item_active');

      if (active) {
        active.classList.remove('ribbon__item_active');
      }

      let currentCategory = event.target;

      currentCategory.classList.add("ribbon__item_active");

      this.elem.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: currentCategory.dataset.id,
          bubbles: true
      }));
    });
  };

}