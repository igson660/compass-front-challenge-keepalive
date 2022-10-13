import * as utils from "./utils.js";
import * as service from "../service/index.js";

//insert data
utils.insertContent(
  "time",
  utils.getDate(),
  ".container_date",
  false,
  "full-date"
);

//insert hours
setInterval(() =>
  utils.insertContent(
    "time",
    utils.getHour(),
    ".container_hours",
    true,
    "full-hours"
  )
);

//get and insert geolcation
navigator.geolocation.getCurrentPosition(
  async ({ coords: { latitude, longitude } }) => {
    const location = await service.getLocation(latitude, longitude);
    utils.insertContent("span", location, ".location", false, "span-location");
  }
);
