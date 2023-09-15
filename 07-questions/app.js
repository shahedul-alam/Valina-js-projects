//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach((btn) => {
//   btn.addEventListener('click', (x) => {
//     const question = x.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    question.classList.toggle('show-text');
  });
});