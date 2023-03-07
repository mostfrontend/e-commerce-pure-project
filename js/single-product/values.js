function valuesFunc() {
  const valuesList = document.querySelectorAll('.values-list span');

  valuesList.forEach((valueSpan) => {
    valueSpan.addEventListener('click', () => {
      valuesList.forEach((item) => {
        item.classList.remove('active');
      });
      valueSpan.classList.add('active');
    });
  });
}

export default valuesFunc();
