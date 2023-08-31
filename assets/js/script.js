const cores = ['Red', 'Blue', 'Yellow', 'Black', 'Purple', 'Green'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  const randomColor = getRandomColor();
  document.body.style.background = cores[randomColor];
  // console.log(randomColor);
  color.textContent = cores[randomColor];
})

function getRandomColor(){
  return Math.floor(Math.random() * cores.length)
}