import * as utils from "./utils.js";
import * as service from "../service/index.js";

const ONE_SECOND = 1000;

//insert data
utils.insertContent(
  "time",
  utils.getDate(),
  ".container_date",
  false,
  "full-date"
);

//insert hours
setInterval(
  () =>
    utils.insertContent(
      "time",
      utils.getHour(),
      ".container_hours",
      true,
      "full-hours"
    ),
  ONE_SECOND
);

//get and insert geolcation
navigator.geolocation.getCurrentPosition(
  async ({ coords: { latitude, longitude } }) => {
    const { city, state } = await service.getLocation(latitude, longitude);
    const { temp_c, icon } = await service.getWeather(city);
    utils.insertContent(
      "span",
      `${city}-${state}`,
      ".location",
      false,
      "span-location"
    );
    utils.$selector(".icon").setAttribute("src", `https:${icon}`);
    utils.insertContent("span", `${temp_c}°`, ".temp", false, "span-temp");
  }
);

//timer
setInterval(() => {
  const timer = utils.$selector(".timer").innerText;
  if (Number(timer) > 0) {
    utils.insertContent("time", Number(timer) - 1, ".div-timer", true, "timer");
  }
}, ONE_SECOND);

// verify data and redirect
utils.$selector(".button-logout").addEventListener("click", () => utils.toLogin());