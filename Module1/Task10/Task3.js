// Дано: Функція яка приймає назва місяця у форматі = "DECEMBER" | "FEBRUARY" | "JULY" і тд.
// Результат: Вивести у консоль назву пори року якій відповідає даний місяць. “summer” | “autumn” | “winter” | “spring”.

function printSeasonByMonth(month) {
  const upperCaseMonth = month.toUpperCase();

  switch (upperCaseMonth) {
    case "DECEMBER":
    case "JANUARY":
    case "FEBRUARY":
      console.log("Winter");
      break;
    case "MARCH":
    case "APRIL":
    case "MAY":
      console.log("Spring");
      break;
    case "JUNE":
    case "JULY":
    case "AUGUST":
      console.log("Summer");
      break;
    case "SEPTEMBER":
    case "OCTOBER":
    case "NOVEMBER":
      console.log("Autumn");
      break;
    default:
      console.error("Помилка: Невірний місяць");
  }
}

printSeasonByMonth("month");
printSeasonByMonth("January");
printSeasonByMonth("March");
printSeasonByMonth("August");
printSeasonByMonth("November");
