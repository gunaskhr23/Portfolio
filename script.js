const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerHeight = window.innerHeight * 0.85;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < triggerHeight) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
