const commentReviews = () => {
  const commentStars = document.querySelectorAll('.star');

  commentStars.forEach((star) => {
    star.addEventListener('click', (e) => {
      e.preventDefault();
      commentStars.forEach((item) => item.classList.remove('active'));
      star.classList.add('active');
    });
  });
};

const addCommentDOM = () => {
  let comments = [];

  let addCommentText = document.getElementById('comment');
  let addCommentName = document.getElementById('name');
  let addCommentBtn = document.querySelector('.form-submit input');

  let commentText = '';
  let commentName = '';

  addCommentText.addEventListener('input', (e) => {
    commentText = e.target.value;
  });

  addCommentName.addEventListener('input', (e) => {
    commentName = e.target.value;
  });

  function addBtn(e) {
    const commentListParent = document.querySelector('.comment-list');
    e.preventDefault();
    comments.push({ text: commentText, name: commentName });
    let resultParent = '';
    // Update get local Time start
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let uptime = new Date();
    let month = uptime.getMonth();
    month = months[month];
    let weekday = uptime.getDate();
    let year = uptime.getFullYear();
    // Update get local Time end

    comments.forEach((item) => {
      resultParent += `
      <li class="comment-item">
       <div class="comment-avatar">
                        <img src="./img/avatars/avatar1.jpg" alt="" />
                      </div>
                      <div class="comment-text">
                        <ul class="comment-star">
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
                        <div class="comment-meta">
                          <strong>${item.name}</strong>
                          <span>-</span>
                          <time>${month} ${weekday}, ${year}</time>
                        </div>
                        <div class="comment-description">
                          <p>
                            ${item.text}
                          </p>
                        </div>
          </div>
         </li>
     `;
      commentListParent.innerHTML = resultParent;
      addCommentText.value = '';
      addCommentName.value = '';
    });
  }
  addCommentBtn.addEventListener('click', addBtn);
};

function commentFunc() {
  commentReviews();
  addCommentDOM();
}

export default commentFunc();
