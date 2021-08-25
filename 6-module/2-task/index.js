export default class ProductCard {
  
  constructor(product) {

    this.product = product;
    this.render();

    let button = this.elem.querySelector(".card__button");
      button.addEventListener('click', this.onClick);
  }

  render () {
    this.elem = document.createElement('div');
    this.elem.classList.add('.card');
    
    this.elem.innerHTML = 
  `<div id="holder" class="container_half">
    <div class="card">
      <div class="card__top">
        <img src="${product.image}" class="card__image" alt="product">
        <span class="card__price"> €${product.price.toFixed(2)} </span>
      </div>
      <div class="card__body">
        <div class="card__title"> ${product.name} </div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
  </div>`
  ;}
  
  onClick = () => {
      let customEvent = new CustomEvent("product-add", {
            detail: this.product.id,
            bubbles: true,
        });

      this.elem.dispatchEvent(customEvent);
  }
}

let product = {
      name: "Laab kai chicken salad", 
      price: 10, 
      category: "salads", 
      image: "/assets/images/products/laab_kai_chicken_salad.png", 
      id: "laab-kai-chicken-salad"
  }

let productCard = new ProductCard(product);

// document.body.addEventListener("product-add", (event) => {alert('RRRR'); })

document.body.append(productCard.elem);
