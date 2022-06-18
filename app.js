const observerImg = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.getElementsByClassName('img-container')[0].classList.add('animated-image');
      document.getElementsByClassName('img-container')[1].classList.add('animated-image');
    }
  })
});

observerImg.observe(document.querySelector('.js-cert'));
observerImg.observe(document.querySelector('.html-css-cert'));

const observerSkills = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.getElementsByClassName('skills')[0].classList.add('animated-skills');
      document.getElementsByClassName('skills')[1].classList.add('animated-skills');
    }
  })
});

observerSkills.observe(document.querySelector('.js-cert'));
observerSkills.observe(document.querySelector('.html-css-cert'));

const sectionBtn = document.getElementsByClassName('section-btn');
const anchors = Array.from(sectionBtn);

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});