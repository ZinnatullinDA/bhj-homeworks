const rotators = document.querySelectorAll('.rotator')

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case')
  let activeIndex = 0

  function showNext() {
    cases[activeIndex].classList.remove('rotator__case_active')
    activeIndex = (activeIndex + 1) % cases.length
    const currentCase = cases[activeIndex]
    currentCase.style.color = currentCase.dataset.color
    currentCase.classList.add('rotator__case_active')
    setTimeout(showNext, currentCase.dataset.speed)
  }

  cases[activeIndex].style.color = cases[activeIndex].dataset.color
  setTimeout(showNext, cases[activeIndex].dataset.speed)
})
