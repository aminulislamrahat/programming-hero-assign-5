let currentDate = document.getElementById('current-date')
let currentDay = document.getElementById('current-day')
function getCurrentDate () {
  let now = new Date()
  let datePart = now.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  return `${datePart}`
}

function getCurrentDay () {
  let now = new Date()
  let dayName = now.toLocaleDateString('en-US', { weekday: 'short' })

  return `${dayName}, `
}

currentDate.textContent = getCurrentDate()
currentDay.textContent = getCurrentDay()
