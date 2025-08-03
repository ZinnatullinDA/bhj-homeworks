const tabsNav = Array.from(document.querySelectorAll('.tab'))
const tabContents = Array.from(document.querySelectorAll('.tab__content'))

tabsNav.forEach((tab) => {
  tab.addEventListener('click', () => {   
    tabsNav.forEach(tabNav => tabNav.classList.remove('tab_active'))
    tabContents.forEach(tabCont => tabCont.classList.remove('tab__content_active'))

    let indexTabNav = tabsNav.indexOf(tab)
    tabsNav[indexTabNav].classList.add('tab_active')
    tabContents[indexTabNav].classList.add('tab__content_active')
  })
})