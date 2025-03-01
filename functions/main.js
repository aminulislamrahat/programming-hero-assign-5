let themeButton = document.getElementById('theme-btn')

function getRandomColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

themeButton.addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomColor()
})
