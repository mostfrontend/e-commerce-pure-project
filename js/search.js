function productRoute() {
  const resultItemDom = document.querySelectorAll('.result-item');

  resultItemDom.forEach((item) => {
    item.addEventListener('click', (e) => {
      const id = item.dataset.id;
      if (id) {
        localStorage.setItem('productID', JSON.stringify(id));
        window.location.href = 'single-product.html';
      }
    });
  });
}

function searchFunc(data) {
  const searchResultParent = document.querySelector('.results');
  let resultDisplay = '';

  data.forEach((item) => {
    resultDisplay += `
    <a href="#" class="result-item" data-id="${item.id}">
              <img
                src="${item.img.singleImage}"
                alt="1.png"
                class="search-thumb"
              />
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${item.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
            </a>
    `;
  });
  searchResultParent.innerHTML = resultDisplay;
  productRoute();

  const searchDOM = document.querySelector('.search-form input');
  let value = '';
  let filtered = [];
  searchDOM.addEventListener('input', (e) => {
    value = e.target.value;
    value = value.trim().toLowerCase();
    filtered = data.filter((item) =>
      item.name.trim().toLowerCase().includes(value)
    );
    let resultDisplay = '';
    if (filtered.length > 1) {
      searchResultParent.style.gridTemplateColumns = '1fr 1fr';
      filtered.forEach((item) => {
        resultDisplay += `
    <a href="#" class="result-item" data-id="${item.id}">
              <img
                src="${item.img.singleImage}"
                alt="1.png"
                class="search-thumb"
              />
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${item.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
            </a>
    `;
      });
      searchResultParent.innerHTML = resultDisplay;
    } else if (filtered.length < 2) {
      searchResultParent.style.gridTemplateColumns = '1fr';
      if (filtered == 0) {
        searchResultParent.innerHTML = `
        <a href="#" class="result-item" style="justify-content: center">
        😔Aradığınız Ürün Bulunamadı😔
        </a>
        `;
      } else {
        filtered.forEach((item) => {
          resultDisplay += `
    <a href="#" class="result-item" data-id="${item.id}">
              <img
                src="${item.img.singleImage}"
                alt="1.png"
                class="search-thumb"
              />
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${item.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
            </a>
    `;
        });
        searchResultParent.innerHTML = resultDisplay;
      }
    }
    productRoute();
  });
  searchDOM.value = '';
}

export default searchFunc;
