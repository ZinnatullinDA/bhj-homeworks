document.addEventListener("DOMContentLoaded", () => {
  const tooltipLinks = document.querySelectorAll(".has-tooltip")
  let activeTooltip = null

  tooltipLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault()

      if (activeTooltip) {
        activeTooltip.remove()
        activeTooltip = null
      }

      if (activeTooltip && activeTooltip.trigger === link) {
        return
      }

      const tooltip = document.createElement("div")
      tooltip.className = "tooltip tooltip_active"
      tooltip.textContent = link.getAttribute("title")

      document.body.appendChild(tooltip)

      // позиционирование
      const coords = link.getBoundingClientRect()
      const position = link.dataset.position || "bottom"

      let top, left
      switch (position) {
        case "top":
          top = coords.top - tooltip.offsetHeight - 5
          left = coords.left
          break
        case "left":
          top = coords.top
          left = coords.left - tooltip.offsetWidth - 5
          break
        case "right":
          top = coords.top
          left = coords.right + 5
          break
        default: // bottom
          top = coords.bottom + 5
          left = coords.left
      }

      tooltip.style.top = `${top + window.scrollY}px`
      tooltip.style.left = `${left + window.scrollX}px`

      tooltip.trigger = link
      activeTooltip = tooltip
    })
  })

  document.addEventListener("click", event => {
    if (activeTooltip && !event.target.classList.contains("has-tooltip")) {
      activeTooltip.remove()
      activeTooltip = null
    }
  })
})
