
const text = "Web Developer | Frontend Enthusiast | Learner";
let index = 0;
function typeEffect() {
  document.getElementById("typed").textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
});
fadeElements.forEach(el => observer.observe(el));

document.getElementById("backToTop").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
