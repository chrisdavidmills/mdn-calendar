// Random number function

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Function to set random month heading colors

const headings = document.querySelectorAll('h2');
const articles = document.querySelectorAll('article');

for(let i = 0; i < headings.length; i++) {
  const randomColor = `rgb(${random(0,100)},${random(0,150)},${random(0,200)})`;
  headings[i].style.background = randomColor;
  articles[i].style.borderColor = randomColor;
}
