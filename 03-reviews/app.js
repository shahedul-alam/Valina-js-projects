// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const randomButton = document.querySelector('.random-btn');

// Pointing to the review
let currenReview = 0;

// Load the given review
function loadReview()
{
  const review = reviews[currenReview];
  img.src = review.img;
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.text;
}

// Displaying default review
window.addEventListener('DOMContentLoaded', () => {
  loadReview(currenReview);
});

//Displaying next review 
nextButton.addEventListener('click', () => {
  currenReview++;
  if(currenReview > reviews.length - 1)
    currenReview = 0;
  loadReview(currenReview);
});

// Displaying previous review
prevButton.addEventListener('click', () => {
  currenReview--;
  if(currenReview < 0)
    currenReview = reviews.length - 1;
  loadReview(currenReview);
});

// Displaing random reviews
randomButton.addEventListener('click', () => {
  let randomNumber = getRandomNumber();

  while(randomNumber === currenReview)
    randomNumber = getRandomNumber();

  currenReview = randomNumber;
  loadReview(currenReview);
});

// Function to generate a random-number
function getRandomNumber()
{
  return Math.floor(Math.random() * reviews.length);
}



