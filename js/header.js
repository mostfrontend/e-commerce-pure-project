import searchFunc from './search.js';

function sidebarFunc() {
  //* home sidebar start
  const sidebar = document.querySelector('#sidebar');
  const btnOpenSidebar = document.querySelector('#btn-menu');
  const closeSidebar = document.querySelector('#close-sidebar');
  btnOpenSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
  });
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
  });

  //* click outside start
  document.addEventListener('click', (event) => {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.classList.remove('show-sidebar');
    }
  });
  //! click outside end
  //! home sidebar end
}

function searchModalFunc() {
  //* open-search-modal start
  const btnOpenSearch = document.querySelector('.search-button');
  const modalSearchDisplay = document.querySelector('.modal-search');
  const modalSearchDisplaywrp = document.querySelector('.modal-wrapper');
  const btnCloseModalDisplay = document.getElementById('close-search');
  const searchDOM = document.querySelector('.search-form input');
  btnOpenSearch.addEventListener('click', () => {
    modalSearchDisplay.classList.add('open-search-mdl');
  });

  btnCloseModalDisplay.addEventListener('click', () => {
    modalSearchDisplay.classList.remove('open-search-mdl');
    //modal search clear
    searchDOM.value = '';
    (async function () {
      const getDATA = await fetch('../js/data.json');
      const data = await getDATA.json();
      const searchResultParent = document.querySelector('.results');
      data ? localStorage.setItem('products', JSON.stringify(data)) : [];
      searchFunc(data);
      searchResultParent.style.gridTemplateColumns = '1fr 1fr';
    })();
  });
  //* close-outside start
  document.addEventListener('click', (e) => {
    if (
      !e.composedPath().includes(modalSearchDisplaywrp) &&
      !e.composedPath().includes(btnOpenSearch)
    ) {
      modalSearchDisplay.classList.remove('open-search-mdl');
      //modal search clear

      searchDOM.value = '';
      (async function () {
        const getDATA = await fetch('../js/data.json');
        const data = await getDATA.json();
        const searchResultParent = document.querySelector('.results');
        data ? localStorage.setItem('products', JSON.stringify(data)) : [];
        searchFunc(data);
        searchResultParent.style.gridTemplateColumns = '1fr 1fr';
      })();
    }
  });
  //* close-outside end
  //! open-search-modal end
}

function headerFunc() {
  sidebarFunc();
  searchModalFunc();
}

export default headerFunc();
