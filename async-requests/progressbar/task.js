const form = document.getElementById('form')
const progress = document.getElementById('progress')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  const fileInput = document.getElementById('file')
  if (!fileInput.files.length) {
    alert('Выберите файл')
    return
  }

  const formData = new FormData(form)

  const xhr = new XMLHttpRequest()
  xhr.open('POST', form.action)

  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      const percent = event.loaded / event.total
      progress.value = percent
    }
  }

  xhr.onload = function () {
    if (xhr.status === 201) {
      alert('Файл успешно загружен')
      progress.value = 1
    } else {
      alert('Ошибка загрузки')
    }
  }

  xhr.onerror = function () {
    alert('Произошла ошибка соединения')
  }

  xhr.send(formData)
})
