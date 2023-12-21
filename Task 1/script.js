
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const input = document.getElementById("search")
  const output = document.getElementById("output")

  const inputValue = parseFloat(input.value)

  if (!isNaN(inputValue)) {
    const pounds = inputValue * 2.2046
    const grams = inputValue / 0.001
    const ounces = inputValue * 35.274
    
    output.innerHTML = `<p>${inputValue} kg = ${pounds.toFixed(2)} lb</p>`
    output.innerHTML += `<p>${inputValue} kg = ${grams.toFixed(2)} g</p>`
    output.innerHTML += `<p>${inputValue} kg = ${ounces.toFixed(2)} oz</p>`
  } else {
    output.innerHTML = "<p>Prašome įveskite skaičius</p>"
  }
})






