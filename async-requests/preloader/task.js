const loader = document.getElementById("loader")
const items = document.getElementById("items")

async function loadCurrency() {
  try {
    const response = await fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
    const data = await response.json()
    const valutes = data.response.Valute

    for (let key in valutes) {
      const valute = valutes[key]

      const item = document.createElement("div")
      item.classList.add("item")

      item.innerHTML = `
        <div class="item__code">${valute.CharCode}</div>
        <div class="item__value">${valute.Value}</div>
        <div class="item__currency">руб.</div>
      `

      items.appendChild(item)
    }
  } catch (error) {
    console.error("Ошибка загрузки валют:", error)
  } finally {
    loader.classList.remove("loader_active")
  }
}

loadCurrency()
