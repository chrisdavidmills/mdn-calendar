// Random number function

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Function to set random month heading colors

const headings = document.querySelectorAll('h2');
const articles = document.querySelectorAll('article');

for(let i = 0; i < headings.length; i++) {
  const randomColor = `rgb(${random(50,200)},${random(100,200)},${random(50,200)})`;
  headings[i].style.background = randomColor;
  articles[i].style.borderColor = randomColor;
}
