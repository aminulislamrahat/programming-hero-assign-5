let completedCountElement = document.getElementById('completed-count')
let completedCount = parseInt(completedCountElement.textContent)

let taskAssignedElement = document.getElementById('task-assigned')
let taskAssignedCount = parseInt(taskAssignedElement.textContent)

let activityLog = document.getElementById('activity-log')
let clearHistoryButton = document.getElementById('clear-history')

let completedButtons = document.querySelectorAll('.completed-btn')

function getCurrentTime () {
  let now = new Date()
  return now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
}

for (let i = 0; i < completedButtons.length; i++) {
  completedButtons[i].addEventListener('click', function () {
    if (completedButtons[i].disabled) return
    alert('Board updated successfully!')
    completedCount++
    completedCountElement.textContent = completedCount
    taskAssignedCount--
    taskAssignedElement.textContent = taskAssignedCount

    if (taskAssignedCount === 0) {
      alert('Congrats!!! You have completed all the current task')
    }

    completedButtons[i].disabled = true
    completedButtons[i].style.backgroundColor = '#3752FD33'
    completedButtons[i].style.cursor = 'not-allowed'
    completedButtons[i].style.transform = 'none'
    completedButtons[i].classList.remove('hover:scale-110')

    let taskTitle =
      completedButtons[i].parentElement.parentElement.querySelector(
        'h1'
      ).innerText
    console.log('task ti', taskTitle)
    let newLog = document.createElement('p')
    newLog.className =
      'bg-[#F4F7FF] p-2.5 text-black text-base font-normal rounded-lg'
    newLog.textContent = `You have completed the task ${taskTitle} at ${getCurrentTime()}`
    activityLog.append(newLog)
  })
}

clearHistoryButton.addEventListener('click', function () {
  activityLog.innerHTML = ''
})
