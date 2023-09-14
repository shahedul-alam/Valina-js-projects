let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (x) => {
    console.log(x);
    const styles = x.currentTarget.classList;
    if(styles.contains('decrease'))
      count--;
    else if(styles.contains('increase'))
      count++;
    else
      count = 0;

    if(count > 0)
      value.style.color = 'green';
    else if(count < 0)
      value.style.color = 'red';
    else
      value.style.color = '#222';

    value.textContent = count;
  });
});