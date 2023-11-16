// Завдання. Створити нового користувача - зробити POST запит на ендпоінт 'https://jsonplaceholder.typicode.com/users'.
// Використати fetch.
// Для нового користувача вказати поля name, username, email.
// Оскільки дане API працює з JSON то body запиту повинне бути у JSON форматі.
// Вказати для запиту заголовок 'Content-type' з значенням 'application/json'
// Після отримання відповіді від API, перевірити чи запит виконався успішно
// Вивести у консоль результат

const URL = "https://jsonplaceholder.typicode.com"

const newUser = {
  name: "Sofia Bokij",
  username: "bokijsofia",
  email: "bokijsofia@gmail.com"
};

fetch(`${URL}/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Помилка відповіді: ${response.status}`);
    }
    return response.json();
  })
  .then(newUser => {
    console.log("Новий користувач створений:");
    console.log(newUser);
  })
  .catch(error => {
    console.error("Сталася помилка:", error);
  });