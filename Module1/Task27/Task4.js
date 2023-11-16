// Створити клас який містить поле name. Зробити так щоб це поле автоматично через 5с занулювалося(ставало null) після створення об’єкта. Також добавити функцію(метод) цього класу яка буде зупиняти(скасовувати) це занулювання

class TimerResettable {
  constructor(name) {
    this.name = name;
    this.timer = setTimeout(() => {
      this.name = null;
    }, 5000);
  }

  resetTimer() {
    clearTimeout(this.timer);
  }
}

const myObject = new TimerResettable("Example Object");
console.log(myObject.name);

setTimeout(() => {
  console.log(myObject.name);
}, 5000);

myObject.resetTimer();