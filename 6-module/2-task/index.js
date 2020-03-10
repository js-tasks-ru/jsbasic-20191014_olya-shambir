'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];
  baseHTML = `
    <div id="mainCarousel" class="main-carousel carousel slide">
        <ol class="carousel-indicators">
            <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
            <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
        </ol>
        <div class="carousel-inner">
            <!--Вот здесь будет активный слайд-->
        </div>

        <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
    </div>
`;

  constructor(element) {
    this.el = element;
    this.slideId = 0;
    element.insertAdjacentHTML('afterbegin', this.baseHTML);
    this.renderSlide(this.slideId);
    element.addEventListener('click', this.OnMoveCarousel.bind(this));
  }


  getTitle = (id) => {
    return this.slides.filter(item => item.id === +id)[0].title;
  };

  getImgPath = (id) => {
    return this.slides.filter(item => item.id === +id)[0].img;
  };

  renderSlide = (id) => {
    this.el.querySelector('.carousel-inner').innerHTML = `
    <div class="carousel-item active">
        <img src = "${this.getImgPath(id)}" alt="Activeslide">
        <div class="container">
            <div class="carousel-caption">
                <h3 class="h1">${this.getTitle(id)}</h3>
                <div>
                    <a class="btn" href="#" role="button">
                        View all DEALS
                        <img src="./assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>`;

    const activeIndicator = this.el.querySelector(`*[data-slide-to = "${this.slideId}"]`);
    activeIndicator.classList.add('active');
  };

  OnMoveCarousel = (event) => {
    if (event.target.dataset.slide === 'next') {
      this.slideId < this.slides.length - 1 ? this.slideId = this.slideId + 1 : this.slideId = 0;
    } else if (event.target.dataset.slide === 'prev') {
      this.slideId === 0 ? this.slideId = this.slides.length - 1 : this.slideId = this.slideId - 1;
    }

    if (event.target.dataset.slideTo !== this.slideId && event.target.dataset.slideTo !== undefined) {
      this.slideId = event.target.dataset.slideTo;
    }

    this.renderSlide(this.slideId);
  };

}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
