export const getLocation = async (lat, lon) => {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
  return fetch(url)
    .then((response) => response.json())
    .then(({ address: { city, state } }) => `${city}-${state}`);
};
