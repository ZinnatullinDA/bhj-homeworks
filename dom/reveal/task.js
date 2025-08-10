const revealElements = document.querySelectorAll('.reveal')

function isVisible(elem) {
  const rect = elem.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

function revealOnScroll() {
  revealElements.forEach(el => {
    if (isVisible(el)) {
      el.classList.add('reveal_active')
    }
  })
}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();
