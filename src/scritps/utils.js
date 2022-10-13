import { $selector } from "../script.js";

export const emojiTransition = (emojiEl, className) => {
  $selector(emojiEl).classList.add(className);
};

export const varifyContentInput = () => {
  const email = $selector(".input-email");
  const password = $selector(".input-password");
  email.value ? false : $selector(".email").classList.remove("selected");
  password.value ? false : $selector(".password").classList.remove("selected");
  console.log("chamou");
};
