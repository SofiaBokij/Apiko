// На лекції ми використовували API jsonplaceholder - 'https://jsonplaceholder.typicode.com/'
// Можна перейти за посиланням і ще раз ознайомитись з даним API
// Можна створити константу baseUrl = https://jsonplaceholder.typicode.com
// const baseUrl = "https://jsonplaceholder.typicode.com";
// Будемо використовувати ресурс /users щоб отримати дані користувачів
// Завдання: Отримати список користувачів з віддаленого ресурсу /users.
// Використати fetch.
// Очікуваний результат - масив користувачів

const URL = "https://jsonplaceholder.typicode.com";

fetch(`${URL}/users`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка відповіді: ${response.status}`);
    }
    return response.json();
  })
  .then((users) => {
    console.log("Список користувачів:");
    users.forEach((user) => {
      console.log(user);
    });
  })
  .catch((error) => {
    console.error("Сталася помилка:", error);
  });
