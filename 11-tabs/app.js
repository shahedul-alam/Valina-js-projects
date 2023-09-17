const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if(id)
  {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    articles.forEach((each) => {
      each.classList.remove('active');
    })
    const article = document.getElementById(id);
    article.classList.add('active');
  }
});