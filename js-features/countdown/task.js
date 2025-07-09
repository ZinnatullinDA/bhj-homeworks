document.addEventListener('DOMContentLoaded', () => {
  const timerEl = document.getElementById('timer')
  if (!timerEl) return
  let seconds = Number.parseInt(timerEl.textContent, 10)

  const format = (total) => {
    const h = String(Math.floor(total / 3600)).padStart(2, '0')
    const m = String(Math.floor(total % 3600 / 60)).padStart(2, '0')
    const s = String(total % 60).padStart(2, '0')
    return `${h}:${m}:${s}`
  }

  timerEl.textContent = format(seconds)

  const tick = setInterval(() => {
    seconds -= 1
    timerEl.textContent = format(seconds)

    if (seconds <= 0) {
      clearInterval(tick)
      alert('Вы победили в конкурсе!')
    }
  }, 1000)
})
