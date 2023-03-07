import { Product1 } from './glide.js';
import { Product2 } from './glide.js';

let products = [];
let cart = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

function addToCart() {
  const cartItems = document.querySelector('.header-cart-count');
  const buttons = document.getElementsByClassName('add-to-cart');

  Array.from(buttons).forEach((button) => {
    // const inCart = cart.find((item) => item.id === Number(button.dataset.id));

    button.addEventListener('click', () => {
      const id = button.dataset.id;
      const findProduct = products.find((product) => product.id === Number(id));

      cart.push({ ...findProduct, quantity: 1 });
      button.setAttribute('disabled', 'disabled');
      localStorage.setItem('cart', JSON.stringify(cart));
      cartItems.innerHTML = cart.length;
    });
  });
}

function productRoute() {
  const productLink = document.getElementsByClassName('product-link');

  Array.from(productLink).forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const id = button.dataset.id;
      localStorage.setItem('productID', JSON.stringify(id));
      window.location.href = 'single-product.html';
    });
  });
}

function productsFunc() {
  products = JSON.parse(localStorage.getItem('products'));
  const productsContainer = document.getElementById('products-list');
  const productsContainer2 = document.getElementById('products-list2');

  let results = '';
  products.forEach((item) => {
    results += `
    <li class="product-item  glide__slide">
              <div class="product-image">
                <a href="#">
                  <img src="${item.img.singleImage}"      class="img1"   alt="">
                  <img src="${item.img.thumbs[1]}" class="img2"  alt="">
                </a>
              </div>
              <div class="product-info">
                <a href="#" class="product-title">
                  ${item.name}
                </a>
                <ul class="product-star">
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i class="bi bi-star-half"></i>
                  </li>
                </ul>
                <div class="product-prices">
                  <strong class="new-price">$${item.price.newPrice.toFixed(
                    2
                  )}</strong>
                  <span class="old-price">$${item.price.oldPrice.toFixed(
                    2
                  )}</span>
                </div>
                <span class="product-discount">-${item.discount}%</span>
                <div class="product-links">
                  <button class="add-to-cart" data-id="${item.id}">
                    <i class="bi bi-basket-fill"></i>
                  </button>
                  <button>
                    <i class="bi bi-heart-fill"></i>
                  </button>
                  <a href="#" class="product-link" data-id="${item.id}">
                    <i class="bi bi-eye-fill" ></i>
                  </a>
                  <a href="#">
                    <i class="bi bi-share-fill"></i>
                  </a>
                </div>
              </div>
  </li>`;

    productsContainer ? (productsContainer.innerHTML = results) : '0';
    productsContainer2 ? (productsContainer2.innerHTML = results) : '0';
    addToCart();
  });
  Product1();
  Product2();
  productRoute();
}

export default productsFunc;
