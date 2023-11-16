// Написати функцію яка буде використовувати попередньо написану функцію fetchSWAPI, ця функція повинна робити запити щоб отримати дані людини з вказаним ім'ям, після цього на основі отриманої відповіді паралельно отримати деталі фільмів у яких людина з'явилась.
// Функція повинна повертати об'єкт з ім'ям людини та списком з деталями фільмів у форматі: {name: ‘’, films: [{title: ‘’, episode_id: ‘’, ...}, ...]}

async function getPersonFilms(name) {
  try {
    const personData = await fetchSWAPI(`people/?search=${name}`);

    if (personData.count === 0) {
      throw new Error(`Користувач '${name}' не знайдений.`);
    }

    const person = personData.results[0];

    const filmURLs = person.films;
    const filmPromises = filmURLs.map(async (filmURL) => {
      const filmData = await fetchSWAPI(filmURL);
      return {
        person: person.name,
        title: filmData.title,
        episode_id: filmData.episode_id,
      };
    });

    const films = await Promise.all(filmPromises);

    return {
      name: person.name,
      films: films,
    };
  } catch (error) {
    console.error('Помилка:', error);
    return null;
  }
}

async function testGetPersonFilms() {
  try {
    const lukeFilms = await getPersonFilms("Luke");
    console.log("lukeFilms", lukeFilms);

    const kenobiFilms = await getPersonFilms("Kenobi");
    console.log("kenobiFilms", kenobiFilms);
  } catch (error) {
    console.error("testGetPersonFilms error", error);
  }
}

testGetPersonFilms();