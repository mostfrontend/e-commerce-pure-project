import { thumbsActiveFunc } from './single-product/thumbsActive.js';
import { singleThumbs } from './glide.js';
import zoomFunc from './single-product/zoom.js';
import colorsFunc from './single-product/colors.js';
import valuesFunc from './single-product/values.js';
import tabsFunc from './single-product/tabs.js';
import commentFunc from './single-product/comments.js';

const productID = localStorage.getItem('productID')
  ? JSON.parse(localStorage.getItem('productID'))
  : 1;

const product = localStorage.getItem('products')
  ? JSON.parse(localStorage.getItem('products'))
  : 1;

const findProduct = product.find((item) => item.id === Number(productID));

const productTitle = document.querySelector('.product-title');
const newPrice = document.querySelector('.new-price');
const oldPrice = document.querySelector('.old-price');

//* product name
productTitle.innerHTML = findProduct.name;

//* product price
newPrice.innerHTML = `$${findProduct.price.newPrice.toFixed(2)}`;
oldPrice.innerHTML = `$${findProduct.price.oldPrice.toFixed(2)}`;

//* product gallery
const singleImage = document.getElementById('single-img');
const galleryThumbs = document.querySelector('.gallery-thumbs');

singleImage.src = findProduct.img.singleImage;
let result = '';

findProduct.img.thumbs.forEach((item) => {
  result += `
  <li class="glide__slide">
                        <img
                          src="${item}"
                          alt=""
                          class="img-fluid"
                        />
                      </li>
  `;
});

galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();

const productThumbs = document.querySelectorAll(
  '.product-thumb .glide__slide img'
);

productThumbs[0].classList.add('active');

//* product add to cartbage
let cart = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const findCart = cart.find((item) => item.id === findProduct.id);
const quantityDOM = document.getElementById('quantity');
const btnAddToCart = document.getElementById('add-to-cart');
let cartItems = document.querySelector('.header-cart-count');

if (findCart) {
  btnAddToCart.setAttribute('disabled', 'disabled');
} else {
  btnAddToCart.addEventListener('click', (e) => {
    e.preventDefault();
    cart.push({ ...findProduct, quantity: Number(quantityDOM.value) });
    localStorage.setItem('cart', JSON.stringify(cart));
    btnAddToCart.setAttribute('disabled', 'disabled');
    cartItems.innerHTML = cart.length;
  });
}
