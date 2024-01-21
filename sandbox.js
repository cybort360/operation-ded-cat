const about = document.querySelector('.what');
const innerLinks = document.querySelector('.about-inner-links');

about.addEventListener('mouseover', () => {
  innerLinks.classList.add('show');
});

about.addEventListener('mouseout', () => {
  innerLinks.classList.remove('show');
});
