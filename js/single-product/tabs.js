function tabsFunc() {
  const btnTabs = document.querySelectorAll('.tab-button');
  const contentDOM = document.querySelectorAll('.content');
  const tabsWrapperDOM = document.querySelector('.tab-list');

  tabsWrapperDOM.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      btnTabs.forEach((button) => button.classList.remove('active'));
      e.target.classList.add('active');
      const element = document.getElementById(id);
      contentDOM.forEach((content) => content.classList.remove('active'));
      element.classList.add('active');
    }
  });
}

export default tabsFunc();
