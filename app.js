$('#currentDay').text(moment().format('dddd MMM Do YYYY, h:mm:ss a'))

hour = parseInt(moment().format('H'))
const hours = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5]

const setTime = () => {
  for (i = 0; i < hours.length; i++) {
    if (hours[i] < hour) {
      $(`#${hours[i]}`).addClass('past')
    } else if (hours[i] === hour) {
      $(`#${hours[i]}`).addClass('present')
    } else {
      $(`#${hours[i]}`).addClass('future')
    }
  }
}
setTime()

let workDay = JSON.parse(localStorage.getItem('dayPlan'))
if (workDay) {

}
else {
  workDay = [{
    time: 0,
    activity: 'nothing'
  }]
}

workDay.forEach((activity, i) => {
  $(`#${workDay[i].time}`).text(workDay[i].activity)
})

$('.button').on('click', function () {
  let timeFinder = ($(this).attr('id').slice(1, ($(this).attr('id').length)))
  let inputSearch = `i${timeFinder}`
  let userInput = $(`#${inputSearch}`).val()
  $(`#${timeFinder}`).text(userInput)

  workDay.push({
    time: timeFinder,
    activity: userInput
  })
  localStorage.setItem('dayPlan', JSON.stringify(workDay))
  location.reload()
})

$('.delete').on('click', function () {
  let timeFinder = ($(this).attr('id').slice(1, ($(this).attr('id').length)))
  for (i = 0; i < workDay.length; i++) {
    if (workDay[i].time === timeFinder) {
      workDay.splice(i, 1)
      localStorage.setItem('dayPlan', JSON.stringify(workDay))
    }
    location.reload()
  }
})