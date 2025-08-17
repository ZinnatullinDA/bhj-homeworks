const form = document.getElementById("tasks__form")
const input = document.getElementById("task__input")
const taskList = document.getElementById("tasks__list")

form.addEventListener("submit", function (event) {
  event.preventDefault()

  const text = input.value.trim()
  if (text === "") return

  const task = document.createElement("div")
  task.classList.add("task")

  const title = document.createElement("div")
  title.classList.add("task__title")
  title.textContent = text

  const remove = document.createElement("a")
  remove.href = "#"
  remove.classList.add("task__remove")
  remove.innerHTML = "&times"

  remove.addEventListener("click", (e) => {
    e.preventDefault()
    task.remove()
  })

  task.appendChild(title)
  task.appendChild(remove)

  taskList.appendChild(task)

  input.value = ""
})
