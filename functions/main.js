let themeButton = document.getElementById('theme-btn')

function getRandomColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

themeButton.addEventListener('click', function () {
  let img = this.querySelector('img')
  let rotation = 0

  let interval = setInterval(() => {
    rotation += 10
    img.style.transform = `rotate(${rotation}deg)`

    if (rotation >= 360 * 1) {
      clearInterval(interval)
    }
  }, 15)
  document.body.style.backgroundColor = getRandomColor()
})
