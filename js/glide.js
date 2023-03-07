const productsContainer = document.getElementById('products-list');
const productsContainer2 = document.getElementById('products-list2');

export function Product1() {
  const config = {
    type: 'carousel',
    perView: 4,
    autoplay: 3000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };
  productsContainer && new Glide('.product-carousel', config).mount();
}

export function Product2() {
  const config2 = {
    type: 'carousel',
    perView: 4,
    autoplay: 3000,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };
  productsContainer2 && new Glide('.product-carousel2', config2).mount();
}

export function singleThumbs() {
  const config3 = {
    perView: 6,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 3,
      },
      576: {
        perView: 3,
      },
    },
  };

  new Glide('.product-thumb', config3).mount();
}
