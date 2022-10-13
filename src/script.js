import * as utils from "./scritps/utils.js";
const HALF_SECOND = 500;

export const $selector = document.querySelector.bind(document);

//trasition icon
setInterval(() => utils.varifyContentInput(), HALF_SECOND);

// verify data and redirect
$selector(".button-form").addEventListener("click", () => utils.toLogin());
