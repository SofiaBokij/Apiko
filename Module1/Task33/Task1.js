// Переписати функцію з Promise на async/await з використанням fetch.

async function fetchAlbums() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');

    if (!response.ok) {
      throw new Error(`Помилка відповіді: ${response.status}`);
    }

    const data = await response.json();
    console.log("Результат:", data);
  } catch (error) {
    console.log("Помилка запиту:", error);
  }
}

fetchAlbums();