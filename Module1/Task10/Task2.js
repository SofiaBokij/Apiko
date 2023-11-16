// Дано: масив [3, 2, "2", null, 1.5, 9.5, undefined];
// Результат: Вивести у консоль суму чисел у масиві.

const array = [3, 2, "2", null, 1.5, 9.5, undefined];
let sum = 0;

function calculateSumOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        sum += arr[i];
      }
  }
}

calculateSumOfArray(array)
console.log('Сума чисел у масиві: ' + sum);