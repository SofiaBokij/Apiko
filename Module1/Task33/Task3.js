// Зробити запит до SWAPI щоб отримати список людей з прізвищем Skywalker, вивести у консоль.
// Документація по пошуку - https://swapi.py4e.com/documentation#search
// Результат: вивести у консоль список людей з прізвищем Skywalker у форматі: [{ name: 'Luke Skywalker', height: 172, ... }, { name: 'Anakin Skywalker', height: 188, ... }, ...]

const URL = 'https://swapi.py4e.com/api/planets'

async function getPlanets() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Помилка відповіді: ${response.status}`);
    }

    const data = await response.json();
    const planets = data.results.map(planet => ({
      name: planet.name,
      rotation_period: planet.rotation_period,
    }));

    console.log(planets);
  } catch (error) {
    console.error("Помилка запиту:", error);
  }
}

getPlanets();