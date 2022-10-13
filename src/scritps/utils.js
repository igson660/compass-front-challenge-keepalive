import { $selector } from "../script.js";

export const varifyContentInput = () => {
  const email = $selector(".input-user");
  const password = $selector(".input-password");
  email.value
    ? $selector(".user").classList.add("selected")
    : $selector(".user").classList.remove("selected");
  password.value
    ? $selector(".password").classList.add("selected")
    : $selector(".password").classList.remove("selected");
};

export const toLogin = () => {
  const email = $selector(".input-user").value;
  const password = $selector(".input-password").value;
  const spanError = $selector(".message-error");

  if (email === "admin" && password === "admin") {
    const path = window.location.href.replace("index.html", "pages/home.html");
    window.location.href = path;
    return;
  }
  spanError.style.display = "block";
};
