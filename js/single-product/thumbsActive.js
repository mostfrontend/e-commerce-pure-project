export function thumbsActiveFunc() {
  const thumbs = document.querySelectorAll('.gallery-thumbs .img-fluid');
  const singleImage = document.getElementById('single-img');

  thumbs.forEach((item) => {
    item.addEventListener('click', (e) => {
      thumbs.forEach((item) => {
        item.classList.remove('active');
      });
      singleImage.src = item.src;
      item.classList.add('active');
    });
  });
}
