import * as utils from "./scritps/utils.js";
const ONE_SECOND = 1000;

export const $selector = document.querySelector.bind(document);

$selector(".input-email").addEventListener("click", () =>
  utils.emojiTransition(".email", "selected")
);

$selector(".input-password").addEventListener("click", () =>
  utils.emojiTransition(".password", "selected")
);

setInterval(() => utils.varifyContentInput(), ONE_SECOND);
