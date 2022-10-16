import * as utils from "./utils.js";
const HALF_SECOND = 500;

// verify data and redirect
utils
  .$selector(".button-form")
  .addEventListener("click", () => utils.toLogin());

//trasition icon
setInterval(() => utils.varifyContentInput(), HALF_SECOND);
