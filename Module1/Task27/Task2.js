// Дано: обєкт Date та його методи https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// Створити ф-ію clock, яка імітує поведінку годинника: кожну секунду виводить в консоль час у форматі "Hours:Minutes:Seconds";

function clock() {
  function getCurrentTime() {
    const currentTime = new Date();

    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const seconds = currentTime.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  function logTime() {
    console.log(getCurrentTime())
  }

  setInterval(logTime, 1000)

}

clock();