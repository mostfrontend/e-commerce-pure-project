import header from './header.js';
import productsFunc from './products.js';
import searchFunc from './search.js';
import backtotop from './backtotop.js';

//todo add product to localStorage

//! IIFE Javascript start
(async function () {
  const getDATA = await fetch('../js/data.json');
  const data = await getDATA.json();

  data ? localStorage.setItem('products', JSON.stringify(data)) : [];
  productsFunc();
  searchFunc(data);
})();

const cartItems = document.querySelector('.header-cart-count');

cartItems.innerHTML = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')).length
  : '0';
