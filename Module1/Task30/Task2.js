// Крім ресурсу /users API надає ще інші ресурси, наприклад /albums щоб отримати дані фотоальбомів
// І ці ресурси можуть залежати один від одного, наприклад ми можемо отримати альбоми які належать певному користувачу за допомогою ендпоінту /users/1/albums - отримаємо альбоми користувача у якого поле id = 1
// Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
// Використати fetch.
// Після отримання відповіді від API, перевірити чи запит виконався успішно (чи знаходиться код відповіді в діапазоні 200-299)
// Вивести у консоль результат

const URL = "https://jsonplaceholder.typicode.com";
const userID = 10;

fetch(`${URL}/users/${userID}/albums`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка відповіді: ${response.status}`);
    }
    console.log(response.status);
    return response.json();
  })
  .then((userAlbums) => {
    console.log(`Список альбомів користувача з id: ${userID}`);
    userAlbums.forEach((albums) => {
      console.log(albums);
    });
  })
  .catch((error) => {
    console.error("Сталася помилка:", error);
  });
