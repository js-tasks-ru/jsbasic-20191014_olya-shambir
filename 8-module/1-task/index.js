class ProductList {
  productsUrl = '/assets/data/products.json';
  productsStoreKey = 'cart-products';

  constructor(element) {
    this.el = element;
    element.innerHTML = `
<div class="row justify-content-end">
      <div class="col-lg-9">
      <h3 class="section-title">Top Recommendations for You</h3>
      <div class="row homepage-cards">
      <!--ВОТ ЗДЕСЬ БУДУТ КАРТОЧКИ ТОВАРОВ-->
    </div>
    </div>
</div>`;

  }

  show() {
    return fetch('./assets/data/products.json')
      .then(response => response.json())
      .then(data => {
        const cardsContainer = this.el.querySelector('.homepage-cards');
        data.forEach(item => {
          cardsContainer.innerHTML += `
              <div data-product-id="${item.id}" class="products-list-product col-md-6 col-lg-4 mb-4">
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
              </div>
`;
          let currentCard = cardsContainer.querySelector(`*[data-product-id = '${item.id}']`);
          if (item.rating) {
            const stars = currentCard.querySelectorAll('.icon-star');
            stars.forEach(item => item.classList.add('active'));
            for (let i = 0; i < item.rating.stars - 1; i++) {
              stars[i].classList.add('checked');
            }
          }
        });
      });
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.ProductList = ProductList;
