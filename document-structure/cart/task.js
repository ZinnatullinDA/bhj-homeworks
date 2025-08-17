const cart = document.querySelector('.cart__products')
const products = document.querySelectorAll('.product')

products.forEach(product => {
  const decBtn = product.querySelector('.product__quantity-control_dec')
  const incBtn = product.querySelector('.product__quantity-control_inc')
  const valueEl = product.querySelector('.product__quantity-value')
  const addBtn = product.querySelector('.product__add')

  decBtn.addEventListener('click', () => {
    let value = parseInt(valueEl.textContent, 10)
    if (value > 1) {
      valueEl.textContent = value - 1
    }
  })

  incBtn.addEventListener('click', () => {
    let value = parseInt(valueEl.textContent, 10)
    valueEl.textContent = value + 1
  })

  addBtn.addEventListener('click', () => {
    const id = product.dataset.id
    const count = parseInt(valueEl.textContent, 10)
    const imageSrc = product.querySelector('.product__image').src

    let cartProduct = cart.querySelector(`.cart__product[data-id="${id}"]`)
    if (cartProduct) {
      const cartCountEl = cartProduct.querySelector('.cart__product-count')
      cartCountEl.textContent = parseInt(cartCountEl.textContent, 10) + count
    } else {
      const newProduct = document.createElement('div')
      newProduct.classList.add('cart__product')
      newProduct.dataset.id = id

      newProduct.innerHTML = `
        <img class="cart__product-image" src="${imageSrc}">
        <div class="cart__product-count">${count}</div>
      `
      cart.appendChild(newProduct)
    }

    valueEl.textContent = 1
  })
})
