'use strict';


class CheckoutProductList {
  productsStoreKey = 'cart-products';

  constructor(parentElement) {
    this.el = parentElement;
    this.el.innerHTML = this.renderProductList();
    this.productContainer = this.el.querySelector('.product-list-box');
    this.show();
    this.productContainer.addEventListener('click', this.onDelete.bind(this));
  }

  parseCart() {
    return JSON.parse(localStorage.getItem(this.productsStoreKey));
  }

  renderProductList() {
    return `
        <div class="product-list-box">
            <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>`;
  }

  renderProduct(item) {
    return `
    <div data-product-id="${item.id}" class="product-wrapper box-inner-col description-col">

      <div class="product-image-container">
        <img class="product-image" src='.${item.imageUrl}' alt="img">
      </div>

      <div class="product-description">
        <h4 class="col-title mb-2">${item.title}</h4>
        <div class="rate">
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
          <i class="icon-star"></i>
        </div>
        <p class="rate-amount d-none d-md-block mt-1">${item.rating ? item.rating.reviewsAmount + 'reviews' : ''}</p>
      </div>

      <div class="product-price">
        <p class="mb-0 font-weight-light">Price:</p>
        <h4 class="col-title price-text mb-2">${item.price}</h4>
      </div>

      <div class="product-remove-button-wrapper">
        <button type="button"
                data-button-role="checkout-remove-product"
                class="product-remove-button">
          X
        </button>
      </div>

    </div>
`;
  }

  renderStars(item, currentCard) {
    if (item.rating) {
      const stars = currentCard.querySelectorAll('.icon-star');
      stars.forEach((star, index) => {
        if (index < item.rating.stars - 1) {
          star.classList.add('checked');
        } else {
          star.classList.add('active');
        }
      });
    }
  }

  onDelete(event) {

    if (event.target.dataset.buttonRole !== 'checkout-remove-product') return;

    if (confirm('Вы уверенны, что хотите удалить этот товар из корзины?')) {

      const idToDelete = Number(event.target.closest('.product-wrapper').dataset.productId);
      const elemToRemove = event.target.closest('.product-wrapper');
      elemToRemove.remove();

      const updatedCart = this.parseCart()
        .filter(item => item.id !== idToDelete);
      localStorage.setItem(this.productsStoreKey, JSON.stringify(updatedCart));
    }
  }

  show() {
    let products = this.parseCart();
    if (products) {
      products.forEach(item => {
        this.productContainer.innerHTML += this.renderProduct(item);
        let currentCard = this.el.querySelector(`*[data-product-id = '${item.id}']`);
        this.renderStars(item, currentCard);
      });
    }
  }
}

window.CheckoutProductList = CheckoutProductList;
