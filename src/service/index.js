export const getLocation = (lat, lon) => {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
  return fetch(url)
    .then((res) => res.json())
    .then(({ address: { city, state } }) => {
      return { city, state };
    });
};

export const getWeather = (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=99f70ca4aab54226a63234438221310&q=4${city}&aqi=no`;
  return fetch(url)
    .then((res) => res.json())
    .then(
      ({
        current: {
          temp_c,
          condition: { icon },
        },
      }) => {
        return { temp_c, icon };
      }
    );
};
