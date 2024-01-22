const about = document.querySelector('.what');
const innerLinks = document.querySelector('.about-inner-links');

about.addEventListener('click', () => {
  innerLinks.classList.toggle('show');
});
