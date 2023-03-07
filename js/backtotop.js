function backToTop() {
  const navbar = document.getElementById('home');
  const toplink = document.querySelector('.top-link');

  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navbarHeight + 200) {
      navbar.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed-nav');
    }
    //back to top btn active
    if (scrollHeight > 500) {
      toplink.classList.add('show-toplink');
    } else {
      toplink.classList.remove('show-toplink');
    }
  });
  //back to top btn

  toplink.addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('href').slice(1);
    const getID = document.getElementById(id);

    const navbarHeight = navbar.getBoundingClientRect().height;
    let position = getID.offsetTop - navbarHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
}

export default backToTop();
