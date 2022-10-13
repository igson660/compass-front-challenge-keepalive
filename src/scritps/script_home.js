import * as utils from "./utils.js";

//insert hours
utils.insertContent(
  "time",
  utils.getDate(),
  ".container_date",
  false,
  "full-date"
);

setInterval(() =>
  utils.insertContent(
    "time",
    utils.getHour(),
    ".container_hours",
    true,
    "full-hours"
  )
);
