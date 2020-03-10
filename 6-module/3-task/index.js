'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    element.innerHTML = this.template;
    this.list = element.querySelectorAll('.list-group-item');
    this.list.forEach(item => item.addEventListener('pointerenter', this.OnPointerEnter.bind(this)));
    this.list.forEach(item => item.addEventListener('pointerleave', this.OnPointerLeave.bind(this)));
  }

  OnPointerEnter = (event) => {
    event.target.querySelector('.dropdown-menu')
      .classList
      .add('show');
    document.querySelector('.backdrop')
      .classList
      .add('show');
  };

  OnPointerLeave = (event) => {
    event.target.querySelector('.dropdown-menu')
      .classList
      .remove('show');
    document.querySelector('.backdrop')
      .classList
      .remove('show');
  };
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
