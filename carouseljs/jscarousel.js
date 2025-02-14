const slide = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const nav = document.querySelector('.carousel-nav');

let index = 0;

function showSlide(i) {
  slide.style.transform = `translateX(${-i * 100}%)`;
  

  prevBtn.style.display = (i === 0) ? 'none' : 'block';
 
  nextBtn.style.display = (i === images.length - 1) ? 'none' : 'block';

  nav.querySelectorAll('button').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === i);
  });
}

function createNavButtons() {
  nav.innerHTML = '';
  for(let i= 0;i<images.length;i++){
    const btn = document.createElement('button');
    btn.innerText = i + 1;
    btn.addEventListener('click', () => {
      index = i;
      showSlide(index);
    });
    nav.appendChild(btn);
  };
}

createNavButtons();
showSlide(index);

nextBtn.addEventListener('click', () => {
  if (index < images.length - 1) index++;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  if (index > 0) index--;
  showSlide(index);
});
