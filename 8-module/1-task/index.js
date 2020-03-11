class ProductList {
  productsUrl = './assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.renderProductContainer();
    this.productsContainer = this.el.querySelector('.homepage-cards');
    this.cart = [];
  }

  renderProductContainer() {
    return `
    <div class="row justify-content-end">
      <div class="col-lg-9">
      <h3 class="section-title">Top Recommendations for You</h3>
      <div class="row homepage-cards">
        <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
       </div>
      </div>
    </div>`;
  }

  renderProduct(item) {
    return ` <div data-product-id="${item.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
              <div class="card">
                <div class="card-img-wrap">
                  <img class="card-img-top" src='.${item.imageUrl}' alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <div class="rate">
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <i class="icon-star"></i>
                      <span class="rate-amount ml-2">${item.rating ? item.rating.reviewsAmount : ''}</span>
                   </div>
                   <p class="ca rd-text price-text discount"><strong>${item.price}</strong>
                   <small class="ml-2">${item.oldPrice ? item.oldPrice : ''}</small></p>

                   <button class="product-add-to-cart" data-button-role="add-to-cart">
                      Add to cart
                   </button>
                </div>
               </div>
            </div>`;
  }

  renderStars(item) {
    let currentCard = this.el.querySelector(`*[data-product-id = '${item.id}']`);

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

  OnAddtoCart(event) {
    if (event.target.dataset.buttonRole === 'add-to-cart'
      && confirm('Вы уверенны, что хотите добавить этот товар в корзину?')) {

      const id = event.target.closest('.products-list-product').dataset.productId;
      const item = this.data.find(i => i.id === +id);
      if (!this.cart.find(i => i.id === +id)) {
        this.cart.push(item);

      }
      localStorage.setItem(this.productsStoreKey, JSON.stringify(this.cart));
    }
  }


  show() {
    return fetch(this.productsUrl)
      .then(response => response.json())
      .then(data => {

        this.data = data;

        data.forEach(item => {
          this.productsContainer.innerHTML += this.renderProduct(item);
          this.renderStars(item);
        });

        this.productsContainer.addEventListener('click', this.OnAddtoCart.bind(this));
      });
  }
}


// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
