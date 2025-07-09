const counter  = document.getElementById('clicker__counter')
const cookie   = document.getElementById('cookie')

let isBig = false
const SMALL_SIZE = 200
const BIG_SIZE   = 240

cookie.addEventListener('click', () => {
  counter.textContent = Number(counter.textContent) + 1
  if (isBig) {
    cookie.width  = SMALL_SIZE
    cookie.height = SMALL_SIZE
  } else {
    cookie.width  = BIG_SIZE
    cookie.height = BIG_SIZE
  }
  isBig = !isBig
})