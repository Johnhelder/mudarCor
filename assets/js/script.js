const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  document.body.style.background = cores[3];
})