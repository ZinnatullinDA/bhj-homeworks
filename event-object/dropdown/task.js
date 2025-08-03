const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach((dropdown) => {
  const dropdownValue = document.querySelector('.dropdown__value')
  const dropdownList = document.querySelector('.dropdown__list')
  const dropdownItems = document.querySelectorAll('.dropdown__item')
  const dropdownLink = document.querySelector('.dropdown__link')

  dropdownValue.addEventListener('click', (event) => {
    event.stopPropagation()
    dropdownList.classList.toggle('dropdown__list_active')
  })

  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      newText = dropdownItem.textContent
      dropdownValue.textContent = newText
      dropdownList.classList.remove('dropdown__list_active')
    })
  })

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove('dropdown__list_active')
    }
  })
})


