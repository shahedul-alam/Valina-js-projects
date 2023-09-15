//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (x) => {
    const question = x.currentTarget.parentElement.parentElement;
    question.classList.toggle('show-text');
  });
});
