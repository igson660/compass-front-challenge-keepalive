import { getLocation, getWeather } from "../service/index.js";
import { insertContent, getHour, $selector } from "./utils.js";
import { departureConfirmation, getDate } from "./utils.js";

const ONE_SECOND = 1000;

//insert data
insertContent("time", getDate(), ".container_date", false, "full-date");

//insert hours
setInterval(
  () =>
    insertContent("time", getHour(), ".container_hours", true, "full-hours"),
  ONE_SECOND
);

//get and insert geolcation
navigator.geolocation.getCurrentPosition(
  async ({ coords: { latitude, longitude } }) => {
    const { city, state } = await getLocation(latitude, longitude);
    const { temp_c, icon } = await getWeather(city);
    insertContent(
      "span",
      `${city}-${state}`,
      ".location",
      false,
      "span-location"
    );

    $selector(".icon").setAttribute("src", `https:${icon}`);
    insertContent("span", `${temp_c}°`, ".temp", false, "span-temp");
  }
);

//timer
const interval = setInterval(() => {
  const timer = Number($selector(".timer").innerText);
  if (timer > 0) {
    return insertContent("time", timer - 1, ".div-timer", true, "timer");
  }
  clearInterval(interval);
  departureConfirmation(null);
}, ONE_SECOND);

// verify data and redirect
$selector(".button-logout").addEventListener("click", ({ target: { name } }) =>
  departureConfirmation(name)
);
