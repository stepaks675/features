export const fetchweather = (place: string) => {
  return fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=ae1491d2ac4b4f5a993124853240211&q=${place}`
  ).then((r) => r.json());
};
