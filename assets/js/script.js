const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  document.body.style.background = cores[3];
  const randomColor = getRandomColor();
  console.log(randomColor);
})

function getRandomColor(){
  return Math.floor(Math.random() * cores.length)
}