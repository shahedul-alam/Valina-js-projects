const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveway = document.querySelector('.giveway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const futureDate = new Date(2023, 11, 20, 23, 59, 59);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveway.textContent = `giveway ends on ${weekday}, ${date} ${month} ${year}, ${addZero(hour)}:${addZero(minutes)}am`;

function addZero(item)
{
  if(item < 10)
    return `0${item}`;

  return item;
}

function getRemainingTime()
{
  const futureTime = futureDate.getTime();
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMin);
  const seconds = Math.floor((t % oneMin) / 1000);

  const values = [days, hours, minutes, seconds];

  items.forEach((item, index) => {
    item.innerHTML = addZero(values[index]);
  });

  if(t < 0)
  {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveway has expired.</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);